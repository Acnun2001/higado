import { cp, mkdir, rm } from 'node:fs/promises'

await rm('dist', { recursive: true, force: true })
await mkdir('dist', { recursive: true })
await cp('site', 'dist', { recursive: true })
await cp('checkout', 'dist/checkout', { recursive: true })
await cp('media', 'dist/media', { recursive: true })

await mkdir('dist/_astro', { recursive: true })
await cp('site/global.CTLRVNJL.css', 'dist/_astro/global.CTLRVNJL.css')
await cp('site/_slug_.K-5Jo9uw.css', 'dist/_astro/_slug_.K-5Jo9uw.css')
await cp('site/downloaded/index.astro_astro_type_script_index_0_lang.B4wS0Iuu.js', 'dist/_astro/index.astro_astro_type_script_index_0_lang.B4wS0Iuu.js')
