# Plantilla `ferreteria` — Ferretería / corralón / pinturería con catálogo, stock y carrito de retiro (webapp)

Base: demo `mercadolocal` mejorada con Claude Fable 5.2 (10/11/2026), convertida a plantilla. Estática (HTML + CSS + JS mínimo), mobile-first, sin build ni dependencias pesadas.
- Skill obligatoria: `web-factory-anti-gen-rico` (no publicar si queda genérica).

## Cómo personalizar
1. Copiá la carpeta y abrí `index.html` en el navegador (no necesita servidor).
2. Buscá y reemplazá cada placeholder: {{BARRIO}}, {{DESCRIPCION_SEO}}, {{NOMBRE}}, {{NOMBRE_LINEA_1}}, {{NOMBRE_LINEA_2}}, {{RUBRO}}.
3. WhatsApp: reemplazá `https://wa.me/549XXXXXXXXXX` por `https://wa.me/549` + área sin 0 + número sin 15, y revisá el `?text=` precargado (en rioplatense, con vos).
4. Textos de ejemplo: titulares, productos/servicios, notas y captions vienen de la demo original. Reescribilos con info REAL del cliente. No inventes precios, horarios, reseñas ni cifras: si no los tenés, sacá el bloque.
5. Borrá el banner `.tpl-banner` (primera línea del `<body>`) y las notas `.demo-note` / avisos de "demo" o "ficticio" cuando el contenido sea real.
6. Fotos: `assets/images/candado.webp, assets/images/hero-local.webp, assets/images/manguera.webp, assets/images/pintura.webp, assets/images/taladro.webp, assets/images/tornillos.webp` son imágenes ilustrativas generadas con IA para la demo. Reemplazalas por fotos del cliente (WebP, ~1600px de ancho, <300 KB) manteniendo nombres o actualizando `src`, `width` y `height`.
7. Colores y tipografías: variables CSS al inicio de la hoja de estilos (`styles.css` o `style.css`) (`:root`). Máximo 2 familias tipográficas.
8. Antes de publicar: quitá `<meta name="robots" content="noindex, nofollow">` y cambiá `robots.txt` (ahora bloquea todo) solo cuando el cliente apruebe.

## QA mínima
- 390 px y 1280 px sin scroll horizontal; botones ≥ 44 px; foco visible; `prefers-reduced-motion`.
- Todos los links de WhatsApp con el número real y mensaje precargado.
- Sin recursos rotos (consola limpia).

## Específico de ferretería (webapp)
- **Catálogo**: los productos viven en `seed.js` (`window.SEED_PRODUCTS`). Los 12 productos, precios y stock son los de la demo ficticia TodoHierro: **reemplazalos por la lista real del cliente** (nombre, categoría, precio en pesos sin puntos, stock, unidad, descripción, imagen). Si el cliente no publica precios, no los inventes: pedile la lista.
- **Categorías**: array `cats` al inicio de `app.js` (Herramientas, Pinturas, Tornillería, Jardín, Cerrajería) — deben coincidir con `category` de cada producto. Los íconos (`drawings`) van en el mismo orden.
- **Fotos de producto**: `assets/images/*.webp` (ilustrativas, generadas con IA). La lista del selector de "Publicar un producto" está en `admin()` de `app.js`.
- **Mostrador (admin)**: `#/admin` con clave `demo` en modo navegador (localStorage). Sin backend no hay usuarios reales: para producción, conectar `/api/*` (products, login, checkout) o dejar el admin fuera.
- **Claves de localStorage**: prefijo `th-` (`th-cart`, `th-products`, `th-token`). Cambialo por uno del cliente para evitar choques.
- **Compra**: es *retiro por el local*, sin cobro. Si el cliente quiere pedido por WhatsApp, armar el link `https://wa.me/549XXXXXXXXXX?text=` con el detalle del carrito.

## Plan Web Factory de referencia
Según la web pública de Web Factory (https://web-factory-hjs.pages.dev/#precios, consultada el 11/11/2026), la demo base "TodoHierro (webapp ferretería)" figura en el plan **Completa: $450.000 de armado + $60.000/mes de mantenimiento**. Ver `propuesta.html` (página de muestra comercial, interna). Si los precios de Web Factory cambian, actualizá esta sección y `propuesta.html` desde la web oficial; no los modifiques a mano.
