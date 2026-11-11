import * as THREE from 'three';
import { RoomEnvironment } from '../vendor/RoomEnvironment.js';
import { COUNTRIES } from './data.js';
import { GEO, FLAGS } from './geo.js';

const $ = (id) => document.getElementById(id);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const DEG = Math.PI / 180;

/* ------------------------------------------------------------------ */
/* Formatting                                                           */
/* ------------------------------------------------------------------ */
const trim = (n, d) => String(+n.toFixed(d));
const fmtPop = (n) => (n >= 1e6 ? `${trim(n / 1e6, 1)} million` : n.toLocaleString('en-US'));
const fmtArea = (n) => (n >= 1e6 ? `${trim(n / 1e6, 2)} million` : n.toLocaleString('en-US'));
const fmtMoney = (n) => (n >= 1e12 ? `$${trim(n / 1e12, 2)} trillion` : `$${trim(n / 1e9, 1)} billion`);
const fmtPc = (n) => `$${(Math.round(n / 100) * 100).toLocaleString('en-US')}`;

/* ------------------------------------------------------------------ */
/* Main scene: extruded country maps                                    */
/* ------------------------------------------------------------------ */
const stage = $('stage');
const renderer = new THREE.WebGLRenderer({ canvas: $('scene'), antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.42;

const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
camera.position.set(0, 2.3, 6.4);
const lookAt = new THREE.Vector3(0, 1.05, 0);
camera.lookAt(lookAt);

const hemi = new THREE.HemisphereLight(0xffffff, 0x8a8f99, 0.65);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xffffff, 1.9);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -3.4;
sun.shadow.camera.right = 3.4;
sun.shadow.camera.top = 3.4;
sun.shadow.camera.bottom = -3.4;
sun.shadow.camera.near = 0.5;
sun.shadow.camera.far = 20;
sun.shadow.bias = -0.0006;
sun.shadow.normalBias = 0.02;
sun.shadow.radius = 7;
scene.add(sun, sun.target);
sun.target.position.set(0, 0.6, 0);

const rim = new THREE.PointLight(0xffffff, 14, 12, 1.6);
rim.position.set(-2.6, 1.2, -1.8);
scene.add(rim);

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(60, 60),
  new THREE.ShadowMaterial({ opacity: 0.3, color: 0x000000 })
);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

function flagTexture(code) {
  const W = 1536, H = 1152;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#888';
  ctx.fillRect(0, 0, W, H);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const svg = FLAGS[code].replace('<svg ', `<svg width="${W}" height="${H}" preserveAspectRatio="none" `);
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0, W, H);
    tex.needsUpdate = true;
  };
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  return tex;
}

const DEPTH = 0.16;

function buildCountry(c) {
  const g = GEO[c.code];
  const tex = flagTexture(c.code);

  const shapes = g.polys.map((ring) => {
    const s = new THREE.Shape();
    ring.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)));
    s.closePath();
    return s;
  });
  const geo = new THREE.ExtrudeGeometry(shapes, {
    depth: DEPTH,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.008,
    bevelSegments: 2,
    curveSegments: 1,
  });
  // Stretch the flag over the bounding box of the outline.
  const pos = geo.attributes.position;
  const uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    uv.setXY(i, pos.getX(i) / g.w + 0.5, pos.getY(i) / g.h + 0.5);
  }
  geo.translate(0, 0, -DEPTH / 2);

  const top = new THREE.MeshPhysicalMaterial({
    map: tex,
    roughness: 0.42,
    metalness: 0,
    clearcoat: 0.55,
    clearcoatRoughness: 0.25,
  });
  const side = new THREE.MeshStandardMaterial({ color: c.theme.side, roughness: 0.5, metalness: 0.15 });
  const mesh = new THREE.Mesh(geo, [top, side]);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  // Flag pole planted on the capital.
  const pin = new THREE.Group();
  pin.position.set(g.cap[0], g.cap[1], DEPTH / 2);
  const metal = new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.25, metalness: 0.9 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.011, 0.62, 12), metal);
  pole.rotation.x = Math.PI / 2;
  pole.position.z = 0.31;
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.02, 24), metal);
  base.rotation.x = Math.PI / 2;
  base.position.z = 0.01;
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.02, 16, 12), metal);
  knob.position.z = 0.63;
  const clothGeo = new THREE.PlaneGeometry(0.34, 0.2, 18, 6);
  clothGeo.translate(0.17, 0, 0);
  const cloth = new THREE.Mesh(
    clothGeo,
    new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, roughness: 0.7 })
  );
  cloth.rotation.x = Math.PI / 2;
  cloth.position.z = 0.5;
  cloth.userData.rest = clothGeo.attributes.position.array.slice();
  [pole, base, knob, cloth].forEach((m) => (m.castShadow = true));
  pin.add(pole, base, knob, cloth);

  const tiltGroup = new THREE.Group();
  tiltGroup.add(mesh, pin);
  tiltGroup.scale.setScalar(Math.min(1, 1.45 / g.h)); // keep tall countries inside the frame
  const root = new THREE.Group();
  root.add(tiltGroup);
  root.visible = false;
  scene.add(root);
  return { root, tiltGroup, cloth, shown: 0, target: 0, dir: 1 };
}

