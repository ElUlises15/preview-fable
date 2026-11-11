# Plantilla `odontologia` — Consultorio odontológico / salud con agenda de turnos online (webapp)

Base: demo `turnos-dental` mejorada con Claude Fable 5.2 (10/11/2026), convertida a plantilla. Estática (HTML + CSS + JS mínimo), mobile-first, sin build ni dependencias pesadas.
- Skill obligatoria: `web-factory-anti-gen-rico` (no publicar si queda genérica).

## Cómo personalizar
1. Copiá la carpeta y abrí `index.html` en el navegador (no necesita servidor).
2. Buscá y reemplazá cada placeholder: {{BARRIO}}, {{DESCRIPCION_SEO}}, {{DIAS_ATENCION}}, {{HORARIOS_ATENCION}}, {{NOMBRE}}, {{RUBRO}}, {{SLUG_CLIENTE}}.
3. WhatsApp: reemplazá `https://wa.me/549XXXXXXXXXX` por `https://wa.me/549` + área sin 0 + número sin 15, y revisá el `?text=` precargado (en rioplatense, con vos).
4. Textos de ejemplo: titulares, productos/servicios, notas y captions vienen de la demo original. Reescribilos con info REAL del cliente. No inventes precios, horarios, reseñas ni cifras: si no los tenés, sacá el bloque.
5. Borrá el banner `.tpl-banner` (primera línea del `<body>`) y las notas `.demo-note` / avisos de "demo" o "ficticio" cuando el contenido sea real.
6. Fotos: `assets/equipo.webp, assets/hero-sillon.webp, assets/recepción.webp, assets/sonrisa.webp` son imágenes ilustrativas generadas con IA para la demo. Reemplazalas por fotos del cliente (WebP, ~1600px de ancho, <300 KB) manteniendo nombres o actualizando `src`, `width` y `height`.
7. Colores y tipografías: variables CSS al inicio de la hoja de estilos (`styles.css` o `style.css`) (`:root`). Máximo 2 familias tipográficas.
8. Antes de publicar: quitá `<meta name="robots" content="noindex, nofollow">` y cambiá `robots.txt` (ahora bloquea todo) solo cuando el cliente apruebe.

## QA mínima
- 390 px y 1280 px sin scroll horizontal; botones ≥ 44 px; foco visible; `prefers-reduced-motion`.
- Todos los links de WhatsApp con el número real y mensaje precargado.
- Sin recursos rotos (consola limpia).

## Específico de consultorio (webapp de turnos)
- **Tratamientos**: `servicesSeed` al inicio de `app.js` (nombre, duración en minutos, descripción). Los 4 de ejemplo (Limpieza, Extracción, Ortodoncia · consulta, Blanqueamiento) son de la demo: cargá los que realmente ofrece el consultorio. No agregues precios si el profesional no los publica.
- **Horarios**: el texto visible usa `{{DIAS_ATENCION}}` y `{{HORARIOS_ATENCION}}`, pero los turnos se generan en `times` (horas 9-12 y 14-17, cada 30 min) y `validDate()` excluye sábado y domingo. Ajustá ambos con la agenda real.
- **Agenda (admin)**: botón "Agenda" → vista de administración (confirmar/cancelar turnos y bloquear horarios). Sin backend guarda en localStorage del navegador: para producción conectar `./api/*` (services, appointments, blocks) o derivar la reserva a WhatsApp.
- **Datos de salud**: pedí solo nombre y contacto. No publiques matrícula, obras sociales ni nombres de profesionales sin confirmarlo con el cliente.

## Plan Web Factory de referencia
Según la web pública de Web Factory (https://web-factory-hjs.pages.dev/#precios, consultada el 11/11/2026), la demo base "Sonrisa Clara (webapp turnos odontológicos)" figura en el plan **Completa: $450.000 de armado + $60.000/mes de mantenimiento**. Ver `propuesta.html` (página de muestra comercial, interna). Si los precios de Web Factory cambian, actualizá esta sección y `propuesta.html` desde la web oficial; no los modifiques a mano.
