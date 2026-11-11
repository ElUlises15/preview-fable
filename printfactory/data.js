/* =========================================================================
   PrintFactory 3D — datos del sitio
   Este es el único archivo que tenés que tocar para:
   - poner tu número de WhatsApp
   - cambiar precios
   - sumar, sacar o reordenar productos
   ========================================================================= */

window.PF_CONFIG = {
  // Tu número en formato internacional, SIN +, espacios ni guiones.
  // Argentina: 549 + código de área sin el 0 + número sin el 15.
  // Ej.: 11 15 2345-6789  ->  "5491123456789"
  // Mientras esté vacío, el botón abre WhatsApp para elegir el contacto a mano.
  whatsapp: "5491159818942",

  instagram: "printfactory3d.ba",
  marca: "PrintFactory 3D",
  zona: "Buenos Aires",
};

/* Categorías del filtro. "color" es el filamento que identifica a cada una. */
window.PF_CATEGORIAS = [
  { id: "hogar", nombre: "Hogar y deco", color: "#2FA65A" },
  { id: "mates", nombre: "Mates", color: "#E0363A" },
  { id: "negocios", nombre: "Para negocios", color: "#1E74F0" },
  { id: "mascotas", nombre: "Mascotas", color: "#EE7FAA" },
  { id: "coleccionables", nombre: "Coleccionables", color: "#8455EE" },
  { id: "navidad", nombre: "Navidad", color: "#F2B705" },
];

/* -------------------------------------------------------------------------
   PRODUCTOS
   Campos:
   id          identificador único, sin espacios (se usa en el link)
   nombre      lo que se ve en la tarjeta y en el mensaje de WhatsApp
   categorias  una o más ids de PF_CATEGORIAS
   precio      número en pesos (sin puntos). null = "A cotizar"
   unidad      texto chico al lado del precio (opcional): "c/u", "pack completo"
   variantes   (opcional) lista de opciones con su propio precio; reemplaza a "precio"
   variantesTitulo  (opcional) título de las opciones: "Tamaño", "Modelo"…
   nota        (opcional) aclaración en negrita, ej. qué se ve en las fotos
   resumen     una línea corta
   detalles    lista de puntos
   fotos       [{ src, alt }] — la primera es la portada
   boton       (opcional) texto del botón, por defecto "Pedir"
   ------------------------------------------------------------------------- */
