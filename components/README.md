# Componentes Web Factory

Librería estática de componentes para webs de comercios de barrio. HTML + CSS + JS vanilla, sin build, sin CDNs, sin fuentes web, sin frameworks. Se copia y se pega.

Abrí `index.html` en el navegador para ver la galería con las 4 paletas.

## Qué copiar al sitio del cliente

| Archivo | ¿Va siempre? | Para qué |
|---|---|---|
| `tokens.css` | Sí | Colores, tipografías, escala, espaciado, radios, sombras |
| `components.css` | Sí | Estilos de todos los componentes (`wf-*`) |
| `components.js` | Solo si usás catálogo con filtro, turnos o lightbox | Mejora progresiva; sin él todo se ve igual |
| Sprite `<svg class="wf-sprite">` | Si usás íconos | Copiarlo desde `index.html` al inicio del `<body>` |

`index.html`, `catalog.json` y este README **no** van al sitio del cliente. Los estilos `doc-*` del `<style>` de `index.html` son solo de la galería.

```html
<html lang="es-AR" data-palette="almacen">
<head>
  <link rel="stylesheet" href="tokens.css">
  <link rel="stylesheet" href="components.css">
  <script src="components.js" defer></script>
</head>
```

Después copiá el bloque del componente desde `index.html` (lo que está adentro de cada `.doc-demo`). En el sitio real, el título del hero va en `<h1>` y los títulos de sección en `<h2>`: en la galería están un nivel más abajo para respetar el orden de encabezados de esa página.

## Paletas

Se eligen con `data-palette` en `<html>` o en cualquier contenedor (por ejemplo, una sola sección oscura con `data-palette="noche"`).

| Valor | Para | Carácter |
|---|---|---|
| `taller` (por defecto) | Oficios, ferretería, talleres | Acero + amarillo seguridad, condensada en mayúsculas, sombra dura |
| `almacen` | Comercio, gastro | Crema + bordó, serif de almacén, radios suaves |
| `salud` | Consultorio, odontología, estética | Blanco hueso + verde agua, serif clínica, mucho radio |
| `noche` | Eventos, canchas | Oscuro + lima, condensada pesada, sin radios |

### Ajustar a la marca del cliente

No edites las paletas base: pisá los tokens después de `tokens.css`.

```css
[data-palette="almacen"] {
  --wf-primary: #………;      /* color de marca */
  --wf-btn-bg: #………;
  --wf-accent-ink: #………;   /* el acento cuando se usa como texto */
}
```

Reglas:

- Cada color tiene su pareja de texto (`--wf-primary` / `--wf-on-primary`, `--wf-accent` / `--wf-on-accent`, `--wf-btn-bg` / `--wf-btn-ink`). Si cambiás uno, revisá el contraste de la pareja (AA: 4.5:1 en texto).
- Máximo dos tipografías: display (`--wf-font-display`) y cuerpo (`--wf-font-body`). La mono es solo para rótulos.
- `components.css` no tiene colores escritos a mano: todo sale de tokens.

## Componentes

