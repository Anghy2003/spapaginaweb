// Builds the brand assets from the customer's own logo file (app/src/logo.png):
//  - keys the flat black plate out to transparency so the mark reads on any section
//  - splits the stacked lockup into mark + wordmark, recomposed side by side for the header
//  - emits a dark-ink variant for the light mobile nav bar
const sharp = require('sharp');
const fs = require('fs');
const SRC = 'src/logo.png';
const OUT = 'public/assets/brand';

// Black plate -> alpha. The art is turquoise/white on ~#0B0B0B, so luminance drives alpha.
async function keyOut(buf) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = info.width * info.height;
  for (let i = 0; i < px; i++) {
    const o = i * info.channels;
    const r = data[o], g = data[o + 1], b = data[o + 2];
    const lum = Math.max(r, g, b);
    const a = lum <= 24 ? 0 : lum >= 60 ? 255 : Math.round(((lum - 24) / 36) * 255);
    data[o + 3] = a;
    if (a > 0 && a < 255) {
      // un-premultiply against the black plate so edges don't go muddy
      const k = 255 / a;
      data[o] = Math.min(255, Math.round(r * k));
      data[o + 1] = Math.min(255, Math.round(g * k));
      data[o + 2] = Math.min(255, Math.round(b * k));
    }
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } }).png().toBuffer();
}

// Turns the white/grey ink dark while leaving the turquoise alone, for use on light backgrounds.
async function darkenInk(buf) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = info.width * info.height;
  for (let i = 0; i < px; i++) {
    const o = i * info.channels;
    const r = data[o], g = data[o + 1], b = data[o + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;
    if (sat < 0.25) {          // neutral ink -> brand near-black
      data[o] = 11; data[o + 1] = 14; data[o + 2] = 15;
    }
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } }).png().toBuffer();
}

(async () => {
  const src = fs.readFileSync(SRC);
  const meta = await sharp(src).metadata();
  console.log('source', meta.width + 'x' + meta.height);

  const keyed = await keyOut(src);

  // sharp runs trim() early in its pipeline, so extract and trim need separate passes.
  // The circle bottom sits at ~0.62 of the height; split below it so no sliver leaks
  // into the wordmark band.
  const SPLIT = Math.round(meta.height * 0.655);
  const markBand = await sharp(keyed).extract({ left: 0, top: 0, width: meta.width, height: SPLIT }).toBuffer();
  const markRaw = await sharp(markBand).trim({ threshold: 1 }).toBuffer();
  const wordBand = await sharp(keyed)
    .extract({ left: 0, top: SPLIT, width: meta.width, height: meta.height - SPLIT })
    .toBuffer();
  const wordRaw = await sharp(wordBand).trim({ threshold: 1 }).toBuffer();

  const mm = await sharp(markRaw).metadata();
  const wm = await sharp(wordRaw).metadata();
  console.log('mark', mm.width + 'x' + mm.height, ' wordmark', wm.width + 'x' + wm.height);

  // Horizontal lockup for the header: mark at full height, wordmark at ~58% of it.
  const H = 240;
  const markW = Math.round((mm.width / mm.height) * H);
  const wordH = Math.round(H * 0.58);
  const wordW = Math.round((wm.width / wm.height) * wordH);
  const GAP = Math.round(H * 0.14);

  async function lockup(markBuf, wordBuf, file) {
    await sharp({
      create: { width: markW + GAP + wordW, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
    })
      .composite([
        { input: await sharp(markBuf).resize({ height: H }).toBuffer(), left: 0, top: 0 },
        { input: await sharp(wordBuf).resize({ height: wordH }).toBuffer(), left: markW + GAP, top: Math.round((H - wordH) / 2) },
      ])
      .png()
      .toFile(OUT + '/' + file);
  }

  await lockup(markRaw, wordRaw, 'logo.png');
  await lockup(await darkenInk(markRaw), await darkenInk(wordRaw), 'logo-dark.png');

  // Stacked lockup (full original artwork, transparent plate)
  await sharp(keyed).trim({ threshold: 1 }).resize({ height: 640 }).png().toFile(OUT + '/logo-stacked.png');

  // Square social/share image: the original artwork on its black plate
  const side = Math.min(meta.width, meta.height);
  await sharp(src)
    .extract({ left: Math.round((meta.width - side) / 2), top: 0, width: side, height: side })
    .resize(1200, 1200)
    .png()
    .toFile(OUT + '/og.png');

  // Favicon: the mark alone on the plate reads far better than the full lockup at 32px
  await sharp({ create: { width: 512, height: 512, channels: 4, background: { r: 8, g: 10, b: 11, alpha: 1 } } })
    .composite([{ input: await sharp(markRaw).resize({ height: 384 }).toBuffer(), gravity: 'centre' }])
    .png()
    .toFile(OUT + '/icon.png');

  for (const f of ['logo.png', 'logo-dark.png', 'logo-stacked.png', 'og.png', 'icon.png']) {
    const m = await sharp(OUT + '/' + f).metadata();
    console.log(f, m.width + 'x' + m.height);
  }
})();
