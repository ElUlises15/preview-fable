# Plantilla `inmobiliaria` — Inmobiliaria de barrio / martillero / corredor matriculado (landing, 5 secciones)

Creada desde cero con **Claude Opus 5.5** (12/11/2026) siguiendo la skill `web-factory-anti-gen-rico` y el patrón de ficha `.wf-propiedad` de `/workspace/webteam/components-fable/`. Estática (HTML + CSS, sin JS), mobile-first, sin fuentes ni imágenes externas.
- Kit vertical: no hay kit de inmobiliaria en `/workspace/webteam/kits/`; el concepto visual es el cartel de chapa "Vende / Alquila" + grilla de plano + ficha técnica.
- Secciones: hero con accesos Venta / Alquiler / Tasación · Propiedades destacadas (3 fichas) · Servicios · Cómo trabajamos + corredor matriculado · FAQ + contacto. Footer con matrícula.

## Cómo personalizar
1. Copiá la carpeta y abrí `index.html` en el navegador.
2. Buscá y reemplazá cada placeholder (todos visibles, en mayúsculas entre llaves):
   {{AJUSTE_ALQUILER_2}} {{AMBIENTES_1}} {{AMBIENTES_2}} {{AMBIENTES_3}} {{ANIO}} {{ANTIGUEDAD_1}} {{ANTIGUEDAD_3}} {{APTO_CREDITO_1}} {{APTO_CREDITO_3}} {{BANOS_1}} {{BANOS_2}} {{BANOS_3}} {{BARRIO_PROPIEDAD_1}} {{BARRIO_PROPIEDAD_2}} {{BARRIO_PROPIEDAD_3}} {{BARRIO}} {{CIUDAD}} {{COLEGIO_PROFESIONAL}} {{DESCRIPCION_PROPIEDAD_1}} {{DESCRIPCION_PROPIEDAD_2}} {{DESCRIPCION_PROPIEDAD_3}} {{DETALLE_SERVICIO_1}} {{DETALLE_SERVICIO_2}} {{DETALLE_SERVICIO_3}} {{DETALLE_SERVICIO_4}} {{DIRECCION_OFICINA}} {{DORMITORIOS_1}} {{DORMITORIOS_2}} {{DORMITORIOS_3}} {{DURACION_CONTRATO_2}} {{EMAIL}} {{EXPENSAS_1}} {{EXPENSAS_2}} {{EXPENSAS_3}} {{EXTRA_1A}} {{EXTRA_1B}} {{EXTRA_1C}} {{EXTRA_2A}} {{EXTRA_2B}} {{EXTRA_2C}} {{EXTRA_3A}} {{EXTRA_3B}} {{EXTRA_3C}} {{FOTO_CORREDOR}} {{FOTO_PROPIEDAD_1_B}} {{FOTO_PROPIEDAD_1_C}} {{FOTO_PROPIEDAD_1_FRENTE}} {{FOTO_PROPIEDAD_2_B}} {{FOTO_PROPIEDAD_2_C}} {{FOTO_PROPIEDAD_2_FRENTE}} {{FOTO_PROPIEDAD_3_B}} {{FOTO_PROPIEDAD_3_FRENTE}} {{FOTO_PROPIEDAD_3_PLANO}} {{GARANTIA_2}} {{HORARIO_ATENCION}} {{INSTAGRAM}} {{M2_CUBIERTOS_1}} {{M2_CUBIERTOS_2}} {{M2_CUBIERTOS_3}} {{M2_TOTALES_1}} {{M2_TOTALES_3}} {{MAPA_OFICINA}} {{MATRICULA}} {{MONEDA_Y_CONDICION_1}} {{MONEDA_Y_CONDICION_2}} {{MONEDA_Y_CONDICION_3}} {{NOMBRE_CORREDOR}} {{NOMBRE}} {{OPERACION_3}} {{PRECIO_PROPIEDAD_1}} {{PRECIO_PROPIEDAD_2}} {{PRECIO_PROPIEDAD_3}} {{REFERENCIA_1}} {{REFERENCIA_2}} {{REFERENCIA_3}} {{RESPUESTA_CREDITO}} {{RESPUESTA_GARANTIAS}} {{RESPUESTA_HONORARIOS}} {{RESPUESTA_REQUISITOS_ALQUILER}} {{RESPUESTA_TASACION}} {{SERVICIO_1}} {{SERVICIO_2}} {{SERVICIO_3}} {{SERVICIO_4}} {{TIPO_PROPIEDAD_1}} {{TIPO_PROPIEDAD_2}} {{TIPO_PROPIEDAD_3}} {{WHATSAPP_VISIBLE}} {{ZONA_APROXIMADA_1}} {{ZONA_APROXIMADA_2}} {{ZONA_APROXIMADA_3}} 