| Componente | Clase raíz | JS | Placeholders principales |
|---|---|---|---|
| Hero asimétrico | `.wf-hero` | No | `{{NOMBRE_NEGOCIO}}` `{{RUBRO}}` `{{BARRIO}}` `{{PROPUESTA_EN_UNA_LINEA}}` `{{HORARIO_RESUMEN}}` `{{DIRECCION}}` `{{LOCALIDAD}}` `{{PROMO_O_PRECIO_DESDE}}` `{{DATO_DESTACADO}}` `{{FOTO_HERO}}` `{{WHATSAPP}}` `{{DIRECCION_URLENCODED}}` |
| Hero cartel | `.wf-hero.wf-hero--cartel` | No | `{{NOMBRE_NEGOCIO}}` `{{RUBRO}}` `{{BARRIO}}` `{{HORARIO_RESUMEN}}` `{{DIRECCION}}` `{{LOCALIDAD}}` `{{WHATSAPP}}` |
| Catálogo | `.wf-catalogo` | Sí (filtro) | `{{CATALOGO_KICKER}}` `{{ACLARACION_STOCK}}` `{{CATEGORIA_n}}` `{{PRODUCTO_n}}` `{{DETALLE_PRODUCTO_n}}` `{{PRECIO_n}}` `{{FOTO_PRODUCTO_n}}` |
| Tarifario | `.wf-tarifario` | No | `{{TARIFARIO_KICKER}}` `{{FECHA_ACTUALIZACION_PRECIOS}}` `{{MEDIOS_DE_PAGO}}` `{{ETIQUETA_DESTACADO}}` `{{PLAN_n_NOMBRE}}` `{{PLAN_n_PRECIO}}` `{{PLAN_n_UNIDAD}}` `{{PLAN_n_ITEM_n}}` `{{PLAN_n_NOMBRE_URLENCODED}}` `{{WHATSAPP}}` |
| Galería | `.wf-galeria` | Sí (lightbox) | `{{GALERIA_KICKER}}` `{{FOTO_n}}` `{{EPIGRAFE_n}}` |
| Turnos | `.wf-turnos` | Sí (arma el mensaje) | `{{TURNOS_KICKER}}` `{{WHATSAPP}}` `{{SERVICIO_n}}` |
| FAQ | `.wf-faq` | No | `{{PREGUNTA_n}}` `{{RESPUESTA_n}}` `{{RESPUESTA_TURNOS}}` `{{MEDIOS_DE_PAGO}}` |
| WhatsApp flotante | `.wf-wa` | No | `{{WHATSAPP}}` |
| Horarios y ubicación | `.wf-donde` | No | `{{HORARIO_LUN_VIE}}` `{{HORARIO_SABADO}}` `{{HORARIO_DOMINGO}}` `{{HORARIO_FERIADOS}}` `{{DIRECCION}}` `{{LOCALIDAD}}` `{{BARRIO}}` `{{REFERENCIA_COMO_LLEGAR}}` `{{DIRECCION_URLENCODED}}` |
| Testimonios | `.wf-testimonios` | No | `{{TESTIMONIO_n}}` `{{NOMBRE_CLIENTE_n}}` `{{FUENTE_RESENA_n}}` |
| CTA banda | `.wf-cta` | No | `{{HORARIO_RESUMEN}}` `{{BARRIO}}` `{{WHATSAPP}}` |
| Footer | `.wf-footer` | No | `{{NOMBRE_NEGOCIO}}` `{{RUBRO}}` `{{BARRIO}}` `{{LOCALIDAD}}` `{{DIRECCION}}` `{{DIRECCION_URLENCODED}}` `{{TELEFONO}}` `{{TELEFONO_LINK}}` `{{WHATSAPP}}` `{{WHATSAPP_VISIBLE}}` `{{EMAIL}}` `{{INSTAGRAM_USUARIO}}` `{{FACEBOOK_USUARIO}}` `{{ANIO}}` |
| Ficha de producto con stock | `.wf-producto` + `.wf-stock` | No | `{{FOTO_PRODUCTO}}` `{{CATEGORIA_PRODUCTO}}` `{{NOMBRE_PRODUCTO}}` `{{DESCRIPCION_PRODUCTO}}` `{{PRECIO_PRODUCTO}}` `{{FECHA_ACTUALIZACION_STOCK}}` `{{VARIANTE_n}}` `{{DEMORA_PEDIDO}}` `{{NOMBRE_PRODUCTO_URLENCODED}}` `{{WHATSAPP}}` |
| Agenda semanal | `.wf-agenda` | No | `{{AGENDA_KICKER}}` `{{FECHA_VIGENCIA_AGENDA}}` `{{HORA_n}}` `{{ACTIVIDAD_n}}` `{{PROFE_O_SALA_n}}` `{{WHATSAPP}}` |
| Ficha de propiedad | `.wf-propiedad` | No | `{{OPERACION}}` `{{REFERENCIA}}` `{{TIPO_PROPIEDAD}}` `{{BARRIO}}` `{{PRECIO_PROPIEDAD}}` `{{MONEDA_Y_CONDICION}}` `{{FOTO_FRENTE}}` `{{FOTO_n}}` `{{AMBIENTES}}` `{{DORMITORIOS}}` `{{BANOS}}` `{{M2_CUBIERTOS}}` `{{M2_TOTALES}}` `{{EXPENSAS}}` `{{ANTIGUEDAD}}` `{{APTO_CREDITO}}` `{{DESCRIPCION_PROPIEDAD}}` `{{EXTRA_n}}` `{{ZONA_APROXIMADA}}` `{{DATOS_MATRICULA_CORREDOR}}` `{{WHATSAPP}}` |
| Íconos | `.wf-icon` + `.wf-sprite` | No | — |
| Tokens (muestra) | `.wf-tokens` | No | — (uso interno) |

Piezas sueltas que usan varios componentes: `.wf-container`, `.wf-section`, `.wf-kicker`, `.wf-titulo`, `.wf-bajada`, `.wf-btn` (`--linea`, `--ancho`), `.wf-link`, `.wf-chip`, `.wf-ph` (placeholder de foto), `.wf-aviso` (para el visitante), `.wf-nota` (interna, se borra).

### Formato de los datos

- `{{WHATSAPP}}`: número internacional, solo dígitos, sin `+` ni espacios (formato de `wa.me`).
- `{{TELEFONO_LINK}}`: como se marca (con `+` y código de país); `{{TELEFONO}}` es como se lee.
- `{{DIRECCION_URLENCODED}}` y `{{PLAN_n_NOMBRE_URLENCODED}}`: el texto pasado por `encodeURIComponent`.
- Los mensajes prearmados de WhatsApp están en `?text=` ya codificados; si los cambiás, volvé a codificarlos.

