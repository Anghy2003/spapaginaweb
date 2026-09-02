// Takes the clinic's own treatment clips from app/spa/, stamps the brand logo on them and
// writes web-sized MP4s + poster frames into public/assets/spa/.
// The WhatsApp originals are 45 MB total, which is far too heavy to ship; they are re-encoded
// to a 720px long edge with no audio (the gallery plays them muted).
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const ffmpeg = require('ffmpeg-static');
const ffprobe = require('ffprobe-static').path;

const SRC = 'spa';
const OUT = 'public/assets/spa';
const LOGO = 'public/assets/brand/logo.png';
const MAX_EDGE = 720;

// source file -> published slug, in the order they should appear
const CLIPS = [
  ['WhatsApp Video 2026-0.mp4', 'limpieza-facial-profunda'],
  ['WhatsApp Video 2026-08-1.mp4', 'mesoterapia-corporal'],
  ['WhatsApp Video 2026-08-14 at 12.1.mp4', 'tratamiento-corporal'],
  ['WhatsApp Video 2026-08-14 at 12.17..mp4', 'mesoterapia'],
  ['WhatsApp Video 2026-08-14 at 12.17.44 PM.mp4', 'sueros-y-vitaminas'],
  ['WhatsApp Video 2026-08-14 at 12.17.45 PM.mp4', 'resultado-facial'],
  ['WhatsApp Video 2026-08-14.mp4', 'tratamiento-localizado'],
];

// timestamp (seconds) to lift the poster from — picked per clip so the still shows the work
const POSTER_AT = {
  'limpieza-facial-profunda': 18,
  'mesoterapia-corporal': 18,
  'tratamiento-corporal': 15,
  mesoterapia: 18,
  'sueros-y-vitaminas': 18,
  'resultado-facial': 5,
  'tratamiento-localizado': 8,
};

const even = (n) => (n % 2 ? n - 1 : n);

function probe(file) {
  const out = execFileSync(ffprobe, [
    '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'json', file,
  ]).toString();
  const s = JSON.parse(out).streams[0];
  return { w: s.width, h: s.height };
}

fs.mkdirSync(OUT, { recursive: true });
const manifest = [];

for (const [file, slug] of CLIPS) {
  const src = path.join(SRC, file);
  if (!fs.existsSync(src)) { console.log('MISSING:', src); continue; }

  const { w, h } = probe(src);
  const scale = Math.min(1, MAX_EDGE / Math.max(w, h));
  const tw = even(Math.round(w * scale));
  const th = even(Math.round(h * scale));

  // Portrait clips are narrow, so a flat 26% of width leaves the wordmark unreadable —
  // scale the stamp against the frame's shorter edge instead, with a floor.
  const wmW = even(Math.max(150, Math.round(tw * (tw >= th ? 0.26 : 0.46)))); 
  const margin = Math.round(tw * 0.03);

  const filter =
    `[0:v]scale=${tw}:${th}[v];` +
    `[1:v]scale=${wmW}:-1,format=rgba,colorchannelmixer=aa=0.72[wm];` +
    `[v][wm]overlay=W-w-${margin}:H-h-${margin}`;

  const mp4 = path.join(OUT, slug + '.mp4');
  execFileSync(ffmpeg, [
    '-y', '-i', src, '-i', LOGO,
    '-filter_complex', filter,
    '-an',                              // gallery plays muted; dropping audio saves ~15%
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '30',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    mp4,
  ], { stdio: ['ignore', 'ignore', 'pipe'] });

  const jpg = path.join(OUT, slug + '.jpg');
  execFileSync(ffmpeg, [
    '-y', '-ss', String(POSTER_AT[slug] ?? 5), '-i', mp4,
    '-frames:v', '1', '-q:v', '4', jpg,
  ], { stdio: ['ignore', 'ignore', 'pipe'] });

  const before = fs.statSync(src).size, after = fs.statSync(mp4).size;
  manifest.push({ slug, w: tw, h: th, kb: Math.round(after / 1024) });
  console.log(
    `${slug.padEnd(26)} ${w}x${h} -> ${tw}x${th}   ` +
    `${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB`
  );
}

console.log('\ntotal published:', Math.round(manifest.reduce((a, m) => a + m.kb, 0) / 1024 * 10) / 10, 'MB');
fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
