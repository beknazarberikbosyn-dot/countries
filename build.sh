#!/bin/sh
# Bundles src/ and the vendored three.js into app.js (works from file:// and GitHub Pages).
npx esbuild src/main.js --bundle --minify --format=iife --target=es2020 \
  --alias:three=./vendor/three.module.js --outfile=app.js