const models = COUNTRIES.map(buildCountry);

function wave(cloth, t) {
  const p = cloth.geometry.attributes.position;
  const rest = cloth.userData.rest;
  for (let i = 0; i < p.count; i++) {
    const x = rest[i * 3];
    const y = rest[i * 3 + 1];
    p.setZ(i, Math.sin(x * 22 - t * 5 + y * 6) * 0.022 * (x / 0.34));
  }
  p.needsUpdate = true;
  cloth.geometry.computeVertexNormals();
}

/* ------------------------------------------------------------------ */
/* Bust: an abstract sculpture, not a likeness of anyone                */
/* ------------------------------------------------------------------ */
const bustCanvas = $('bust');
const bustRenderer = new THREE.WebGLRenderer({ canvas: bustCanvas, antialias: true, alpha: true });
bustRenderer.setPixelRatio(Math.min(devicePixelRatio, 2));
bustRenderer.outputColorSpace = THREE.SRGBColorSpace;
const bustScene = new THREE.Scene();
const bustCam = new THREE.PerspectiveCamera(38, 1, 0.1, 20);
bustCam.position.set(0, 0.3, 4.3);
bustCam.lookAt(0, 0.12, 0);
bustScene.add(new THREE.HemisphereLight(0xffffff, 0x444a55, 0.9));
const bustKey = new THREE.DirectionalLight(0xffffff, 2.4);
bustKey.position.set(2, 3, 3);
const bustRim = new THREE.DirectionalLight(0xffffff, 3);
bustRim.position.set(-3, 1.5, -2.5);
bustScene.add(bustKey, bustRim);

const plaster = new THREE.MeshStandardMaterial({ color: 0xf4efe4, roughness: 0.62 });
const bust = new THREE.Group();
const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 48, 32), plaster);
head.scale.set(0.84, 1.08, 0.94);
head.position.y = 0.92;
const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.125, 0.16, 0.3, 32), plaster);
neck.position.y = 0.55;
const profile = [
  [0, 0.5], [0.15, 0.5], [0.3, 0.44], [0.5, 0.33], [0.6, 0.18], [0.6, 0], [0.52, -0.2], [0.36, -0.3], [0, -0.3],
].map(([x, y]) => new THREE.Vector2(x, y));
const torso = new THREE.Mesh(new THREE.LatheGeometry(profile, 48), plaster);
torso.scale.z = 0.56;
const socleMat = new THREE.MeshStandardMaterial({ color: 0x23252b, roughness: 0.4, metalness: 0.3 });
const socle = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.22, 40), socleMat);
socle.position.y = -0.4;
const collar = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.035, 16, 48), socleMat);
collar.rotation.x = Math.PI / 2;
collar.scale.y = 0.75;
collar.position.y = 0.47;
bust.add(head, neck, torso, socle, collar);
bust.position.y = 0.2;
bustScene.add(bust);
let bustSpin = 0;

/* ------------------------------------------------------------------ */
/* DOM                                                                  */
/* ------------------------------------------------------------------ */
const hero = document.querySelector('.hero');
const card = $('card');
const nameEl = $('name');
const rail = $('rail');
$('total').textContent = COUNTRIES.length;

COUNTRIES.forEach((c, i) => {
  const b = document.createElement('button');
  b.textContent = c.code.toUpperCase();
  b.setAttribute('aria-label', c.name);
  b.title = c.name;
  b.addEventListener('click', () => go(i, i >= current ? 1 : -1));
  rail.appendChild(b);
});