3. WhatsApp: reemplazá `https://wa.me/549XXXXXXXXXX` por `https://wa.me/549` + característica sin 0 + número sin 15. En los `?text=` los placeholders van **URL-encodeados** al reemplazar (espacio → %20, á → %C3%A1).
4. Propiedades: cada ficha lleva `{{REFERENCIA_N}}` (el código interno de la inmobiliaria), tipo, barrio, precio y moneda, datos comparables y **zona aproximada** (nunca la dirección exacta). Si el cliente no publica precio, poné "Consultar" en vez de inventarlo. Para más de 3 propiedades, duplicá un `<article class="ficha">`.
5. Fotos: los bloques "Foto pendiente" son placeholders accesibles (`role="img"`). Reemplazalos por `<img>` WebP (~1600 px, <300 KB) con `width`, `height` y `alt` reales: frente, living, cocina, etc. Nada de fotos de stock presentadas como propiedades reales.
6. Matrícula: `{{MATRICULA}}`, `{{NOMBRE_CORREDOR}}` y colegio son obligatorios para corredores en PBA/CABA: pedíselos al cliente, no los completes de memoria.
7. Textos de ejemplo: el copy del hero y de los pasos es genérico del rubro (sin cifras ni promesas). Ajustalo al tono del cliente. No agregues testimonios, años de trayectoria ni cantidades de operaciones si el cliente no los da por escrito.
8. Colores y tipos: variables en `:root` de `styles.css` (rojo cartel, amarillo chapa, papel cálido; 2 familias de sistema).
9. Antes de publicar: borrá el `.tpl-banner`, quitá `<meta name="robots" content="noindex, nofollow">` y cambiá `robots.txt` solo con el OK del cliente.

## QA mínima
- 390 px y 1280 px sin scroll horizontal; botones ≥ 44 px; foco visible; `prefers-reduced-motion`.
- Todos los WhatsApp con el número real y la Ref. correcta de cada propiedad.
- Consola sin errores, sin recursos rotos.

## Plan Web Factory de referencia
Según la web pública de Web Factory (https://web-factory-hjs.pages.dev/#precios, consultada el **12/11/2026 ~11:25 ART**), esta plantilla encaja en **Intermedia: $280.000 de armado + $45.000/mes de mantenimiento** ("Hasta 5 secciones · Galería o FAQ · SEO por página · 2 rondas de cambios · Entrega: 10–14 días hábiles"). Pago: 50% para arrancar y 50% antes de publicar; el mantenimiento incluye dominio .com.ar, hosting y HTTPS.
- Si el cliente quiere **solo una landing** con 1-2 propiedades y contacto, puede bajar a **Básica ($150.000 + $30.000/mes)**: sacá Servicios y FAQ.
- Si quiere **listado completo de propiedades con filtros/buscador**, formularios o más de 5 secciones, eso ya no es esta plantilla: corresponde **Completa ($450.000 + $60.000/mes, 8 a 10 secciones)** y conviene armarlo como catálogo (ver plantilla `ferreteria`) — esta landing **no** trae buscador funcional.
Ver `propuesta.html`. Si los precios de la web cambian, manda la web: actualizá esta sección y `propuesta.html` desde la web oficial, no a mano.
