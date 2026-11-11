# Plantilla `almacen` — Almacén de barrio / despensa / dietética / fiambrería (landing)

Base: demo `panaderia-hogaza` mejorada con Claude Fable 5.2 (10/11/2026), convertida a plantilla. Estática (HTML + CSS + JS mínimo), mobile-first, sin build ni dependencias pesadas.
- Kit vertical: `/workspace/webteam/kits/gastro.md`.
- Skill obligatoria: `web-factory-anti-gen-rico` (no publicar si queda genérica).

## Cómo personalizar
1. Copiá la carpeta y abrí `index.html` en el navegador (no necesita servidor).
2. Buscá y reemplazá cada placeholder: {{BAJADA_HERO}}, {{BAJADA_PRODUCTOS}}, {{BARRIO}}, {{CIUDAD}}, {{DESCRIPCION_SEO}}, {{DETALLE_PRODUCTO_1}}, {{DETALLE_PRODUCTO_2}}, {{DETALLE_PRODUCTO_3}}, {{DIAS_FINDE}}, {{DIAS_SEMANA}}, {{DIA_CERRADO}}, {{EPIGRAFE_FOTO_HERO}}, {{FRASE_DESTACADA}}, {{HORARIO_FINDE}}, {{HORARIO_SEMANA}}, {{LEMA}}, {{NOMBRE}}, {{PASO_1}}, {{PASO_1_DETALLE}}, {{PASO_2}}, {{PASO_2_DETALLE}}, {{PASO_3}}, {{PASO_3_DETALLE}}, {{PEDIDO_TIPICO}}, {{PRODUCTO_DESTACADO_1}}, {{PRODUCTO_DESTACADO_2}}, {{PRODUCTO_DESTACADO_3}}, {{RUBRO}}, {{SELLO_1}}, {{SELLO_2}}, {{SELLO_3}}, {{TEXTO_OFICIO}}, {{TEXTO_VISITA}}, {{TITULAR_OFICIO_1}}, {{TITULAR_OFICIO_2}}, {{TITULAR_OFICIO_3}}, {{WHATSAPP_VISIBLE}}.
3. WhatsApp: reemplazá `https://wa.me/549XXXXXXXXXX` por `https://wa.me/549` + área sin 0 + número sin 15, y revisá el `?text=` precargado (en rioplatense, con vos).
4. Textos de ejemplo: titulares, productos/servicios, notas y captions vienen de la demo original. Reescribilos con info REAL del cliente. No inventes precios, horarios, reseñas ni cifras: si no los tenés, sacá el bloque.
5. Borrá el banner `.tpl-banner` (primera línea del `<body>`) y las notas `.demo-note` / avisos de "demo" o "ficticio" cuando el contenido sea real.
6. Fotos: `assets/images/hero-hogaza.webp, assets/images/horno.webp, assets/images/masa.webp, assets/images/mostrador.webp` son imágenes ilustrativas generadas con IA para la demo. Reemplazalas por fotos del cliente (WebP, ~1600px de ancho, <300 KB) manteniendo nombres o actualizando `src`, `width` y `height`.
7. Colores y tipografías: variables CSS al inicio de la hoja de estilos (`styles.css` o `style.css`) (`:root`). Máximo 2 familias tipográficas.
8. Antes de publicar: quitá `<meta name="robots" content="noindex, nofollow">` y cambiá `robots.txt` (ahora bloquea todo) solo cuando el cliente apruebe.

## QA mínima
- 390 px y 1280 px sin scroll horizontal; botones ≥ 44 px; foco visible; `prefers-reduced-motion`.
- Todos los links de WhatsApp con el número real y mensaje precargado.
- Sin recursos rotos (consola limpia).

## Específico de almacén (landing)
- **Base**: landing de panadería Hogaza reescrita para almacén de barrio. Los textos que no son placeholders ("Lo de siempre, a la vuelta de casa", "Del estante a tu mesa", etc.) son copy de ejemplo: ajustalos al tono del cliente.
- **Productos destacados**: 3 tarjetas (`{{PRODUCTO_DESTACADO_1..3}}` + `{{DETALLE_PRODUCTO_1..3}}`). Usá rubros o productos que el almacén realmente tenga (fiambres, quesos, sueltos/dietética, bebidas, limpieza...). Sin precios salvo que el cliente los publique y se comprometa a actualizarlos.
- **Fotos**: las 4 imágenes actuales son de panadería (ilustrativas, IA). Para almacén reemplazalas sí o sí: góndola/estantes, mostrador, fiambrería y fachada del local. Actualizá también los `alt`.
- **WhatsApp**: el mensaje precargado queda "Hola {{NOMBRE}}, quiero consultar si tienen...": pensado para preguntar stock o pedir que separen algo.
- **Si el cliente quiere catálogo con pedido por WhatsApp**: según la web de Web Factory eso es el plan **Completa** ($450.000 de armado + $60.000/mes de mantenimiento, consultado el 11/11/2026). En ese caso conviene partir de la plantilla `ferreteria` (webapp con catálogo y carrito) en lugar de esta landing.

## Plan Web Factory de referencia
Según la web pública de Web Factory (https://web-factory-hjs.pages.dev/#precios, consultada el 11/11/2026), la demo base "Hogaza (landing panadería)" figura en el plan **Básica: $150.000 de armado + $30.000/mes de mantenimiento**. Ver `propuesta.html` (página de muestra comercial, interna). Si los precios de Web Factory cambian, actualizá esta sección y `propuesta.html` desde la web oficial; no los modifiques a mano.