function fitName() {
  nameEl.style.fontSize = '';
  const max = hero.clientWidth;
  const w = nameEl.scrollWidth;
  if (w > max) {
    const size = parseFloat(getComputedStyle(nameEl).fontSize);
    nameEl.style.fontSize = `${Math.floor((size * max) / w)}px`;
  }
}

function fill(c, i) {
  const root = document.documentElement.style;
  root.setProperty('--bg', c.theme.bg);
  root.setProperty('--ink', c.theme.ink);
  root.setProperty('--accent', c.theme.accent);
  root.setProperty('--deep', c.theme.deep);

  $('idx').textContent = i + 1;
  $('status').textContent = c.status;
  nameEl.textContent = c.name;
  nameEl.style.fontFamily = c.font;
  nameEl.style.fontWeight = c.weight;
  nameEl.style.fontStyle = c.italic ? 'italic' : 'normal';
  nameEl.style.letterSpacing = c.tracking;
  $('official').textContent = c.official === c.name ? '' : c.official;

  $('sym').innerHTML = c.symbol.svg;
  $('symlabel').textContent = c.symbol.label;
  $('capital').textContent = c.capital;
  $('text').textContent = c.text;
  $('pop').textContent = fmtPop(c.population);
  $('popnote').textContent = c.populationNote || 'people';
  $('area').textContent = fmtArea(c.area);
  $('gdp').textContent = fmtMoney(c.gdp);
  $('pc').textContent = fmtPc(c.gdp / c.population);
  $('currency').textContent = c.currency;
  $('languages').textContent = c.languages;
  $('independence').textContent = c.independence;
  $('fact').textContent = c.fact;
  $('leader').textContent = c.leader.name;
  $('since').textContent = c.leader.since;
  $('leadernote').textContent = c.leader.note || '';
  $('nextname').textContent = COUNTRIES[(i + 1) % COUNTRIES.length].name;

  [...rail.children].forEach((b, j) => b.setAttribute('aria-current', j === i ? 'true' : 'false'));
  document.title = `${c.name} · CIS, country by country`;
  fitName();
  document.fonts?.ready.then(fitName);
}

/* ------------------------------------------------------------------ */
/* Switching countries                                                  */
/* ------------------------------------------------------------------ */
let current = 0;
let swapTimer = 0;

function setLights(c) {
  const a = c.pose.light * DEG;
  sun.position.set(Math.cos(a) * 4.2, 6.2, Math.sin(a) * 2.6 + 3.2);
  rim.color.set(c.theme.accent);
  bustRim.color.set(c.theme.bg);
}

function go(i, dir = 1) {
  i = (i + COUNTRIES.length) % COUNTRIES.length;
  if (i === current) return;
  models[current].target = 0;
  models[current].dir = -dir;
  current = i;
  models[i].target = 1;
  models[i].dir = dir;
  if (reduceMotion) models.forEach((m) => (m.shown = m.target));
  drag.yaw = 0;
  drag.pitch = 0;
  bustSpin += Math.PI * 2 * dir;
  setLights(COUNTRIES[i]);

  hero.classList.add('swap');
  card.classList.add('swap');
  clearTimeout(swapTimer);
  swapTimer = setTimeout(() => {
    fill(COUNTRIES[i], i);
    hero.classList.remove('swap');
    card.classList.remove('swap');
  }, reduceMotion ? 0 : 230);
  try { history.replaceState(null, '', `#${COUNTRIES[i].code}`); } catch (e) { /* file:// */ }
}

$('next').addEventListener('click', () => go(current + 1, 1));
$('prev').addEventListener('click', () => go(current - 1, -1));
addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') go(current + 1, 1);
  if (e.key === 'ArrowLeft') go(current - 1, -1);
});

/* ------------------------------------------------------------------ */
/* Pointer: drag to rotate, gentle parallax                             */
/* ------------------------------------------------------------------ */
const drag = { on: false, x: 0, y: 0, yaw: 0, pitch: 0 };
const mouse = { x: 0, y: 0 };
const sceneCanvas = $('scene');
sceneCanvas.addEventListener('pointerdown', (e) => {
  drag.on = true;
  drag.x = e.clientX;
  drag.y = e.clientY;
  sceneCanvas.setPointerCapture(e.pointerId);
});
sceneCanvas.addEventListener('pointermove', (e) => {
  if (!drag.on) return;
  drag.yaw += (e.clientX - drag.x) * 0.008;
  drag.pitch = Math.max(-0.7, Math.min(0.7, drag.pitch + (e.clientY - drag.y) * 0.005));
  drag.x = e.clientX;
  drag.y = e.clientY;
});
const release = () => (drag.on = false);
sceneCanvas.addEventListener('pointerup', release);
sceneCanvas.addEventListener('pointercancel', release);
addEventListener('pointermove', (e) => {
  mouse.x = e.clientX / innerWidth - 0.5;
  mouse.y = e.clientY / innerHeight - 0.5;
});