### Atributos que lee components.js

| Componente | Atributos |
|---|---|
| Catálogo | `data-wf-catalogo` (raíz), `data-wf-filtros` (grupo de botones, arranca con `hidden`), `data-wf-filtro="todos\|cat-1…"` (botón con `aria-pressed`), `data-wf-cat="cat-1"` (ítem; acepta varias separadas por espacio), `data-wf-estado` (texto “Mostrando X de Y”) |
| Turnos | `data-wf-turnos` + `data-wf-whatsapp="{{WHATSAPP}}"` en el `<form>`, `data-wf-campo="servicio\|dia\|franja\|nombre"` en cada campo, `data-wf-turnos-salida` (vista previa del mensaje) |
| Galería | `data-wf-galeria` (raíz), `data-wf-lightbox` (cada `<figure>`), opcional `data-wf-full="foto-grande.jpg"` |
| Paleta (solo galería) | `data-wf-paleta` (grupo, arranca con `hidden`), `data-wf-paleta-op="taller"` (botón) |

Si falta un componente en la página, su bloque de JS no hace nada y no tira errores.

### Lote 2 (12/11/2026): cómo personalizar

- **Ficha de producto con stock:** el estado se marca a mano cambiando la clase (`wf-stock--hay`, `--pocas`, `--pedido`, `--sin`) y el texto. No hay stock en tiempo real: actualizá `{{FECHA_ACTUALIZACION_STOCK}}` cada vez que lo toques y dejá la aclaración de “confirmá por WhatsApp”. El estado no depende solo del color (punto lleno / medio / punteado / tachado).
- **Agenda semanal:** cada `<li class="wf-agenda__dia">` es un día; repetí `.wf-agenda__item` por actividad. Si un día no hay nada, dejá `wf-agenda__dia--cerrado` con “Sin actividad” (no lo borres: la gente busca el día). Marcá como `--destacado` como mucho una actividad.
- **Ficha de propiedad:** usá una ficha por propiedad con su `{{REFERENCIA}}` (la misma que usa la inmobiliaria en sus carteles/portales). No pongas la dirección exacta: solo `{{ZONA_APROXIMADA}}`. `{{DATOS_MATRICULA_CORREDOR}}`: nombre del corredor y matrícula tal cual se los pase el cliente (los corredores matriculados suelen tener que mostrarla en su publicidad; confirmalo con ellos). Si publica un dueño directo, reemplazalo por “Publica el propietario”. Precio, moneda, expensas y medidas los confirma el cliente; si alguno no se publica, borrá la fila entera.

## Reglas de la casa

- **No se inventa nada.** Ni precios, ni horarios, ni direcciones, ni teléfonos, ni reseñas. Lo que no pasó el cliente queda como `{{PLACEHOLDER}}` hasta que lo pase.
- **Testimonios:** solo reseñas reales con permiso. Sin reseñas, la sección no va.
- **Sin recursos externos:** nada de fuentes web, imágenes remotas ni iframes. El mapa es un bloque estático con link a Google Maps.
- **Un solo CTA principal:** WhatsApp con mensaje prearmado en rioplatense.
- **Anti-genérico:** si al cambiar el nombre del negocio la página sirve para otro rubro, falta trabajo. Usá el kit vertical y pegá referencias reales en el `spec.md`.

## Checklist antes de publicar

- [ ] No queda ningún `{{` en el HTML (`grep -n "{{" *.html` no devuelve nada).
- [ ] Todos los links de WhatsApp abren el chat correcto con el mensaje prearmado.
- [ ] “Cómo llegar” abre la dirección correcta en Google Maps.
- [ ] Fotos reales del cliente, con permiso de quien aparece, optimizadas y con `alt`. No queda ningún `.wf-ph` ni la ilustración provisoria del hero.
- [ ] Precios y horarios confirmados por el cliente, con fecha de actualización.
- [ ] Testimonios reales con permiso, o sección eliminada. Borradas todas las `.wf-nota`.
- [ ] Borrados los ítems de FAQ marcados “Ejemplo” o reemplazados por respuestas reales.
- [ ] Un solo `<h1>` y encabezados en orden.
- [ ] Probado en 390px y 1280px: sin scroll horizontal, botón flotante sin tapar el footer.
- [ ] Probado con teclado (Tab, Enter, Esc en el lightbox) y con “reducir movimiento” activado.
- [ ] Contraste AA revisado si se tocaron tokens de color.
- [ ] `<meta name="robots" content="noindex, nofollow">` se saca **solo** al pasar a producción, con el OK de Ulises. En previews y demos queda puesto.
