

import sharp from 'sharp'
import { readFileSync, writeFileSync, unlinkSync } from 'fs'

const astroPath = 'public/projects/astrouniverse.png'

await sharp(astroPath)
  .resize(900, null, { withoutEnlargement: true })
  .png({ quality: 80, compressionLevel: 9 })
  .toFile('public/projects/astrouniverse-tmp.png')

writeFileSync(astroPath, readFileSync('public/projects/astrouniverse-tmp.png'))
unlinkSync('public/projects/astrouniverse-tmp.png')

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f1419"/>
      <stop offset="100%" stop-color="#1e3a5f"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="80" y="280" fill="#ffffff" font-family="Georgia, serif" font-size="64" font-weight="700">Aayushi Pal</text>
  <text x="80" y="350" fill="#93c5fd" font-family="Arial, sans-serif" font-size="32">Web Developer and MERN Stack Developer</text>
  <text x="80" y="420" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="24">React · Node.js · MongoDB · REST APIs</text>
</svg>`

await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile('public/og-image.jpg')

const before = readFileSync(astroPath).length
console.log(`Compressed astrouniverse.png (${Math.round(before / 1024)} KB)`)
console.log('Created public/og-image.jpg')