/* ------------------------------------------------------------------ */
/* Sizing                                                               */
/* ------------------------------------------------------------------ */
function resize() {
  const w = stage.clientWidth;
  const h = stage.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  const wide = innerWidth > 900;
  // Fit the 2-unit-wide model into the free area left of the card.
  const free = wide ? Math.max(0.35, 1 - Math.min(440, innerWidth * 0.38) / w - 0.06) : 0.92;
  const need = 2.9 / free; // world width that must be visible at the model's distance
  const dist = camera.position.distanceTo(lookAt);
  const vfov = 2 * Math.atan(need / camera.aspect / 2 / dist) / DEG;
  camera.fov = Math.max(vfov, wide ? 24 : 30);
  if (wide) camera.setViewOffset(w, h, w * (1 - free) * 0.5, -h * 0.11, w, h);
  else camera.clearViewOffset();
  camera.updateProjectionMatrix();

  const bw = bustCanvas.clientWidth;
  const bh = bustCanvas.clientHeight;
  bustRenderer.setSize(bw, bh, false);
  bustCam.aspect = bw / bh;
  bustCam.updateProjectionMatrix();
  fitName();
}
addEventListener('resize', resize);
new ResizeObserver(resize).observe(bustCanvas);

/* ------------------------------------------------------------------ */
/* Loop                                                                 */
/* ------------------------------------------------------------------ */
const easeOutBack = (t) => 1 + 2.2 * Math.pow(t - 1, 3) + 1.2 * Math.pow(t - 1, 2);
const clock = new THREE.Clock();
let bustYaw = 0;

function frame() {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;
  if (!drag.on) {
    drag.yaw += (0 - drag.yaw) * Math.min(1, dt * 2.2);
    drag.pitch += (0 - drag.pitch) * Math.min(1, dt * 2.2);
  }

  models.forEach((m, i) => {
    const speed = m.target > m.shown ? 1.5 : 2.6;
    m.shown += Math.sign(m.target - m.shown) * Math.min(Math.abs(m.target - m.shown), dt * speed);
    m.root.visible = m.shown > 0.001;
    if (!m.root.visible) return;
    const c = COUNTRIES[i];
    const s = m.target ? easeOutBack(m.shown) : m.shown * m.shown;
    const idle = reduceMotion ? 0 : 1;
    m.root.scale.setScalar(Math.max(s, 0.0001));
    m.root.position.y = 1.18 + Math.sin(t * 0.9) * 0.05 * idle - (1 - m.shown) * 0.5;
    m.root.rotation.y =
      c.pose.yaw * DEG + (1 - m.shown) * m.dir * 1.9 + drag.yaw + mouse.x * 0.3 + Math.sin(t * 0.45) * 0.07 * idle;
    m.tiltGroup.rotation.x = -c.pose.tilt * DEG + drag.pitch + mouse.y * 0.12;
    m.tiltGroup.rotation.z = c.pose.roll * DEG + Math.sin(t * 0.6) * 0.015 * idle;
    if (idle) wave(m.cloth, t);
  });
  renderer.render(scene, camera);

  bustYaw += (bustSpin - bustYaw) * Math.min(1, dt * 3.2);
  bust.rotation.y = bustYaw + mouse.x * 0.9 + 0.35;
  bustRenderer.render(bustScene, bustCam);
  requestAnimationFrame(frame);
}

/* ------------------------------------------------------------------ */
/* Start                                                                */
/* ------------------------------------------------------------------ */
const fromHash = COUNTRIES.findIndex((c) => c.code === location.hash.slice(1));
current = fromHash >= 0 ? fromHash : 0;
models[current].target = 1;
if (reduceMotion) models[current].shown = 1;
fill(COUNTRIES[current], current);
setLights(COUNTRIES[current]);
resize();
frame();
