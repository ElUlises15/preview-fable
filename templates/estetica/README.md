# Plantilla `estetica` — Centro de estética / cosmetología / manicuría / depilación (multipágina con turnos por WhatsApp)

Base: demo `barberia-bruma` mejorada con Claude Fable 5.2 (10/11/2026), convertida a plantilla. Estática (HTML + CSS + JS mínimo), mobile-first, sin build ni dependencias pesadas.
- Kit vertical: `/workspace/webteam/kits/barberia.md`.
- Skill obligatoria: `web-factory-anti-gen-rico` (no publicar si queda genérica).

## Cómo personalizar
1. Copiá la carpeta y abrí `index.html` en el navegador (no necesita servidor).
2. Buscá y reemplazá cada placeholder: {{BAJADA_HERO}}, {{BARRIO}}, {{CIUDAD}}, {{DESCRIPCION_SEO}}, {{DIRECCION}}, {{EPIGRAFE_FOTO_2}}, {{EPIGRAFE_FOTO_3}}, {{EPIGRAFE_FOTO_4}}, {{FRASE_CIERRE}}, {{HORARIOS}}, {{NOMBRE}}, {{PRECIO_O_CONSULTAR}}, {{PREGUNTA_CTA}}, {{PREGUNTA_FAQ_2}}, {{RESPUESTA_FAQ_2}}, {{RUBRO}}, {{SERVICIO_1}}, {{SERVICIO_1_BAJADA}}, {{SERVICIO_1_DETALLE}}, {{SERVICIO_1_TITULAR}}, {{SERVICIO_2}}, {{SERVICIO_2_BAJADA}}, {{SERVICIO_2_DETALLE}}, {{SERVICIO_2_TITULAR}}, {{SERVICIO_3}}, {{SERVICIO_3_BAJADA}}, {{SERVICIO_3_DETALLE}}, {{SERVICIO_3_TITULAR}}, {{TEXTO_CUIDADO_EN_CASA}}, {{TEXTO_LOCAL}}, {{TEXTO_OFICIO}}, {{WHATSAPP_CARACTERISTICA}}, {{WHATSAPP_NUMERO}}, {{WHATSAPP_VISIBLE}}.
3. WhatsApp: reemplazá `https://wa.me/549XXXXXXXXXX` por `https://wa.me/549` + área sin 0 + número sin 15, y revisá el `?text=` precargado (en rioplatense, con vos).
4. Textos de ejemplo: titulares, productos/servicios, notas y captions vienen de la demo original. Reescribilos con info REAL del cliente. No inventes precios, horarios, reseñas ni cifras: si no los tenés, sacá el bloque.
5. Borrá el banner `.tpl-banner` (primera línea del `<body>`) y las notas `.demo-note` / avisos de "demo" o "ficticio" cuando el contenido sea real.
6. Fotos: `assets/images/equipo.webp, assets/images/fade-detalle.webp, assets/images/hero-sillon.webp, assets/images/productos.webp, assets/images/vidriera.webp` son imágenes ilustrativas generadas con IA para la demo. Reemplazalas por fotos del cliente (WebP, ~1600px de ancho, <300 KB) manteniendo nombres o actualizando `src`, `width` y `height`.
7. Colores y tipografías: variables CSS al inicio de la hoja de estilos (`styles.css` o `style.css`) (`:root`). Máximo 2 familias tipográficas.
8. Antes de publicar: quitá `<meta name="robots" content="noindex, nofollow">` y cambiá `robots.txt` (ahora bloquea todo) solo cuando el cliente apruebe.

## QA mínima
- 390 px y 1280 px sin scroll horizontal; botones ≥ 44 px; foco visible; `prefers-reduced-motion`.
- Todos los links de WhatsApp con el número real y mensaje precargado.
- Sin recursos rotos (consola limpia).

## Específico de estética (multipágina)
- **Base**: multipágina de Barbería Bruma (inicio, servicios, galería, contacto) reescrita para centro de estética. No hay kit de estética en `/workspace/webteam/kits/`: usá `barberia.md` como referencia de estructura y anti-patrones.
- **Tratamientos**: 3 en inicio y servicios (`{{SERVICIO_1..3}}` + `_BAJADA`, `_TITULAR`, `_DETALLE`). Usá los tratamientos reales del cliente (limpieza facial, manicuría/esmaltado semipermanente, depilación, cejas y pestañas, masajes...). Si ofrece más de 3, duplicá el bloque `<article>` en `servicios.html`. Precios: solo si el cliente los publica (`{{PRECIO_O_CONSULTAR}}`; si no, dejá "Consultar por WhatsApp").
- **Fotos**: las 5 imágenes son de BARBERÍA (sillón, fade, máquina, barberos). Para estética hay que reemplazarlas sí o sí (camilla, manos/uñas, productos, fachada) y reescribir los `alt` (hoy dicen "Foto de ejemplo..."). Si no hay fotos todavía, mejor pocas fotos reales que stock de "spa genérico".
- **Paleta**: la base es oscura (#121417 + cromo). Para estética suele convenir una paleta más cálida: cambiá las variables `:root` al inicio de `styles.css` (1 primario, 1 acento, neutros). Evitá rosa pastel + dorado genérico de "beauty".
- **Animación**: el hero tiene una "bruma" decorativa (botón "Pausar animación", respeta `prefers-reduced-motion`). Podés dejarla o sacarla.
- **Salud**: no prometas resultados médicos ni uses términos como "tratamiento médico" salvo que el cliente sea profesional habilitado; nada de antes/después sin consentimiento por escrito.

## Plan Web Factory de referencia
Según la web pública de Web Factory (https://web-factory-hjs.pages.dev/#precios, consultada el 11/11/2026), la demo base "Barbería Bruma (multipágina)" figura en el plan **Intermedia: $280.000 de armado + $45.000/mes de mantenimiento**. Ver `propuesta.html` (página de muestra comercial, interna). Si los precios de Web Factory cambian, actualizá esta sección y `propuesta.html` desde la web oficial; no los modifiques a mano.