window.PF_PRODUCTOS = [
  {
    id: "mate-personalizado",
    nombre: "Mate personalizado",
    categorias: ["mates"],
    precio: 20000,
    resumen: "Tu nombre, tu equipo o el logo que te representa.",
    detalles: [
      "Con nombre o logo, personalización simple incluida",
      "Color de base a elección",
      "Vaso interior removible, fácil de limpiar",
      "Bombilla y envío no incluidos",
    ],
    fotos: [
      { src: "img/mate-personalizado-1.webp", alt: "Mate negro cuadrado con el logo de PrintFactory 3D en el frente" },
      { src: "img/mate-personalizado-2.webp", alt: "Primer plano del logo en relieve sobre el mate negro" },
      { src: "img/mate-personalizado-3.webp", alt: "Costado del mate con el nombre de la marca grabado" },
      { src: "img/mate-personalizado-4.webp", alt: "Mate personalizado con el vaso interior negro afuera" },
      { src: "img/mate-personalizado-5.webp", alt: "Mate personalizado visto desde arriba en ángulo" },
    ],
  },
  {
    id: "mate-carita",
    nombre: "Mate Carita",
    categorias: ["mates"],
    precio: 15000,
    resumen: "Minimalista, con una carita que le da personalidad.",
    detalles: [
      "Carita en relieve en el frente",
      "Vaso interior plástico removible",
      "Ideal para regalar… o quedártelo",
    ],
    fotos: [
      { src: "img/mate-carita-1.webp", alt: "Mate blanco con carita sonriente en relieve y vaso interior negro" },
      { src: "img/mate-carita-2.webp", alt: "Mate Carita de frente sobre una mesa con plantas" },
      { src: "img/mate-carita-3.webp", alt: "Mate Carita visto desde arriba, con el vaso interior" },
      { src: "img/mate-carita-4.webp", alt: "Mate Carita con el vaso interior removido al lado" },
      { src: "img/mate-carita-5.webp", alt: "Detalle de la carita en relieve del mate" },
    ],
  },
  {
    id: "cactibuddy",
    nombre: "Macetita Cactibuddy",
    categorias: ["hogar"],
    variantesTitulo: "Tamaño",
    variantes: [
      { nombre: "Chica", precio: 8000, detalle: "6,8 × 7,7 × 6,6 cm" },
      { nombre: "Mediana", precio: 14000, detalle: "9,2 × 10,4 × 9 cm" },
      { nombre: "Grande", precio: 24000, detalle: "12,9 × 14,6 × 12,5 cm" },
    ],
    resumen: "Con carita y patitas, para tus cactus y suculentas.",
    detalles: [
      "Orificio de drenaje",
      "Colores a consultar",
      "Medidas: alto × ancho × profundidad, con brazos y patitas",
      "Planta y tierra no incluidas",
    ],
    fotos: [
      { src: "img/cactibuddy-1.webp", alt: "Macetita blanca con carita sonriente y patitas" },
      { src: "img/cactibuddy-2.webp", alt: "Macetita Cactibuddy de frente con textura facetada" },
      { src: "img/cactibuddy-3.webp", alt: "Macetita Cactibuddy de costado, se ven los bracitos" },
      { src: "img/cactibuddy-4.webp", alt: "Macetita vista desde arriba con el orificio de drenaje" },
    ],
    nota: "En las fotos: tamaño chico.",
  },
  {
    id: "escudo",
    nombre: "Cuadro escudo de fútbol",
    categorias: ["hogar"],
    precio: 15000,
    resumen: "El escudo de tu equipo, para tu pared.",
    detalles: [
      "Del equipo que elijas",
      "Soporte trasero para colgar",
      "Ranura en todo el borde para tira LED (LED no incluida)",
      "Modelo River: aprox. 17 × 13,7 cm; varía según el escudo",
    ],
    fotos: [
      { src: "img/escudo-1.webp", alt: "Cuadro con el escudo de River en blanco, rojo y negro" },
      { src: "img/escudo-2.webp", alt: "Escudo de River en ángulo, se ve el espesor" },
      { src: "img/escudo-3.webp", alt: "Escudo de River acostado, se ve la ranura para LED" },
      { src: "img/escudo-4.webp", alt: "Parte de atrás del escudo con el soporte para colgar" },
    ],
    nota: "En las fotos: River. ¡Pedí el de tu equipo!",
  },
  {
    id: "soporte",
    nombre: "Soporte Bioorgánico",
    categorias: ["hogar"],
    variantesTitulo: "Tamaño",
    variantes: [
      { nombre: "M", precio: 15000 },
      { nombre: "L", precio: 25000 },
    ],
    resumen: "Para celular o e-reader, en escritorio o mesa de luz.",
    detalles: [
      "Diseño propio",
      "Compatible con celulares y e-readers",
      "Dos tamaños",
    ],
    fotos: [
      { src: "img/soporte-1.webp", alt: "Soporte negro calado con formas orgánicas, vacío" },
      { src: "img/soporte-2.webp", alt: "Soporte negro sosteniendo un celular de costado" },
      { src: "img/soporte-3.webp", alt: "Soporte negro visto de frente" },
      { src: "img/soporte-4.webp", alt: "Soportes negro y blanco, uno con un e-reader" },
    ],
  },
  {
    id: "dinosaurios",
    nombre: "Colección Bioorgánica Serie 01",
    categorias: ["coleccionables"],
    variantesTitulo: "Modelo",
    variantes: [
      { nombre: "Coraza", precio: 7000, detalle: "Triceratops" },
      { nombre: "Monolito", precio: 7000, detalle: "Braquiosaurio" },
      { nombre: "Depredador", precio: 7000, detalle: "T-Rex" },
      { nombre: "Pack x3", precio: 19000, detalle: "Los tres" },
    ],
    resumen: "Tres dinosaurios para exhibir, el escritorio o la colección.",
    detalles: [
      "Estética bioorgánica",
      "Aprox. 5 cm de alto × 10 cm de largo",
    ],
    fotos: [
      { src: "img/dinosaurios-1.webp", alt: "Triceratops negro de estética orgánica, de costado" },
      { src: "img/dinosaurios-2.webp", alt: "Dinosaurio negro de la serie visto de frente" },
      { src: "img/dinosaurios-3.webp", alt: "Braquiosaurio negro de cuello largo" },
      { src: "img/dinosaurios-4.webp", alt: "T-Rex negro sobre su base" },
    ],
  },
  {
    id: "chapitas",
    nombre: "Chapita para mascota",
    categorias: ["mascotas"],
    variantesTitulo: "Modelo",
    variantes: [
      { nombre: "Huesito", precio: 3000 },
      { nombre: "Patita", precio: 3000 },
    ],
    unidad: "c/u",
    resumen: "Con el nombre de tu mascota, liviana y con argolla.",
    detalles: [
      "Personalizada con el nombre",
      "Incluye argolla",
      "Modelos huesito y patita",
    ],
    fotos: [
      { src: "img/chapitas-1.webp", alt: "Tres chapitas blancas con forma de hueso que dicen Bonnie, Enzo y Tita" },
      { src: "img/chapitas-2.webp", alt: "Chapita con forma de hueso que dice Thor" },
      { src: "img/chapitas-3.webp", alt: "Chapita con forma de patita que dice Toto" },
    ],
  },
  {
    id: "arbolito",
    nombre: "Arbolito de Navidad de mesa",
    categorias: ["navidad", "hogar"],
    precio: 25000,
    unidad: "pack completo",
    resumen: "Árbol, base y 8 adornos para armar y decorar a tu manera.",
    detalles: [
      "Se arma por encastre, sin pegamento",
      "Los adornos se cuelgan sin hilos",
      "Aprox. 17 cm de alto",
      "Se desarma para guardarlo hasta la próxima",
    ],
    fotos: [
      { src: "img/arbolito-1.webp", alt: "Arbolito verde de mesa con adornos rojos, amarillos y blancos" },
      { src: "img/arbolito-2.webp", alt: "Arbolito armado visto desde otro ángulo" },
      { src: "img/arbolito-3.webp", alt: "Arbolito en ángulo, se ven las piezas encastradas" },
      { src: "img/arbolito-4.webp", alt: "Detalle de los adornos colgados del arbolito" },
    ],
  },
  {
    id: "stand-qr",
    nombre: "Stand doble QR",
    categorias: ["negocios"],
    precio: 25000,
    resumen: "Para mostrador, local o feria.",
    detalles: [
      "Personalizado con el nombre de tu marca",
      "Dos QR: Instagram y Mercado Pago",
      "Lo hacemos con los datos de tu negocio",
    ],
    fotos: [
      { src: "img/stand-qr-1.webp", alt: "Stand negro con dos códigos QR y el nombre de la marca arriba" },
      { src: "img/stand-qr-2.webp", alt: "Stand doble QR junto a dos tarjetas QR" },
    ],
  },
  {
    id: "tarjeta-qr",
    nombre: "Tarjeta QR",
    categorias: ["negocios"],
    precio: 8000,
    unidad: "c/u",
    resumen: "Para la billetera, con tu Instagram o link de cobro.",
    detalles: [
      "Personalizada con tu marca",
      "Un QR a tu Instagram o a tu link de cobro",
    ],
    fotos: [
      { src: "img/tarjeta-qr-1.webp", alt: "Mano sosteniendo una tarjeta blanca con un código QR" },
    ],
  },
  {
    id: "llaveros",
    nombre: "Llaveros con logo para negocios",
    categorias: ["negocios"],
    precio: null,
    boton: "Pedir cotización",
    resumen: "Tu marca en un llavero, producido por cantidad.",
    detalles: [
      "Logo o diseño personalizado",
      "Teléfono e Instagram en el reverso (opcional)",
      "Para comercios, gimnasios, emprendimientos e instituciones",
      "Se cotiza según diseño y cantidad",
    ],
    fotos: [
      { src: "img/llaveros-1.webp", alt: "Tres llaveros negros redondos con logos de negocios en blanco" },
      { src: "img/llaveros-2.webp", alt: "Reverso de llaveros con teléfono e Instagram" },
      { src: "img/llaveros-3.webp", alt: "Llavero negro con logo de un negocio y datos de contacto" },
    ],
  },
];
