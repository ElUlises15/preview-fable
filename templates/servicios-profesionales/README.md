# Plantilla `servicios-profesionales` — Servicios profesionales con turnos y tarifas (estudio, consultorio, academia)

Base: demo `estudio-vinilo` mejorada con Claude Fable 5.2 (10/11/2026), convertida a plantilla. Estática (HTML + CSS + JS mínimo), mobile-first, sin build ni dependencias pesadas.
- Skill obligatoria: `web-factory-anti-gen-rico` (no publicar si queda genérica).

## Cómo personalizar
1. Copiá la carpeta y abrí `index.html` en el navegador (no necesita servidor).
2. Buscá y reemplazá cada placeholder: {{BARRIO}}, {{CIUDAD}}, {{DESCRIPCION_SEO}}, {{NOMBRE}}, {{PRECIO_1}}, {{PRECIO_2}}, {{RUBRO}}, {{WHATSAPP_VISIBLE}}.
3. WhatsApp: reemplazá `https://wa.me/549XXXXXXXXXX` por `https://wa.me/549` + área sin 0 + número sin 15, y revisá el `?text=` precargado (en rioplatense, con vos).
4. Textos de ejemplo: titulares, productos/servicios, notas y captions vienen de la demo original. Reescribilos con info REAL del cliente. No inventes precios, horarios, reseñas ni cifras: si no los tenés, sacá el bloque.
5. Borrá el banner `.tpl-banner` (primera línea del `<body>`) y las notas `.demo-note` / avisos de "demo" o "ficticio" cuando el contenido sea real.
6. Fotos: `assets/images/banda.webp, assets/images/consolas.webp, assets/images/hero-sala.webp, assets/images/vinilos.webp` son imágenes ilustrativas generadas con IA para la demo. Reemplazalas por fotos del cliente (WebP, ~1600px de ancho, <300 KB) manteniendo nombres o actualizando `src`, `width` y `height`.
7. Colores y tipografías: variables CSS al inicio de `styles.css` (`:root`). Máximo 2 familias tipográficas.
8. Antes de publicar: quitá `<meta name="robots" content="noindex, nofollow">` y cambiá `robots.txt` (ahora bloquea todo) solo cuando el cliente apruebe.

## QA mínima
- 390 px y 1280 px sin scroll horizontal; botones ≥ 44 px; foco visible; `prefers-reduced-motion`.
- Todos los links de WhatsApp con el número real y mensaje precargado.
- Sin recursos rotos (consola limpia).
