# CIS, country by country

An interactive one-page installation about the countries of the Commonwealth of Independent States.
Each country is shown as an extruded 3D map textured with its flag, with a flag pole on the capital,
its own typeface, pose and lighting, and a bento card of key facts.

Countries: Armenia, Azerbaijan, Belarus, Kazakhstan, Kyrgyzstan, Moldova, Russia, Tajikistan,
Turkmenistan (associate member) and Uzbekistan.

## Run

Open `index.html` in a browser, or publish the repository with GitHub Pages
(Settings → Pages → Deploy from branch → `main`, root).

Controls: the arrow buttons or the ← → keys switch country, the round buttons jump to one,
dragging rotates the model.

## Edit

- `src/data.js` — texts, figures, colours, fonts and poses for each country
- `src/main.js` — the 3D scene (three.js)
- `src/geo.js` — generated outlines and flags
- `styles.css`, `index.html` — layout

After changing anything in `src/`, rebuild the bundle with `./build.sh` (needs Node.js).

## Notes

- Figures are rounded. Population: national statistics and UN estimates, 2025–26.
  GDP: IMF World Economic Outlook, April 2026. Heads of state as of November 2026.
- The bust in the card is an abstract sculpture, not a portrait.
- Moldova has given notice of withdrawal from the CIS, effective 8 April 2027.

## Credits

- [three.js](https://threejs.org) (MIT), vendored in `vendor/`
- Country outlines: [Natural Earth](https://www.naturalearthdata.com) (public domain)
- Flags: [flag-icons](https://github.com/lipis/flag-icons) (MIT)
- Typefaces: Google Fonts
