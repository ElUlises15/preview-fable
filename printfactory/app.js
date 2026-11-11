/* PrintFactory 3D — lógica del sitio (no hace falta tocarla para cambiar productos) */
(function () {
  "use strict";

  const CFG = window.PF_CONFIG || {};
  const CATS = window.PF_CATEGORIAS || [];
  const PRODS = window.PF_PRODUCTOS || [];
  const catById = Object.fromEntries(CATS.map((c) => [c.id, c]));

  const numero = String(CFG.whatsapp || "").replace(/\D/g, "");
  if (!numero) console.warn("[PrintFactory] Falta el número de WhatsApp en data.js (PF_CONFIG.whatsapp).");

  const pesos = new Intl.NumberFormat("es-AR");
  const $ = (sel, el = document) => el.querySelector(sel);
  const h = (tag, attrs = {}, ...kids) => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else if (k === "style") el.style.cssText = v;
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const kid of kids.flat()) if (kid != null) el.append(kid);
    return el;
  };
  const icon = (id) => {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "ico");
    svg.setAttribute("aria-hidden", "true");
    const use = document.createElementNS(ns, "use");
    use.setAttribute("href", "#" + id);
    svg.append(use);
    return svg;
  };

  const precioTxt = (n) => "$" + pesos.format(n);
  const waUrl = (texto) => `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  const igUrl = `https://ig.me/m/${CFG.instagram || "printfactory3d.ba"}`;
  const saludo = `¡Hola ${CFG.marca || "PrintFactory 3D"}! 👋`;

  const MSG_GENERAL = `${saludo} Vengo de la página y quería hacerte una consulta.`;

  function msgProducto(p, v) {
    if (p.precio === null && !p.variantes) {
      return `${saludo} Quiero pedir una cotización de *${p.nombre}*. Te cuento qué necesito y la cantidad:`;
    }
    const precio = v ? v.precio : p.precio;
    const extra = v ? `${v.nombre}${v.detalle ? " – " + v.detalle : ""}, ` : "";
    const unidad = p.unidad ? " " + p.unidad : "";
    return `${saludo} Quiero pedir: *${p.nombre}* (${extra}${precioTxt(precio)}${unidad}). ¿Me pasás los colores disponibles y cómo coordinamos la entrega?`;
  }

  function abrir(url) {
    // Un link real abre WhatsApp en todos lados (celu, compu y vistas embebidas)
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    document.body.append(a);
    a.click();
    a.remove();
  }

  /* ---------- Links generales ---------- */
  document.querySelectorAll(".js-wa").forEach((a) => {
    a.href = waUrl(MSG_GENERAL);
    a.target = "_blank";
    a.rel = "noopener";
  });
  document.querySelectorAll(".js-ig").forEach((a) => {
    a.href = igUrl;
    a.target = "_blank";
    a.rel = "noopener";
  });
  const anio = $("#anio");
  if (anio) anio.textContent = new Date().getFullYear();

  /* ---------- Catálogo ---------- */
  const lista = $("#productos");
  const filtros = $("#filtros");
  const estado = $("#cat-status");

  function tarjeta(p) {
    const cat = catById[p.categorias[0]] || {};
    const color = cat.color || "#17181C";
    const tituloId = `t-${p.id}`;

    // Carrusel
    const track = h("div", {
      class: "track",
      tabindex: "0",
      role: "region",
      "aria-roledescription": "carrusel",
      "aria-label": `Fotos de ${p.nombre}`,
    });
    p.fotos.forEach((f, i) => {
      track.append(h("img", {
        src: f.src,
        alt: p.fotos.length > 1 ? `${f.alt} (foto ${i + 1} de ${p.fotos.length})` : f.alt,
        width: "900",
        height: "900",
        loading: "lazy",
        decoding: "async",
      }));
    });
    const media = h("div", { class: "media" }, track,
      h("span", { class: "tag" }, h("span", { class: "chip__dot", style: `--c:${color}` }), cat.nombre || ""));

    if (p.fotos.length > 1) {
      const prev = h("button", { class: "arrow arrow--prev", type: "button", "aria-label": "Foto anterior" }, icon("i-prev"));
      const next = h("button", { class: "arrow arrow--next", type: "button", "aria-label": "Foto siguiente" }, icon("i-next"));
      const dots = h("div", { class: "dots", "aria-hidden": "true" }, p.fotos.map((_, i) => h("span", { class: i === 0 ? "on" : null })));
      media.append(prev, next, dots);

      const paso = (dir) => track.scrollBy({ left: dir * track.clientWidth, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      prev.addEventListener("click", () => paso(-1));
      next.addEventListener("click", () => paso(1));

      let tic = false;
      const actualizar = () => {
        tic = false;
        const w = track.clientWidth;
        const i = w ? Math.round(track.scrollLeft / w) : 0;
        [...dots.children].forEach((d, j) => d.classList.toggle("on", j === i));
        prev.disabled = i <= 0;
        next.disabled = i >= p.fotos.length - 1;
      };
      track.addEventListener("scroll", () => { if (!tic) { tic = true; requestAnimationFrame(actualizar); } }, { passive: true });
      actualizar();
      new ResizeObserver(actualizar).observe(track);
    }

    // Precio
    const precio = h("p", { class: "price" });
    const pintarPrecio = (v) => {
      precio.textContent = "";
      precio.classList.toggle("price--quote", p.precio === null && !p.variantes);
      if (p.precio === null && !p.variantes) { precio.textContent = "A cotizar"; return; }
      precio.append(precioTxt(v ? v.precio : p.precio));
      if (p.unidad) precio.append(h("small", { text: p.unidad }));
    };

    // Botón Pedir
    const boton = h("a", {
      class: "btn btn--wa btn--block",
      target: "_blank",
      rel: "noopener",
    }, icon("i-wa"), p.boton || "Pedir");
    const pintarBoton = (v) => {
      boton.href = waUrl(msgProducto(p, v));
      boton.setAttribute("aria-label", `${p.boton || "Pedir"} ${p.nombre}${v ? " " + v.nombre : ""} por WhatsApp`);
    };

    // Variantes
    let variantes = null;
    if (p.variantes && p.variantes.length) {
      const opts = h("div", { class: "variants__opts" });
      p.variantes.forEach((v, i) => {
        const input = h("input", { type: "radio", name: `v-${p.id}`, value: String(i), checked: i === 0 });
        input.addEventListener("change", () => { pintarPrecio(v); pintarBoton(v); });
        opts.append(h("label", { class: "variant" }, input,
          h("span", {}, v.nombre, v.detalle ? h("em", { text: v.detalle }) : null)));
      });
      variantes = h("fieldset", { class: "variants" }, h("legend", { text: p.variantesTitulo || "Opción" }), opts);
    }
    const v0 = p.variantes ? p.variantes[0] : null;
    pintarPrecio(v0);
    pintarBoton(v0);

    const body = h("div", { class: "card__body" },
      h("h3", { class: "card__title", id: tituloId, text: p.nombre }),
      precio,
      h("p", { class: "card__resumen", text: p.resumen }),
      variantes,
      // En el celu arrancan cerrados para que el catálogo no sea eterno
      h("details", { class: "more", open: matchMedia("(min-width: 640px)").matches },
        h("summary", { text: "Ver detalles" }),
        h("ul", { class: "details", style: `--c:${color}` }, p.detalles.map((d) => h("li", { text: d })))),
      p.nota ? h("p", { class: "nota", text: p.nota }) : null,
      h("div", { class: "card__cta" }, boton)
    );

    return h("li", { class: "card", "data-cats": p.categorias.join(" "), "aria-labelledby": tituloId }, media, body);
  }

  PRODS.forEach((p) => lista.append(tarjeta(p)));

  // Filtros: solo categorías que tienen productos
  const usadas = CATS.filter((c) => PRODS.some((p) => p.categorias.includes(c.id)));
  const chips = [{ id: "todos", nombre: "Todos" }, ...usadas].map((c) => {
    const b = h("button", { class: "chip", type: "button", "aria-pressed": "false", "data-cat": c.id },
      c.color ? h("span", { class: "chip__dot", style: `--c:${c.color}` }) : null, c.nombre);
    b.addEventListener("click", () => filtrar(c.id, true));
    filtros.append(b);
    return b;
  });

  function filtrar(id, desdeClick) {
    let visibles = 0;
    lista.dataset.filtro = id;
    lista.querySelectorAll(".card").forEach((card) => {
      const ok = id === "todos" || card.dataset.cats.split(" ").includes(id);
      card.hidden = !ok;
      if (ok) visibles++;
      // Respuesta al filtro: las tarjetas que quedan se "imprimen" de abajo hacia arriba
      card.classList.remove("is-printing");
      if (ok && desdeClick) { void card.offsetWidth; card.classList.add("is-printing"); }
    });
    chips.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cat === id)));
    const nombre = id === "todos" ? "todas las categorías" : (catById[id] || {}).nombre;
    estado.textContent = `${visibles} ${visibles === 1 ? "producto" : "productos"} en ${nombre}`;

    if (desdeClick) {
      const url = new URL(location.href);
      if (id === "todos") url.searchParams.delete("categoria");
      else url.searchParams.set("categoria", id);
      try { history.replaceState(null, "", url); } catch (_) { /* vista embebida: no pasa nada */ }
      const top = lista.getBoundingClientRect().top;
      if (top < 0) $("#catalogo").scrollIntoView({ block: "start" });
    }
  }

  // Link directo a una categoría: ?categoria=mates
  const inicial = new URLSearchParams(location.search).get("categoria");
  filtrar(usadas.some((c) => c.id === inicial) ? inicial : "todos", false);

  /* ---------- Formularios → WhatsApp ---------- */
  function validar(form, errorEl) {
    let primero = null;
    form.querySelectorAll("[required]").forEach((el) => {
      const ok = el.value.trim() !== "";
      el.setAttribute("aria-invalid", String(!ok));
      if (!ok && !primero) primero = el;
    });
    if (primero) {
      const label = form.querySelector(`label[for="${primero.id}"]`);
      errorEl.textContent = `Completá "${label ? label.firstChild.textContent.trim() : "este campo"}" para seguir.`;
      errorEl.hidden = false;
      primero.focus();
      return false;
    }
    errorEl.hidden = true;
    return true;
  }

  const fNeg = $("#form-negocios");
  fNeg.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validar(fNeg, $("#n-error"))) return;
    const d = Object.fromEntries(new FormData(fNeg));
    const lineas = [
      `${saludo} Quiero pedir una cotización para mi negocio.`,
      "",
      `• Nombre: ${d.nombre.trim()}`,
      d.negocio.trim() ? `• Negocio: ${d.negocio.trim()}` : null,
      `• Producto: ${d.producto}`,
      d.cantidad ? `• Cantidad: ${d.cantidad}` : null,
      d.detalle.trim() ? `• Detalle: ${d.detalle.trim()}` : null,
    ].filter((l) => l !== null);
    abrir(waUrl(lineas.join("\n")));
  });

  const fIdea = $("#form-idea");
  fIdea.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validar(fIdea, $("#i-error"))) return;
    const idea = new FormData(fIdea).get("idea").trim();
    abrir(waUrl(`${saludo} Tengo una idea para imprimir:\n\n${idea}`));
  });

  document.querySelectorAll("[required]").forEach((el) =>
    el.addEventListener("input", () => { if (el.value.trim()) el.setAttribute("aria-invalid", "false"); }));
})();
