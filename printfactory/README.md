# PrintFactory 3D: sitio web

Catálogo online estático (HTML, CSS y JS, sin backend). Los pedidos salen por WhatsApp o Instagram.

## Qué hay en cada archivo

| Archivo | Para qué |
|---|---|
| `data.js` | **El único que vas a tocar seguido**: número de WhatsApp, categorías, productos y precios |
| `index.html` | Estructura y textos de las secciones, SEO y Open Graph |
| `styles.css` | Diseño |
| `app.js` | Arma el catálogo, filtros, carruseles y los mensajes de WhatsApp |
| `img/` | Fotos en WebP (900 px), logo e imagen para compartir (`og.jpg`) |
| `fonts/` | Tipografías Fredoka, Nunito y JetBrains Mono, servidas desde tu propio sitio |
| `_headers`, `robots.txt` | Noindex de la versión de prueba (`_headers` funciona en Cloudflare Pages o Netlify, GitHub Pages lo ignora) |
| `herramientas/optimizar_fotos.py` | Convierte fotos nuevas al formato del sitio |

## Antes de publicar (ya configurado)

1. **WhatsApp**: en `data.js`, ya está `whatsapp: "5491159818942"`
   (549 + código de área sin 0 + número sin 15).
2. **Dirección del sitio**: en `index.html`, ya figura `https://elulises15.github.io/printfactory3d/` (og:url, og:image y datos estructurados).
   WhatsApp necesita esa URL completa para mostrar la vista previa con foto.

3. **Versión de prueba**: el sitio no se indexa (`<meta name="robots">` en `index.html` y `X-Robots-Tag` en `_headers`) y muestra un aviso amarillo arriba. Para salir en buscadores, sacá esas dos cosas y el aviso `.demo`, y agregá el `canonical` con la URL final.

## Publicar en GitHub Pages

1. Creá una cuenta en github.com (si no tenés).
2. Botón **New repository**, nombre: `printfactory3d`, **Public**, Create.
3. En el repo vacío: **uploading an existing file**. Arrastrá **todo el contenido** de esta carpeta
   (index.html, data.js, app.js, styles.css, las carpetas img, fonts, etc.: no la carpeta contenedora).
   **Commit changes**.
4. **Settings → Pages**. En *Source* elegí **Deploy from a branch**, rama `main`, carpeta `/ (root)`, **Save**.
5. Esperá 1 o 2 minutos. Queda en `https://elulises15.github.io/printfactory3d/`.

Con Git desde la terminal:

```bash
cd printfactory3d
git init
git add .
git commit -m "Sitio PrintFactory 3D"
git branch -M main
git remote add origin https://github.com/elulises15/printfactory3d.git
git push -u origin main
```

Después activás Pages igual que en el paso 4.

## Cambiar un precio

En `data.js`, buscá el producto y cambiá `precio: 15000` (sin puntos). Si tiene tamaños o modelos, el precio va dentro de `variantes`.
Guardá, subí el archivo a GitHub y en un minuto se actualiza.

## Sumar un producto

1. Optimizá las fotos:
   ```bash
   pip install pillow
   python herramientas/optimizar_fotos.py foto1.jpg foto2.jpg --nombre portalapices
   ```
   Te deja `img/portalapices-1.webp`, `img/portalapices-2.webp`.
2. En `data.js`, copiá un producto parecido dentro de `PF_PRODUCTOS`, pegalo donde quieras que aparezca y cambiá los datos:
   ```js
   {
     id: "portalapices",
     nombre: "Portalápices",
     categorias: ["hogar"],
     precio: 9000,
     resumen: "Para el escritorio.",
     detalles: ["Colores a elección"],
     fotos: [
       { src: "img/portalapices-1.webp", alt: "Portalápices negro con lápices" },
       { src: "img/portalapices-2.webp", alt: "Portalápices visto desde arriba" },
     ],
   },
   ```
   El `alt` describe la foto para quien usa lector de pantalla; ponelo siempre.
3. Para que algo no tenga precio fijo, usá `precio: null` y `boton: "Pedir cotización"`.

## Probar en tu compu

Si abrís `index.html` con doble clic funciona todo, pero el navegador no carga las tipografías desde archivos locales y vas a ver la fuente del sistema. Para verlo igual que publicado, levantá un servidor local:

```bash
python -m http.server 8000
```

y entrá a `http://localhost:8000`.

## Links útiles

- Link directo a una categoría, para tus historias o la bio: `.../printfactory3d/?categoria=mates`
  (también `hogar`, `negocios`, `mascotas`, `coleccionables`, `navidad`).
- Si WhatsApp sigue mostrando una vista previa vieja después de cambiar `og.jpg`, agregá `?v=2` al final del link que compartís.
