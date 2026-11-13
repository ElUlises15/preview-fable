# Catálogo de landings y demos — Web Factory / PrintFactory (noviembre 2026)

Armado el 13/11/2026 con scripts y lectura de archivos (sin Claude ni Fable, no gastó cuota). Todas las URLs se chequearon con HTTP el 2026-11-13 11:36-03:00 (hora de Buenos Aires). Los datos de modelo, fecha y commit salen de `outcome.json`, `manifest.json`, `STATUS.md` y `git log`; si no figuran, dice **no consta**. Los planes y precios salen de `propuesta.html` o de la web real de Web Factory (`web-factory-hjs.pages.dev/data/paquetes.json`): Básica $150.000 + $30.000/mes · Intermedia $280.000 + $45.000/mes · Completa $450.000 + $60.000/mes.

## Resumen

- **Total de entradas:** 136 · **URLs chequeadas:** 141 · **Responden 200:** 139 · **Caídas o sin publicar:** 2
- **Copias de prueba en preview-fable:** 59 (40 demos + 13 plantillas + componentes + copias de PrintFactory y Web Factory + 3 galerías)
- **Producción:** 2 sitios .com.ar, solo listados, sin tocar

| Grupo | Entradas | 200 OK | Caídas |
|---|---:|---:|---:|
| [preview-fable · Galería Web Factory mejorada (landings, multipágina, webapps, bonus)](#a1) | 16 | 16 | 0 |
| [preview-fable · Sourigues mejoradas](#a2) | 15 | 15 | 0 |
| [preview-fable · Kit-demos de clientes mejoradas](#a3) | 9 | 9 | 0 |
| [preview-fable · Plantillas reutilizables](#a4) | 13 | 13 | 0 |
| [preview-fable · Componentes, copias de PrintFactory/Web Factory y galerías](#a5) | 6 | 6 | 0 |
| [sourigues-demos · Originales del recorrido Sourigues](#b) | 16 | 16 | 0 |
| [Galería Web Factory · Demos originales en GitHub Pages](#c1) | 16 | 16 | 0 |
| [demos-clientes · Kit-demos originales en GitHub Pages](#c2) | 11 | 11 | 0 |
| [Cloudflare Pages y otras demos/sitios de marca](#c3) | 11 | 9 | 2 |
| [web-factory-prospectos-review · Propuestas conceptuales por comercio](#c4) | 15 | 15 | 0 |
| [Producción de clientes (solo listadas, no se tocaron)](#d) | 2 | 2 | 0 |
| [Otros proyectos web propios publicados (no son landings de cliente)](#e) | 6 | 6 | 0 |

**URLs que no respondieron 200:**

- ❌ 404 — Apes Peluquería (repo GitHub Pages): https://elulises15.github.io/apes-peluqueria-demo/ — el repo existe en GitHub pero no tiene GitHub Pages activado (la API de Pages da 404). La versión que sí está online figura en la sección C3.
- ❌ 404 — Web Factory landing (zona sur): https://elulises15.github.io/web-factory-landing/ — el repo existe en GitHub pero no tiene GitHub Pages activado (la API de Pages da 404). La versión que sí está online figura en la sección C3.

## Tabla índice

| # | Nombre | Tipo | Grupo | URL | Estado | HTTP |
|---:|---|---|---|---|---|---|
| 1 | Café Luna (copia mejorada) | landing | A1 | https://elulises15.github.io/preview-fable/demos/cafe-luna/ | noindex | ✅ 200 |
| 2 | Florería Pétalos (copia mejorada) | landing | A1 | https://elulises15.github.io/preview-fable/demos/floreria-petalos/ | noindex | ✅ 200 |
| 3 | Taller Cadena (copia mejorada) | landing | A1 | https://elulises15.github.io/preview-fable/demos/taller-cadena/ | noindex | ✅ 200 |
| 4 | Hogaza (copia mejorada) | landing | A1 | https://elulises15.github.io/preview-fable/demos/panaderia-hogaza/ | noindex | ✅ 200 |
| 5 | Estudio Vinilo (copia mejorada) | landing | A1 | https://elulises15.github.io/preview-fable/demos/estudio-vinilo/ | noindex | ✅ 200 |
| 6 | Barbería Bruma (copia mejorada) | multipágina | A1 | https://elulises15.github.io/preview-fable/demos/barberia-bruma/ | noindex | ✅ 200 |
| 7 | Patitas del Sur (copia mejorada) | multipágina | A1 | https://elulises15.github.io/preview-fable/demos/vet-patitas/ | noindex | ✅ 200 |
| 8 | Hierro (copia mejorada) | multipágina | A1 | https://elulises15.github.io/preview-fable/demos/gym-hierro/ | noindex | ✅ 200 |
| 9 | Casa Fuego (copia mejorada) | multipágina | A1 | https://elulises15.github.io/preview-fable/demos/casa-fuego/ | noindex | ✅ 200 |
| 10 | Salón Aurora (copia mejorada) | multipágina | A1 | https://elulises15.github.io/preview-fable/demos/salon-aurora/ | noindex | ✅ 200 |
| 11 | TodoHierro (copia mejorada) | webapp | A1 | https://elulises15.github.io/preview-fable/demos/mercadolocal/ | noindex | ✅ 200 |
| 12 | Sonrisa Clara (copia mejorada) | webapp | A1 | https://elulises15.github.io/preview-fable/demos/turnos-dental/ | noindex | ✅ 200 |
| 13 | VozClara (copia mejorada) | webapp | A1 | https://elulises15.github.io/preview-fable/demos/vozclara/ | noindex | ✅ 200 |
| 14 | Cancha Norte (copia mejorada) | webapp | A1 | https://elulises15.github.io/preview-fable/demos/club-cancha/ | noindex | ✅ 200 |
| 15 | Lo de Mabel (copia mejorada) | webapp | A1 | https://elulises15.github.io/preview-fable/demos/cocina-carta/ | noindex | ✅ 200 |
| 16 | Mate & Magia (copia mejorada) | webapp (juego) | A1 | https://elulises15.github.io/preview-fable/demos/rpg-ligero/ | noindex | ✅ 200 |
| 17 | Peluquería de barrio (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-carlitos/ | noindex | ✅ 200 |
| 18 | Distribuidora (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-distribuidora-lusitano/ | noindex | ✅ 200 |
| 19 | Electricidad (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-electro-ranelagh/ | noindex | ✅ 200 |
| 20 | Farmacia (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-farmacia-martinenco/ | noindex | ✅ 200 |
| 21 | Farmacia (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-farmacia-perez/ | noindex | ✅ 200 |
| 22 | Ferretería (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-ferreteria-norsur/ | noindex | ✅ 200 |
| 23 | Veterinaria (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-gaddi-veterinaria/ | noindex | ✅ 200 |
| 24 | Ferretería (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-isamac-ferreteria/ | noindex | ✅ 200 |
| 25 | Juguetería y bazar (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-jugueteria-bazar/ | noindex | ✅ 200 |
| 26 | Fútbol 5 (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-la-flecha-futbol-5/ | noindex | ✅ 200 |
| 27 | Taller automotor (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-metal-motor/ | noindex | ✅ 200 |
| 28 | Sanitarios (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-sanitarios-aguasur/ | noindex | ✅ 200 |
| 29 | Outlet de electrodomésticos (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-sourigues-outlet/ | noindex | ✅ 200 |
| 30 | Salón de eventos (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-tata-eventos/ | noindex | ✅ 200 |
| 31 | Fiambrería (copia mejorada) | landing | A2 | https://elulises15.github.io/preview-fable/demos/sourigues-una-feta-mas/ | noindex | ✅ 200 |
| 32 | Casa de Pastas E&Y (copia mejorada) | landing | A3 | https://elulises15.github.io/preview-fable/demos/casa-de-pastas-ey/ | noindex | ✅ 200 |
| 33 | Churi (copia mejorada) | landing | A3 | https://elulises15.github.io/preview-fable/demos/churi/ | noindex | ✅ 200 |
| 34 | Consul Vet (copia mejorada) | landing | A3 | https://elulises15.github.io/preview-fable/demos/consul-vet/ | noindex | ✅ 200 |
| 35 | Hospital Veterinario del Sur (copia mejorada) | landing | A3 | https://elulises15.github.io/preview-fable/demos/hospital-veterinario-del-sur/ | noindex | ✅ 200 |
| 36 | Jesi Estudio Fitness (copia mejorada) | landing | A3 | https://elulises15.github.io/preview-fable/demos/jesi-estudio-fitness/ | noindex | ✅ 200 |
| 37 | Swagg Barber (copia mejorada) | landing | A3 | https://elulises15.github.io/preview-fable/demos/swagg-barber/ | noindex | ✅ 200 |
| 38 | Complejo Aylen (copia mejorada) | landing | A3 | https://elulises15.github.io/preview-fable/demos/complejo-aylen-kit-demo/ | noindex | ✅ 200 |
| 39 | El Origen Eventos (copia mejorada) | landing | A3 | https://elulises15.github.io/preview-fable/demos/el-origen-eventos-kit-demo/ | noindex | ✅ 200 |
| 40 | Apes Peluquería (copia mejorada) | landing | A3 | https://elulises15.github.io/preview-fable/demos/apes-peluqueria/ | noindex | ✅ 200 |
| 41 | Plantilla gastro-cafe | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/gastro-cafe/ | noindex | ✅ 200 |
| 42 | Plantilla gastro-panaderia | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/gastro-panaderia/ | noindex | ✅ 200 |
| 43 | Plantilla comercio-local | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/comercio-local/ | noindex | ✅ 200 |
| 44 | Plantilla servicios-oficio | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/servicios-oficio/ | noindex | ✅ 200 |
| 45 | Plantilla barberia | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/barberia/ | noindex | ✅ 200 |
| 46 | Plantilla veterinaria | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/veterinaria/ | noindex | ✅ 200 |
| 47 | Plantilla gym-fitness | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/gym-fitness/ | noindex | ✅ 200 |
| 48 | Plantilla servicios-profesionales | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/servicios-profesionales/ | noindex | ✅ 200 |
| 49 | Plantilla ferreteria | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/ferreteria/ | noindex | ✅ 200 |
| 50 | Plantilla odontologia | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/odontologia/ | noindex | ✅ 200 |
| 51 | Plantilla almacen | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/almacen/ | noindex | ✅ 200 |
| 52 | Plantilla estetica | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/estetica/ | noindex | ✅ 200 |
| 53 | Plantilla inmobiliaria | plantilla | A4 | https://elulises15.github.io/preview-fable/templates/inmobiliaria/ | noindex | ✅ 200 |
| 54 | Librería de componentes Web Factory (16 bloques) | componente | A5 | https://elulises15.github.io/preview-fable/components/ | noindex | ✅ 200 |
| 55 | PrintFactory 3D (copia mejorada) | landing / sitio | A5 | https://elulises15.github.io/preview-fable/printfactory/ | noindex | ✅ 200 |
| 56 | Web Factory (copia mejorada) | landing / sitio | A5 | https://elulises15.github.io/preview-fable/webfactory/ | noindex | ✅ 200 |
| 57 | Índice preview-fable | galería | A5 | https://elulises15.github.io/preview-fable/ | noindex | ✅ 200 |
| 58 | Galería de demos mejoradas | galería | A5 | https://elulises15.github.io/preview-fable/demos/ | noindex | ✅ 200 |
| 59 | Galería de plantillas | galería | A5 | https://elulises15.github.io/preview-fable/templates/ | noindex | ✅ 200 |
| 60 | Índice Sourigues · Propuestas locales | galería | B | https://elulises15.github.io/sourigues-demos/ | noindex | ✅ 200 |
| 61 | Carlitos (original) | landing | B | https://elulises15.github.io/sourigues-demos/carlitos/ | noindex | ✅ 200 |
| 62 | Distribuidora Lusitano (original) | landing | B | https://elulises15.github.io/sourigues-demos/distribuidora-lusitano/ | noindex | ✅ 200 |
| 63 | Electro Ranelagh (original) | landing | B | https://elulises15.github.io/sourigues-demos/electro-ranelagh/ | noindex | ✅ 200 |
| 64 | Farmacia Martinenco (original) | landing | B | https://elulises15.github.io/sourigues-demos/farmacia-martinenco/ | noindex | ✅ 200 |
| 65 | Farmacia Perez (original) | landing | B | https://elulises15.github.io/sourigues-demos/farmacia-perez/ | noindex | ✅ 200 |
| 66 | Ferreteria Norsur (original) | landing | B | https://elulises15.github.io/sourigues-demos/ferreteria-norsur/ | noindex | ✅ 200 |
| 67 | Gaddi Veterinaria (original) | landing | B | https://elulises15.github.io/sourigues-demos/gaddi-veterinaria/ | noindex | ✅ 200 |
| 68 | Isamac Ferreteria (original) | landing | B | https://elulises15.github.io/sourigues-demos/isamac-ferreteria/ | noindex | ✅ 200 |
| 69 | Jugueteria Bazar (original) | landing | B | https://elulises15.github.io/sourigues-demos/jugueteria-bazar/ | noindex | ✅ 200 |
| 70 | La Flecha Futbol 5 (original) | landing | B | https://elulises15.github.io/sourigues-demos/la-flecha-futbol-5/ | noindex | ✅ 200 |
| 71 | Metal Motor (original) | landing | B | https://elulises15.github.io/sourigues-demos/metal-motor/ | noindex | ✅ 200 |
| 72 | Sanitarios Aguasur (original) | landing | B | https://elulises15.github.io/sourigues-demos/sanitarios-aguasur/ | noindex | ✅ 200 |
| 73 | Sourigues Outlet (original) | landing | B | https://elulises15.github.io/sourigues-demos/sourigues-outlet/ | noindex | ✅ 200 |
| 74 | Tata Eventos (original) | landing | B | https://elulises15.github.io/sourigues-demos/tata-eventos/ | noindex | ✅ 200 |
| 75 | Una Feta Mas (original) | landing | B | https://elulises15.github.io/sourigues-demos/una-feta-mas/ | noindex | ✅ 200 |
| 76 | Café Luna | landing | C1 | https://elulises15.github.io/cafe-luna/ | noindex | ✅ 200 |
| 77 | Taller Cadena | landing | C1 | https://elulises15.github.io/taller-cadena/ | noindex | ✅ 200 |
| 78 | Florería Pétalos | landing | C1 | https://elulises15.github.io/floreria-petalos/ | noindex | ✅ 200 |
| 79 | Estudio Vinilo | landing | C1 | https://elulises15.github.io/estudio-vinilo/ | noindex | ✅ 200 |
| 80 | Hogaza | landing | C1 | https://elulises15.github.io/panaderia-hogaza/ | noindex | ✅ 200 |
| 81 | Barbería Bruma | multipágina | C1 | https://elulises15.github.io/barberia-bruma/ | noindex | ✅ 200 |
| 82 | Patitas del Sur | multipágina | C1 | https://elulises15.github.io/vet-patitas/ | noindex | ✅ 200 |
| 83 | Hierro | multipágina | C1 | https://elulises15.github.io/gym-hierro/ | noindex | ✅ 200 |
| 84 | Casa Fuego | multipágina | C1 | https://elulises15.github.io/casa-fuego/ | noindex | ✅ 200 |
| 85 | Salón Aurora | multipágina | C1 | https://elulises15.github.io/salon-aurora/ | noindex | ✅ 200 |
| 86 | TodoHierro | webapp | C1 | https://elulises15.github.io/mercadolocal/ | noindex | ✅ 200 |
| 87 | Sonrisa Clara | webapp | C1 | https://elulises15.github.io/turnos-dental/ | noindex | ✅ 200 |
| 88 | VozClara | webapp | C1 | https://elulises15.github.io/vozclara/ | noindex | ✅ 200 |
| 89 | Cancha Norte | webapp | C1 | https://elulises15.github.io/club-cancha/ | noindex | ✅ 200 |
| 90 | Lo de Mabel | webapp | C1 | https://elulises15.github.io/cocina-carta/ | noindex | ✅ 200 |
| 91 | Mate & Magia | webapp (juego) | C1 | https://elulises15.github.io/rpg-ligero/ | noindex | ✅ 200 |
| 92 | Índice demos-clientes | galería | C2 | https://elulises15.github.io/demos-clientes/ | noindex | ✅ 200 |
| 93 | Casa de Pastas E&Y | landing | C2 | https://elulises15.github.io/demos-clientes/casa-de-pastas-ey/ | noindex | ✅ 200 |
| 94 | Churi | landing | C2 | https://elulises15.github.io/demos-clientes/churi/ | noindex | ✅ 200 |
| 95 | Consul Vet | landing | C2 | https://elulises15.github.io/demos-clientes/consul-vet/ | noindex | ✅ 200 |
| 96 | Hospital Veterinario del Sur | landing | C2 | https://elulises15.github.io/demos-clientes/hospital-veterinario-del-sur/ | noindex | ✅ 200 |
| 97 | Jesi Estudio Fitness | landing | C2 | https://elulises15.github.io/demos-clientes/jesi-estudio-fitness/ | noindex | ✅ 200 |
| 98 | Swagg Barber | landing | C2 | https://elulises15.github.io/demos-clientes/swagg-barber/ | noindex | ✅ 200 |
| 99 | Complejo Aylen | landing | C2 | https://elulises15.github.io/demos-clientes/complejo-aylen/ | indexable | ✅ 200 |
| 100 | El Origen Eventos | landing | C2 | https://elulises15.github.io/demos-clientes/el-origen-eventos/ | indexable | ✅ 200 |
| 101 | Complejo Aylen (kit-demo) | landing | C2 | https://elulises15.github.io/demos-clientes/complejo-aylen-kit-demo/ | noindex | ✅ 200 |
| 102 | El Origen Eventos (kit-demo) | landing | C2 | https://elulises15.github.io/demos-clientes/el-origen-eventos-kit-demo/ | noindex | ✅ 200 |
| 103 | Apes Peluquería (demo) | landing | C3 | https://apes-peluqueria.pages.dev/ | noindex | ✅ 200 |
| 104 | Apes Peluquería (repo GitHub Pages) | landing | C3 | https://elulises15.github.io/apes-peluqueria-demo/ | sin meta robots | ❌ 404 |
| 105 | PrintFactory 3D | landing | C3 | https://printfactory3d.pages.dev/ | noindex | ✅ 200 |
| 106 | PrintFactory 3D (repo GitHub Pages) | landing | C3 | https://elulises15.github.io/printfactory3d/ | noindex | ✅ 200 |
| 107 | Web Factory (sitio de la marca) | landing | C3 | https://web-factory-hjs.pages.dev/ | indexable | ✅ 200 |
| 108 | Web Factory landing (zona sur) | landing | C3 | https://elulises15.github.io/web-factory-landing/ | sin meta robots | ❌ 404 |
| 109 | Web Factory demo (landing vieja) | landing | C3 | https://elulises15.github.io/web-factory-demo/ | noindex | ✅ 200 |
| 110 | Complejo Aylen (Cloudflare Pages) | landing | C3 | https://complejo-aylen.pages.dev/ | indexable | ✅ 200 |
| 111 | El Origen Eventos (Cloudflare Pages) | landing | C3 | https://el-origen-eventos.pages.dev/ | indexable | ✅ 200 |
| 112 | Buffet Aylen (demo) | landing | C3 | https://elulises15.github.io/buffet-aylen-demo/ | noindex | ✅ 200 |
| 113 | Galería de prospectos Web Factory (revisión) | landing | C3 | https://elulises15.github.io/web-factory-prospectos-review/ | noindex | ✅ 200 |
| 114 | Autoserv Berchi · basica | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/autoserv-berchi/basica/site/index.html | noindex | ✅ 200 |
| 115 | Autoserv Berchi · intermedia | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/autoserv-berchi/intermedia/site/index.html | noindex | ✅ 200 |
| 116 | Autoserv Berchi · completa | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/autoserv-berchi/completa/site/index.html | noindex | ✅ 200 |
| 117 | Ferreteria Emmanuel · basica | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/ferreteria-emmanuel/basica/site/index.html | noindex | ✅ 200 |
| 118 | Ferreteria Emmanuel · intermedia | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/ferreteria-emmanuel/intermedia/site/index.html | noindex | ✅ 200 |
| 119 | Ferreteria Emmanuel · completa | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/ferreteria-emmanuel/completa/site/index.html | noindex | ✅ 200 |
| 120 | Ferreteria Gutierrez · basica | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/ferreteria-gutierrez/basica/site/index.html | noindex | ✅ 200 |
| 121 | Ferreteria Gutierrez · intermedia | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/ferreteria-gutierrez/intermedia/site/index.html | noindex | ✅ 200 |
| 122 | Ferreteria Gutierrez · completa | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/ferreteria-gutierrez/completa/site/index.html | noindex | ✅ 200 |
| 123 | Granjita Pitru · basica | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/granjita-pitru/basica/site/index.html | noindex | ✅ 200 |
| 124 | Granjita Pitru · intermedia | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/granjita-pitru/intermedia/site/index.html | noindex | ✅ 200 |
| 125 | Granjita Pitru · completa | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/granjita-pitru/completa/site/index.html | noindex | ✅ 200 |
| 126 | La Boutique Del Panadero · basica | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/la-boutique-del-panadero/basica/site/index.html | noindex | ✅ 200 |
| 127 | La Boutique Del Panadero · intermedia | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/la-boutique-del-panadero/intermedia/site/index.html | noindex | ✅ 200 |
| 128 | La Boutique Del Panadero · completa | landing | C4 | https://elulises15.github.io/web-factory-prospectos-review/projects/la-boutique-del-panadero/completa/site/index.html | noindex | ✅ 200 |
| 129 | Complejo Aylen | producción | D | https://complejoaylen.com.ar/ | PRODUCCIÓN | ✅ 200 |
| 130 | El Origen Eventos | producción | D | https://elorigeneventos.com.ar/ | PRODUCCIÓN | ✅ 200 |
| 131 | Hub personal (portfolio) | web/app (no landing de cliente) | E | https://elulises15.github.io/ | sin meta robots | ✅ 200 |
| 132 | Rachazo · demo web (ex Habit Quest) | web/app (no landing de cliente) | E | https://elulises15.github.io/habit-quest-demo/ | sin meta robots | ✅ 200 |
| 133 | Órbita (prototipo) | web/app (no landing de cliente) | E | https://elulises15.github.io/orbita/ | sin meta robots | ✅ 200 |
| 134 | Política 8D | web/app (no landing de cliente) | E | https://elulises15.github.io/politica-8d/ | sin meta robots | ✅ 200 |
| 135 | Speechify app (lector) | web/app (no landing de cliente) | E | https://elulises15.github.io/speechify-app/ | sin meta robots | ✅ 200 |
| 136 | Paladin Survival demo web | web/app (no landing de cliente) | E | https://elulises15.github.io/paladin-survival-demo/ | sin meta robots | ✅ 200 |

<a id="a1"></a>
## A1 · preview-fable · Galería Web Factory mejorada (landings, multipágina, webapps, bonus)

Copias mejoradas de las 16 demos de la galería Web Factory (las originales, hechas con Codex, están en C1 y no se tocaron). Repo: ElUlises15/preview-fable.

### 1. Café Luna (copia mejorada)
- **Rubro/vertical:** Café (gastro)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/cafe-luna/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-10 · `ce94a9f 2026-11-11`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/cafe-luna/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/cafe-luna/fable (original copiado de /workspace/webtest/cafe-luna)`

### 2. Florería Pétalos (copia mejorada)
- **Rubro/vertical:** Florería (comercio local)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/floreria-petalos/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-10 · `ce94a9f 2026-11-11`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/floreria-petalos/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/floreria-petalos/fable (original copiado de /workspace/webtest/floreria-petalos)`

### 3. Taller Cadena (copia mejorada)
- **Rubro/vertical:** Taller de bicis (oficio)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/taller-cadena/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-10 · `ce94a9f 2026-11-11`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/taller-cadena/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/taller-cadena/fable (original copiado de /workspace/webtest/taller-cadena)`

### 4. Hogaza (copia mejorada)
- **Rubro/vertical:** Panadería (gastro)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/panaderia-hogaza/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-10 · `ce94a9f 2026-11-11`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/panaderia-hogaza/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/panaderia-hogaza/fable (original copiado de /workspace/webtest/panaderia-hogaza)`

### 5. Estudio Vinilo (copia mejorada)
- **Rubro/vertical:** Sala de ensayo (servicios)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/estudio-vinilo/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-10 · `dd24562 2026-11-11`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/estudio-vinilo/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/estudio-vinilo/fable (original copiado de /workspace/webtest/estudio-vinilo)`

### 6. Barbería Bruma (copia mejorada)
- **Rubro/vertical:** Barbería
- **Tipo:** multipágina
- **URL pública:** https://elulises15.github.io/preview-fable/demos/barberia-bruma/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-10 · `dd24562 2026-11-11`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/barberia-bruma/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/barberia-bruma/fable (original copiado de /workspace/webtest/barberia-bruma)`

### 7. Patitas del Sur (copia mejorada)
- **Rubro/vertical:** Veterinaria
- **Tipo:** multipágina
- **URL pública:** https://elulises15.github.io/preview-fable/demos/vet-patitas/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-10 · `dd24562 2026-11-11`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/vet-patitas/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/vet-patitas/fable (original copiado de /workspace/webtest/vet-patitas)`

### 8. Hierro (copia mejorada)
- **Rubro/vertical:** Gimnasio
- **Tipo:** multipágina
- **URL pública:** https://elulises15.github.io/preview-fable/demos/gym-hierro/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-10 · `dd24562 2026-11-11`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/gym-hierro/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/gym-hierro/fable (original copiado de /workspace/webtest/gym-hierro)`

### 9. Casa Fuego (copia mejorada)
- **Rubro/vertical:** Parrilla
- **Tipo:** multipágina
- **URL pública:** https://elulises15.github.io/preview-fable/demos/casa-fuego/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-10 · `dd24562 2026-11-11`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/casa-fuego/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/casa-fuego/fable (original copiado de /workspace/webtest/casa-fuego)`

### 10. Salón Aurora (copia mejorada)
- **Rubro/vertical:** Salón de eventos
- **Tipo:** multipágina
- **URL pública:** https://elulises15.github.io/preview-fable/demos/salon-aurora/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-10 · `dd24562 2026-11-11`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/salon-aurora/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/salon-aurora/fable (original copiado de /workspace/webtest/salon-aurora)`

### 11. TodoHierro (copia mejorada)
- **Rubro/vertical:** Ferretería con catálogo y carrito
- **Tipo:** webapp
- **URL pública:** https://elulises15.github.io/preview-fable/demos/mercadolocal/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `d335054 2026-11-11`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/mercadolocal/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/mercadolocal/fable (original copiado de /workspace/webtest/mercadolocal/frontend)`

### 12. Sonrisa Clara (copia mejorada)
- **Rubro/vertical:** Turnos odontológicos
- **Tipo:** webapp
- **URL pública:** https://elulises15.github.io/preview-fable/demos/turnos-dental/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `d335054 2026-11-11`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/turnos-dental/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/turnos-dental/fable (original copiado de /workspace/webtest/turnos-dental/public)`

### 13. VozClara (copia mejorada)
- **Rubro/vertical:** Lector de textos en voz alta (PWA)
- **Tipo:** webapp
- **URL pública:** https://elulises15.github.io/preview-fable/demos/vozclara/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `d335054 2026-11-11`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/vozclara/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/vozclara/fable (original copiado de /workspace/webtest/vozclara/dist)`

### 14. Cancha Norte (copia mejorada)
- **Rubro/vertical:** Reservas de canchas
- **Tipo:** webapp
- **URL pública:** https://elulises15.github.io/preview-fable/demos/club-cancha/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `d335054 2026-11-11`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/club-cancha/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/club-cancha/fable (original copiado de /workspace/webtest/club-cancha/public)`

### 15. Lo de Mabel (copia mejorada)
- **Rubro/vertical:** Carta y pedidos desde la mesa
- **Tipo:** webapp
- **URL pública:** https://elulises15.github.io/preview-fable/demos/cocina-carta/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `0c6c561 2026-11-11`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/cocina-carta/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/cocina-carta/fable (original copiado de /workspace/webtest/cocina-carta/dist)`

### 16. Mate & Magia (copia mejorada)
- **Rubro/vertical:** Juego roguelite en el navegador
- **Tipo:** webapp (juego)
- **URL pública:** https://elulises15.github.io/preview-fable/demos/rpg-ligero/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `0c6c561 2026-11-11`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/rpg-ligero/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/rpg-ligero/fable (original copiado de /workspace/webtest/rpg-ligero)`

<a id="a2"></a>
## A2 · preview-fable · Sourigues mejoradas

### 17. Peluquería de barrio (copia mejorada)
- **Rubro/vertical:** Peluquería de barrio (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-carlitos/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `ca27426 2026-11-11`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/carlitos/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-carlitos/fable (original copiado de /workspace/sourigues-demos-publicacion/carlitos)`

### 18. Distribuidora (copia mejorada)
- **Rubro/vertical:** Distribuidora (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-distribuidora-lusitano/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `ca27426 2026-11-11`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/distribuidora-lusitano/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-distribuidora-lusitano/fable (original copiado de /workspace/sourigues-demos-publicacion/distribuidora-lusitano)`

### 19. Electricidad (copia mejorada)
- **Rubro/vertical:** Electricidad (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-electro-ranelagh/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `ca27426 2026-11-11`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/electro-ranelagh/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-electro-ranelagh/fable (original copiado de /workspace/sourigues-demos-publicacion/electro-ranelagh)`

### 20. Farmacia (copia mejorada)
- **Rubro/vertical:** Farmacia (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-farmacia-martinenco/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `1ec8579 2026-11-12`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/farmacia-martinenco/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-farmacia-martinenco/fable (original copiado de /workspace/sourigues-demos-publicacion/farmacia-martinenco)`

### 21. Farmacia (copia mejorada)
- **Rubro/vertical:** Farmacia (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-farmacia-perez/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `1ec8579 2026-11-12`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/farmacia-perez/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-farmacia-perez/fable (original copiado de /workspace/sourigues-demos-publicacion/farmacia-perez)`

### 22. Ferretería (copia mejorada)
- **Rubro/vertical:** Ferretería (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-ferreteria-norsur/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `1ec8579 2026-11-12`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/ferreteria-norsur/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-ferreteria-norsur/fable (original copiado de /workspace/sourigues-demos-publicacion/ferreteria-norsur)`

### 23. Veterinaria (copia mejorada)
- **Rubro/vertical:** Veterinaria (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-gaddi-veterinaria/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `1ec8579 2026-11-12`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/gaddi-veterinaria/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-gaddi-veterinaria/fable (original copiado de /workspace/sourigues-demos-publicacion/gaddi-veterinaria)`

### 24. Ferretería (copia mejorada)
- **Rubro/vertical:** Ferretería (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-isamac-ferreteria/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `1ec8579 2026-11-12`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/isamac-ferreteria/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-isamac-ferreteria/fable (original copiado de /workspace/sourigues-demos-publicacion/isamac-ferreteria)`

### 25. Juguetería y bazar (copia mejorada)
- **Rubro/vertical:** Juguetería y bazar (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-jugueteria-bazar/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `1ec8579 2026-11-12`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/jugueteria-bazar/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-jugueteria-bazar/fable (original copiado de /workspace/sourigues-demos-publicacion/jugueteria-bazar)`

### 26. Fútbol 5 (copia mejorada)
- **Rubro/vertical:** Fútbol 5 (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-la-flecha-futbol-5/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `1ec8579 2026-11-12`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/la-flecha-futbol-5/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-la-flecha-futbol-5/fable (original copiado de /workspace/sourigues-demos-publicacion/la-flecha-futbol-5)`

### 27. Taller automotor (copia mejorada)
- **Rubro/vertical:** Taller automotor (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-metal-motor/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `1ec8579 2026-11-12`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/metal-motor/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-metal-motor/fable (original copiado de /workspace/sourigues-demos-publicacion/metal-motor)`

### 28. Sanitarios (copia mejorada)
- **Rubro/vertical:** Sanitarios (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-sanitarios-aguasur/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `1ec8579 2026-11-12`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/sanitarios-aguasur/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-sanitarios-aguasur/fable (original copiado de /workspace/sourigues-demos-publicacion/sanitarios-aguasur)`

### 29. Outlet de electrodomésticos (copia mejorada)
- **Rubro/vertical:** Outlet de electrodomésticos (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-sourigues-outlet/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-11 · `1ec8579 2026-11-12`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/sourigues-outlet/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-sourigues-outlet/fable (original copiado de /workspace/sourigues-demos-publicacion/sourigues-outlet)`

### 30. Salón de eventos (copia mejorada)
- **Rubro/vertical:** Salón de eventos (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-tata-eventos/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-12 · `7f22f72 2026-11-12`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/tata-eventos/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-tata-eventos/fable (original copiado de /workspace/sourigues-demos-publicacion/tata-eventos)`

### 31. Fiambrería (copia mejorada)
- **Rubro/vertical:** Fiambrería (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/sourigues-una-feta-mas/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-12 · `7f22f72 2026-11-12`
- **Original (sin tocar):** https://elulises15.github.io/sourigues-demos/una-feta-mas/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/sourigues-una-feta-mas/fable (original copiado de /workspace/sourigues-demos-publicacion/una-feta-mas)`

<a id="a3"></a>
## A3 · preview-fable · Kit-demos de clientes mejoradas

### 32. Casa de Pastas E&Y (copia mejorada)
- **Rubro/vertical:** Casa de pastas y pizzería (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/casa-de-pastas-ey/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-12 · `7f22f72 2026-11-12`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/demos-clientes/casa-de-pastas-ey/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/casa-de-pastas-ey/fable (original copiado de /workspace/webteam/demos-clientes-repo/casa-de-pastas-ey)`

### 33. Churi (copia mejorada)
- **Rubro/vertical:** Tienda de ropa y accesorios (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/churi/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-12 · `7f22f72 2026-11-12`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/demos-clientes/churi/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/churi/fable (original copiado de /workspace/webteam/demos-clientes-repo/churi)`

### 34. Consul Vet (copia mejorada)
- **Rubro/vertical:** Consultorio veterinario (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/consul-vet/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-12 · `7f22f72 2026-11-12`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/demos-clientes/consul-vet/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/consul-vet/fable (original copiado de /workspace/webteam/demos-clientes-repo/consul-vet)`

### 35. Hospital Veterinario del Sur (copia mejorada)
- **Rubro/vertical:** Hospital veterinario (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/hospital-veterinario-del-sur/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-12 · `7f22f72 2026-11-12`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/demos-clientes/hospital-veterinario-del-sur/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/hospital-veterinario-del-sur/fable (original copiado de /workspace/webteam/demos-clientes-repo/hospital-veterinario-del-sur)`

### 36. Jesi Estudio Fitness (copia mejorada)
- **Rubro/vertical:** Estudio de entrenamiento para mujeres (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/jesi-estudio-fitness/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Opus 5.5
- **Fecha / commit:** 2026-11-12 · `1fee6db 2026-11-12`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/demos-clientes/jesi-estudio-fitness/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/jesi-estudio-fitness/fable (original copiado de /workspace/webteam/demos-clientes-repo/jesi-estudio-fitness)`

### 37. Swagg Barber (copia mejorada)
- **Rubro/vertical:** Barbería en Berazategui (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/swagg-barber/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Opus 5.5
- **Fecha / commit:** 2026-11-12 · `6469921 2026-11-12`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/demos-clientes/swagg-barber/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/swagg-barber/fable (original copiado de /workspace/webteam/demos-clientes-repo/swagg-barber)`

### 38. Complejo Aylen (copia mejorada)
- **Rubro/vertical:** Complejo de fútbol 11 en Sourigues (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/complejo-aylen-kit-demo/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Opus 5.5
- **Fecha / commit:** 2026-11-12 · `6469921 2026-11-12`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/demos-clientes/complejo-aylen-kit-demo/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/complejo-aylen-kit-demo/fable (original copiado de /workspace/webteam/demos-clientes-repo/complejo-aylen-kit-demo)`

### 39. El Origen Eventos (copia mejorada)
- **Rubro/vertical:** Salón de eventos en Sourigues (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/el-origen-eventos-kit-demo/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Opus 5.5
- **Fecha / commit:** 2026-11-12 · `6469921 2026-11-12`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://elulises15.github.io/demos-clientes/el-origen-eventos-kit-demo/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/el-origen-eventos-kit-demo/fable (original copiado de /workspace/webteam/demos-clientes-repo/el-origen-eventos-kit-demo)`

### 40. Apes Peluquería (copia mejorada)
- **Rubro/vertical:** Peluquería en Quilmes (landing)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/preview-fable/demos/apes-peluqueria/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Opus 5.5
- **Fecha / commit:** 2026-11-12 · `6469921 2026-11-12`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Original (sin tocar):** https://apes-peluqueria.pages.dev/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/demos/apes-peluqueria/fable (original copiado de /workspace/webteam/apes-peluqueria/site)`

<a id="a4"></a>
## A4 · preview-fable · Plantillas reutilizables

Fuente: `/workspace/webteam/templates-fable/` (cada plantilla trae README con placeholders `{{...}}`). El plan y el precio se ponen solo si figuran en `propuesta.html`. Si no hay propuesta, se aclara el plan de la demo base según la web de Web Factory.

### 41. Plantilla gastro-cafe
- **Rubro/vertical:** Gastronomía: café, bar, restaurante chico
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/gastro-cafe/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** derivada de demo Fable 5.2 (armado por script mktpl.py)
- **Fecha / commit:** 2026-11-11 · `dd24562 2026-11-11`
- **Plan/precio:** sin propuesta.html; demo base en la web: Básica ($150.000 + $30.000/mes)
- **Fuente local:** `/workspace/webteam/templates-fable/gastro-cafe`

### 42. Plantilla gastro-panaderia
- **Rubro/vertical:** Panadería, pastelería, rotisería, almacén de alimentos
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/gastro-panaderia/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** derivada de demo Fable 5.2 (armado por script mktpl.py)
- **Fecha / commit:** 2026-11-11 · `dd24562 2026-11-11`
- **Plan/precio:** sin propuesta.html; demo base en la web: Básica ($150.000 + $30.000/mes)
- **Fuente local:** `/workspace/webteam/templates-fable/gastro-panaderia`

### 43. Plantilla comercio-local
- **Rubro/vertical:** Comercio local / retail de barrio (florería, regalería, bazar, tienda)
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/comercio-local/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** derivada de demo Fable 5.2 (armado por script mktpl.py)
- **Fecha / commit:** 2026-11-11 · `dd24562 2026-11-11`
- **Plan/precio:** sin propuesta.html; demo base en la web: Básica ($150.000 + $30.000/mes)
- **Fuente local:** `/workspace/webteam/templates-fable/comercio-local`

### 44. Plantilla servicios-oficio
- **Rubro/vertical:** Servicios de oficio (taller, service, reparaciones, cerrajería, electricista)
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/servicios-oficio/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** derivada de demo Fable 5.2 (armado por script mktpl.py)
- **Fecha / commit:** 2026-11-11 · `dd24562 2026-11-11`
- **Plan/precio:** sin propuesta.html; demo base en la web: Básica ($150.000 + $30.000/mes)
- **Fuente local:** `/workspace/webteam/templates-fable/servicios-oficio`

### 45. Plantilla barberia
- **Rubro/vertical:** Barbería / peluquería masculina (multipágina)
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/barberia/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** derivada de demo Fable 5.2 (armado por script mktpl.py)
- **Fecha / commit:** 2026-11-11 · `dd24562 2026-11-11`
- **Plan/precio:** sin propuesta.html; demo base en la web: Intermedia ($280.000 + $45.000/mes)
- **Fuente local:** `/workspace/webteam/templates-fable/barberia`

### 46. Plantilla veterinaria
- **Rubro/vertical:** Veterinaria / clínica de mascotas (multipágina)
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/veterinaria/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** derivada de demo Fable 5.2 (armado por script mktpl.py)
- **Fecha / commit:** 2026-11-11 · `dd24562 2026-11-11`
- **Plan/precio:** sin propuesta.html; demo base en la web: Intermedia ($280.000 + $45.000/mes)
- **Fuente local:** `/workspace/webteam/templates-fable/veterinaria`

### 47. Plantilla gym-fitness
- **Rubro/vertical:** Gimnasio / estudio fitness (multipágina)
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/gym-fitness/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** derivada de demo Fable 5.2 (armado por script mktpl.py)
- **Fecha / commit:** 2026-11-11 · `dd24562 2026-11-11`
- **Plan/precio:** sin propuesta.html; demo base en la web: Intermedia ($280.000 + $45.000/mes)
- **Fuente local:** `/workspace/webteam/templates-fable/gym-fitness`

### 48. Plantilla servicios-profesionales
- **Rubro/vertical:** Servicios profesionales con turnos y tarifas (estudio, consultorio, academia)
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/servicios-profesionales/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** derivada de demo Fable 5.2 (armado por script mktpl.py)
- **Fecha / commit:** 2026-11-11 · `dd24562 2026-11-11`
- **Plan/precio:** sin propuesta.html; demo base en la web: Básica ($150.000 + $30.000/mes)
- **Fuente local:** `/workspace/webteam/templates-fable/servicios-profesionales`

### 49. Plantilla ferreteria
- **Rubro/vertical:** Ferretería / corralón / pinturería con catálogo, stock y carrito de retiro (webapp)
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/ferreteria/ (✅ 200; robots: `noindex, nofollow`)
- **Propuesta:** https://elulises15.github.io/preview-fable/templates/ferreteria/propuesta.html (✅ 200)
- **Estado:** copia de prueba · noindex
- **Modelo:** derivada de demo Fable 5.2 (armado por script mktpl.py)
- **Fecha / commit:** 2026-11-11 · `0c6c561 2026-11-11`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según propuesta.html
- **Fuente local:** `/workspace/webteam/templates-fable/ferreteria`

### 50. Plantilla odontologia
- **Rubro/vertical:** Consultorio odontológico / salud con agenda de turnos online (webapp)
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/odontologia/ (✅ 200; robots: `noindex, nofollow`)
- **Propuesta:** https://elulises15.github.io/preview-fable/templates/odontologia/propuesta.html (✅ 200)
- **Estado:** copia de prueba · noindex
- **Modelo:** derivada de demo Fable 5.2 (armado por script mktpl.py)
- **Fecha / commit:** 2026-11-11 · `0c6c561 2026-11-11`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según propuesta.html
- **Fuente local:** `/workspace/webteam/templates-fable/odontologia`

### 51. Plantilla almacen
- **Rubro/vertical:** Almacén de barrio / despensa / dietética / fiambrería (landing)
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/almacen/ (✅ 200; robots: `noindex, nofollow`)
- **Propuesta:** https://elulises15.github.io/preview-fable/templates/almacen/propuesta.html (✅ 200)
- **Estado:** copia de prueba · noindex
- **Modelo:** derivada de demo Fable 5.2 (armado por script mktpl.py)
- **Fecha / commit:** 2026-11-11 · `ca27426 2026-11-11`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según propuesta.html
- **Fuente local:** `/workspace/webteam/templates-fable/almacen`

### 52. Plantilla estetica
- **Rubro/vertical:** Centro de estética / cosmetología / manicuría / depilación (multipágina con turnos por WhatsApp)
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/estetica/ (✅ 200; robots: `noindex, nofollow`)
- **Propuesta:** https://elulises15.github.io/preview-fable/templates/estetica/propuesta.html (✅ 200)
- **Estado:** copia de prueba · noindex
- **Modelo:** derivada de demo Fable 5.2 (armado por script mktpl.py)
- **Fecha / commit:** 2026-11-12 · `1ec8579 2026-11-12`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según propuesta.html
- **Fuente local:** `/workspace/webteam/templates-fable/estetica`

### 53. Plantilla inmobiliaria
- **Rubro/vertical:** Inmobiliaria de barrio / martillero / corredor matriculado (landing 5 secciones, plan Intermedia)
- **Tipo:** plantilla
- **URL pública:** https://elulises15.github.io/preview-fable/templates/inmobiliaria/ (✅ 200; robots: `noindex, nofollow`)
- **Propuesta:** https://elulises15.github.io/preview-fable/templates/inmobiliaria/propuesta.html (✅ 200)
- **Estado:** copia de prueba · noindex
- **Modelo:** Opus 5.5
- **Fecha / commit:** 2026-11-12 · `1fee6db 2026-11-12`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según propuesta.html
- **Fuente local:** `/workspace/webteam/templates-fable/inmobiliaria`

<a id="a5"></a>
## A5 · preview-fable · Componentes, copias de PrintFactory/Web Factory y galerías

### 54. Librería de componentes Web Factory (16 bloques)
- **Rubro/vertical:** todos los rubros
- **Tipo:** componente
- **URL pública:** https://elulises15.github.io/preview-fable/components/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2 (lote 1) + a mano sin modelo (lote 2)
- **Fecha / commit:** 2026-11-12 · `7f22f72 2026-11-12`
- **Fuente local:** `/workspace/webteam/components-fable`

### 55. PrintFactory 3D (copia mejorada)
- **Rubro/vertical:** Impresión 3D
- **Tipo:** landing / sitio
- **URL pública:** https://elulises15.github.io/preview-fable/printfactory/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-10 · `88edb07 2026-11-11`
- **Original (sin tocar):** https://printfactory3d.pages.dev/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/printfactory-fable`

### 56. Web Factory (copia mejorada)
- **Rubro/vertical:** Agencia de páginas web
- **Tipo:** landing / sitio
- **URL pública:** https://elulises15.github.io/preview-fable/webfactory/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** Fable 5.2
- **Fecha / commit:** 2026-11-10 · `88edb07 2026-11-11`
- **Original (sin tocar):** https://web-factory-hjs.pages.dev/ (✅ 200)
- **Fuente local:** `/workspace/preview-fable-2026-11-10/webfactory-fable`

### 57. Índice preview-fable
- **Rubro/vertical:** índice
- **Tipo:** galería
- **URL pública:** https://elulises15.github.io/preview-fable/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** script
- **Fecha / commit:** 2026-11-12 · `6469921 2026-11-12`
- **Fuente local:** `/workspace/preview-fable-2026-11-10/publish`

### 58. Galería de demos mejoradas
- **Rubro/vertical:** índice
- **Tipo:** galería
- **URL pública:** https://elulises15.github.io/preview-fable/demos/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** script (galleries.py)
- **Fecha / commit:** 2026-11-12 · `6469921 2026-11-12`
- **Fuente local:** `/workspace/preview-fable-2026-11-10/publish/demos`

### 59. Galería de plantillas
- **Rubro/vertical:** índice
- **Tipo:** galería
- **URL pública:** https://elulises15.github.io/preview-fable/templates/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** copia de prueba · noindex
- **Modelo:** script (galleries.py)
- **Fecha / commit:** 2026-11-12 · `1fee6db 2026-11-12`
- **Fuente local:** `/workspace/preview-fable-2026-11-10/publish/templates`

<a id="b"></a>
## B · sourigues-demos · Originales del recorrido Sourigues

### 60. Índice Sourigues · Propuestas locales
- **Rubro/vertical:** índice
- **Tipo:** galería
- **URL pública:** https://elulises15.github.io/sourigues-demos/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado`

### 61. Carlitos (original)
- **Rubro/vertical:** Peluquería de barrio
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/carlitos/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/carlitos (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/carlitos)`

### 62. Distribuidora Lusitano (original)
- **Rubro/vertical:** Distribuidora
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/distribuidora-lusitano/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/distribuidora-lusitano (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/distribuidora-lusitano)`

### 63. Electro Ranelagh (original)
- **Rubro/vertical:** Electricidad
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/electro-ranelagh/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/electro-ranelagh (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/electro-ranelagh)`

### 64. Farmacia Martinenco (original)
- **Rubro/vertical:** Farmacia
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/farmacia-martinenco/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/farmacia-martinenco (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/farmacia-martinenco)`

### 65. Farmacia Perez (original)
- **Rubro/vertical:** Farmacia
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/farmacia-perez/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/farmacia-perez (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/farmacia-perez)`

### 66. Ferreteria Norsur (original)
- **Rubro/vertical:** Ferretería
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/ferreteria-norsur/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/ferreteria-norsur (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/ferreteria-norsur)`

### 67. Gaddi Veterinaria (original)
- **Rubro/vertical:** Veterinaria
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/gaddi-veterinaria/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/gaddi-veterinaria (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/gaddi-veterinaria)`

### 68. Isamac Ferreteria (original)
- **Rubro/vertical:** Ferretería
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/isamac-ferreteria/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/isamac-ferreteria (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/isamac-ferreteria)`

### 69. Jugueteria Bazar (original)
- **Rubro/vertical:** Juguetería y bazar
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/jugueteria-bazar/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/jugueteria-bazar (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/jugueteria-bazar)`

### 70. La Flecha Futbol 5 (original)
- **Rubro/vertical:** Fútbol 5
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/la-flecha-futbol-5/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/la-flecha-futbol-5 (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/la-flecha-futbol-5)`

### 71. Metal Motor (original)
- **Rubro/vertical:** Taller automotor
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/metal-motor/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/metal-motor (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/metal-motor)`

### 72. Sanitarios Aguasur (original)
- **Rubro/vertical:** Sanitarios
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/sanitarios-aguasur/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/sanitarios-aguasur (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/sanitarios-aguasur)`

### 73. Sourigues Outlet (original)
- **Rubro/vertical:** Outlet de electrodomésticos
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/sourigues-outlet/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/sourigues-outlet (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/sourigues-outlet)`

### 74. Tata Eventos (original)
- **Rubro/vertical:** Salón de eventos
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/tata-eventos/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/tata-eventos (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/tata-eventos)`

### 75. Una Feta Mas (original)
- **Rubro/vertical:** Fiambrería
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/sourigues-demos/una-feta-mas/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** Opus 5.5 (manifest.json del recorrido)
- **Fecha / commit:** 2026-11-08 · `1d5a08d 2026-11-08`
- **Fuente local:** `/workspace/sourigues-demos-publicado/una-feta-mas (trabajo: /workspace/sourigues-prospeccion-2026-11-08/demos/una-feta-mas)`

<a id="c1"></a>
## C1 · Galería Web Factory · Demos originales en GitHub Pages

### 76. Café Luna
- **Rubro/vertical:** Café de especialidad en Villa Crespo. Un rincón para bajar un cambio.
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/cafe-luna/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/cafe-luna`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/cafe-luna`

### 77. Taller Cadena
- **Rubro/vertical:** Taller de bicis en San Telmo: reparaciones, puesta a punto y usadas.
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/taller-cadena/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/taller-cadena`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/taller-cadena`

### 78. Florería Pétalos
- **Rubro/vertical:** Flores de estación y ramos con aire de barrio, en Palermo Soho.
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/floreria-petalos/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/floreria-petalos`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/floreria-petalos`

### 79. Estudio Vinilo
- **Rubro/vertical:** Ensayo y grabación analógica en Almagro.
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/estudio-vinilo/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/estudio-vinilo`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/estudio-vinilo`

### 80. Hogaza
- **Rubro/vertical:** Pan de masa madre, corteza y tiempo. Panadería en Colegiales.
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/panaderia-hogaza/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/panaderia-hogaza`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/panaderia-hogaza`

### 81. Barbería Bruma
- **Rubro/vertical:** Cortes clásicos, fades y barba en Villa Urquiza.
- **Tipo:** multipágina
- **URL pública:** https://elulises15.github.io/barberia-bruma/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/barberia-bruma`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/barberia-bruma`

### 82. Patitas del Sur
- **Rubro/vertical:** Veterinaria cercana para perros y gatos en Lanús Oeste.
- **Tipo:** multipágina
- **URL pública:** https://elulises15.github.io/vet-patitas/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/vet-patitas`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/vet-patitas`

### 83. Hierro
- **Rubro/vertical:** Gimnasio de barrio en Avellaneda: fuerza y comunidad.
- **Tipo:** multipágina
- **URL pública:** https://elulises15.github.io/gym-hierro/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/gym-hierro`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/gym-hierro`

### 84. Casa Fuego
- **Rubro/vertical:** Parrilla a leña en San Isidro. Carta, patio y reservas.
- **Tipo:** multipágina
- **URL pública:** https://elulises15.github.io/casa-fuego/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/casa-fuego`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/casa-fuego`

### 85. Salón Aurora
- **Rubro/vertical:** Cumpleaños y quince en Sourigues, zona sur GBA.
- **Tipo:** multipágina
- **URL pública:** https://elulises15.github.io/salon-aurora/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/salon-aurora`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/salon-aurora`

### 86. TodoHierro
- **Rubro/vertical:** Ecommerce de ferretería con stock (mock en Pages).
- **Tipo:** webapp
- **URL pública:** https://elulises15.github.io/mercadolocal/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/mercadolocal`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/mercadolocal`

### 87. Sonrisa Clara
- **Rubro/vertical:** Agenda de turnos odontológicos (mock en Pages).
- **Tipo:** webapp
- **URL pública:** https://elulises15.github.io/turnos-dental/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/turnos-dental`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/turnos-dental`

### 88. VozClara
- **Rubro/vertical:** Texto a voz, a tu ritmo (tipo Speechify).
- **Tipo:** webapp
- **URL pública:** https://elulises15.github.io/vozclara/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/vozclara`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/vozclara`

### 89. Cancha Norte
- **Rubro/vertical:** Reservas de cancha para el próximo partido.
- **Tipo:** webapp
- **URL pública:** https://elulises15.github.io/club-cancha/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/club-cancha`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/club-cancha`

### 90. Lo de Mabel
- **Rubro/vertical:** Carta casera y pedidos desde la mesa.
- **Tipo:** webapp
- **URL pública:** https://elulises15.github.io/cocina-carta/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/cocina-carta`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/cocina-carta`

### 91. Mate & Magia
- **Rubro/vertical:** RPG web pampeano: un poquito de magia, un montón de pampa.
- **Tipo:** webapp (juego)
- **URL pública:** https://elulises15.github.io/rpg-ligero/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo publicada (original) · noindex
- **Modelo:** Codex (webtest/STATUS.md)
- **Fecha / commit:** 2026-11-06 · `repo ElUlises15/rpg-ligero`
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webtest/rpg-ligero`

<a id="c2"></a>
## C2 · demos-clientes · Kit-demos originales en GitHub Pages

### 92. Índice demos-clientes
- **Rubro/vertical:** índice
- **Tipo:** galería
- **URL pública:** https://elulises15.github.io/demos-clientes/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** 2026-10-18 · `618045e 2026-10-18`
- **Fuente local:** `/workspace/webteam/demos-clientes-repo`

### 93. Casa de Pastas E&Y
- **Rubro/vertical:** Gastronomía
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/demos-clientes/casa-de-pastas-ey/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** 2026-10-17 · `5dc8025`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/demos-clientes-repo/casa-de-pastas-ey`

### 94. Churi
- **Rubro/vertical:** Indumentaria
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/demos-clientes/churi/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** 2026-10-17 · `5dc8025`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/demos-clientes-repo/churi`

### 95. Consul Vet
- **Rubro/vertical:** Veterinaria
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/demos-clientes/consul-vet/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** 2026-10-17 · `5dc8025`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/demos-clientes-repo/consul-vet`

### 96. Hospital Veterinario del Sur
- **Rubro/vertical:** Veterinaria
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/demos-clientes/hospital-veterinario-del-sur/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** 2026-10-17 · `5dc8025`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/demos-clientes-repo/hospital-veterinario-del-sur`

### 97. Jesi Estudio Fitness
- **Rubro/vertical:** Gimnasio
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/demos-clientes/jesi-estudio-fitness/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** 2026-10-17 · `5dc8025`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/demos-clientes-repo/jesi-estudio-fitness`

### 98. Swagg Barber
- **Rubro/vertical:** Barbería
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/demos-clientes/swagg-barber/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** 2026-10-17 · `5dc8025`
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/demos-clientes-repo/swagg-barber`

### 99. Complejo Aylen
- **Rubro/vertical:** no consta
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/demos-clientes/complejo-aylen/ (✅ 200; robots: `index,follow`)
- **Estado:** demo (no oficial) · indexable
- **Modelo:** no consta
- **Fecha / commit:** 2026-11-06 · `3346248`
- **Fuente local:** `/workspace/webteam/demos-clientes-repo/complejo-aylen`

### 100. El Origen Eventos
- **Rubro/vertical:** no consta
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/demos-clientes/el-origen-eventos/ (✅ 200; robots: `index,follow`)
- **Estado:** demo (no oficial) · indexable
- **Modelo:** no consta
- **Fecha / commit:** 2026-11-06 · `3346248`
- **Fuente local:** `/workspace/webteam/demos-clientes-repo/el-origen-eventos`

### 101. Complejo Aylen (kit-demo)
- **Rubro/vertical:** Canchas de fútbol
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/demos-clientes/complejo-aylen-kit-demo/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** 2026-11-06 · `e4d0b1c`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/demos-clientes-repo/complejo-aylen-kit-demo`

### 102. El Origen Eventos (kit-demo)
- **Rubro/vertical:** Salón de eventos
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/demos-clientes/el-origen-eventos-kit-demo/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** 2026-11-06 · `ec9823d`
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/demos-clientes-repo/el-origen-eventos-kit-demo`

<a id="c3"></a>
## C3 · Cloudflare Pages y otras demos/sitios de marca

### 103. Apes Peluquería (demo)
- **Rubro/vertical:** Peluquería (Quilmes)
- **Tipo:** landing
- **URL pública:** https://apes-peluqueria.pages.dev/ (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo / sitio publicado · noindex
- **Modelo:** Opus (opus-improve-log.txt)
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/apes-peluqueria/site (repo: /workspace/webteam/apes-peluqueria-repo)`

### 104. Apes Peluquería (repo GitHub Pages)
- **Rubro/vertical:** Peluquería (Quilmes)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/apes-peluqueria-demo/ (❌ 404; robots: `sin meta`)
- **Estado:** demo / sitio publicado · sin meta robots
- **Modelo:** Opus (opus-improve-log.txt)
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `/workspace/webteam/apes-peluqueria-repo`

### 105. PrintFactory 3D
- **Rubro/vertical:** Impresión 3D (Sourigues)
- **Tipo:** landing
- **URL pública:** https://printfactory3d.pages.dev/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** demo / sitio publicado · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/printfactory3d/site (repo: /workspace/webteam/printfactory3d-repo)`

### 106. PrintFactory 3D (repo GitHub Pages)
- **Rubro/vertical:** Impresión 3D
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/printfactory3d/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** demo / sitio publicado · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `/workspace/webteam/printfactory3d-repo`

### 107. Web Factory (sitio de la marca)
- **Rubro/vertical:** Agencia de páginas web
- **Tipo:** landing
- **URL pública:** https://web-factory-hjs.pages.dev/ (✅ 200; robots: `index, follow`)
- **Estado:** demo / sitio publicado · indexable
- **Modelo:** Codex + Opus (codex-build.log, opus-improve-log.txt)
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `/workspace/webteam/web-factory-marca/site`

### 108. Web Factory landing (zona sur)
- **Rubro/vertical:** Agencia de páginas web
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-landing/ (❌ 404; robots: `sin meta`)
- **Estado:** demo / sitio publicado · sin meta robots
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `/workspace/webteam/web-factory-landing-repo`

### 109. Web Factory demo (landing vieja)
- **Rubro/vertical:** Agencia de páginas web
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-demo/ (✅ 200; robots: `noindex`)
- **Estado:** demo / sitio publicado · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `/workspace/web-factory-demo`

### 110. Complejo Aylen (Cloudflare Pages)
- **Rubro/vertical:** Canchas de fútbol 11 (Sourigues)
- **Tipo:** landing
- **URL pública:** https://complejo-aylen.pages.dev/ (✅ 200; robots: `index,follow`)
- **Estado:** demo / sitio publicado · indexable
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/complejo-aylen/site`

### 111. El Origen Eventos (Cloudflare Pages)
- **Rubro/vertical:** Salón de eventos (Sourigues)
- **Tipo:** landing
- **URL pública:** https://el-origen-eventos.pages.dev/ (✅ 200; robots: `index,follow`)
- **Estado:** demo / sitio publicado · indexable
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/el-origen-eventos/site`

### 112. Buffet Aylen (demo)
- **Rubro/vertical:** Buffet del complejo (menú/QR)
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/buffet-aylen-demo/ (✅ 200; robots: `noindex, nofollow`)
- **Estado:** demo / sitio publicado · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `/workspace/webteam/buffet-aylen/site (zip: /workspace/buffet-aylen-publish)`

### 113. Galería de prospectos Web Factory (revisión)
- **Rubro/vertical:** Propuestas conceptuales por comercio
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/ (✅ 200; robots: `noindex,nofollow,noarchive`)
- **Estado:** demo / sitio publicado · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `no encontrada en /workspace (solo repo ElUlises15/web-factory-prospectos-review)`

<a id="c4"></a>
## C4 · web-factory-prospectos-review · Propuestas conceptuales por comercio

Propuestas conceptuales (no oficiales, formularios sin envío). No encontré la fuente local en /workspace: está solo en el repo ElUlises15/web-factory-prospectos-review.

### 114. Autoserv Berchi · basica
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/autoserv-berchi/basica/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 115. Autoserv Berchi · intermedia
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/autoserv-berchi/intermedia/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 116. Autoserv Berchi · completa
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/autoserv-berchi/completa/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 117. Ferreteria Emmanuel · basica
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/ferreteria-emmanuel/basica/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 118. Ferreteria Emmanuel · intermedia
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/ferreteria-emmanuel/intermedia/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 119. Ferreteria Emmanuel · completa
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/ferreteria-emmanuel/completa/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 120. Ferreteria Gutierrez · basica
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/ferreteria-gutierrez/basica/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 121. Ferreteria Gutierrez · intermedia
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/ferreteria-gutierrez/intermedia/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 122. Ferreteria Gutierrez · completa
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/ferreteria-gutierrez/completa/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 123. Granjita Pitru · basica
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/granjita-pitru/basica/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 124. Granjita Pitru · intermedia
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/granjita-pitru/intermedia/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 125. Granjita Pitru · completa
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/granjita-pitru/completa/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 126. La Boutique Del Panadero · basica
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/la-boutique-del-panadero/basica/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 127. La Boutique Del Panadero · intermedia
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/la-boutique-del-panadero/intermedia/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Intermedia ($280.000 + $45.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

### 128. La Boutique Del Panadero · completa
- **Rubro/vertical:** prospecto local
- **Tipo:** landing
- **URL pública:** https://elulises15.github.io/web-factory-prospectos-review/projects/la-boutique-del-panadero/completa/site/index.html (✅ 200; robots: `noindex,nofollow`)
- **Estado:** demo conceptual (no oficial) · noindex
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Completa ($450.000 + $60.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `no encontrada en /workspace`

<a id="d"></a>
## D · Producción de clientes (solo listadas, no se tocaron)

Son producción real: no se modificaron, no se desplegó nada y no se usaron como copia. Solo se hizo un GET para ver que responden.

### 129. Complejo Aylen
- **Rubro/vertical:** Cliente
- **Tipo:** producción
- **URL pública:** https://complejoaylen.com.ar/ (✅ 200; robots: `index,follow`)
- **Estado:** producción · PRODUCCIÓN
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/complejo-aylen/site (referencia; no se tocó)`

### 130. El Origen Eventos
- **Rubro/vertical:** Cliente
- **Tipo:** producción
- **URL pública:** https://elorigeneventos.com.ar/ (✅ 200; robots: `index,follow`)
- **Estado:** producción · PRODUCCIÓN
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Plan/precio:** Básica ($150.000 + $30.000/mes) — según la galería de la web de Web Factory
- **Fuente local:** `/workspace/webteam/el-origen-eventos/site (referencia; no se tocó)`

<a id="e"></a>
## E · Otros proyectos web propios publicados (no son landings de cliente)

### 131. Hub personal (portfolio)
- **Rubro/vertical:** proyecto propio
- **Tipo:** web/app (no landing de cliente)
- **URL pública:** https://elulises15.github.io/ (✅ 200; robots: `sin meta`)
- **Estado:** publicado · sin meta robots
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `/workspace/portfolio`

### 132. Rachazo · demo web (ex Habit Quest)
- **Rubro/vertical:** proyecto propio
- **Tipo:** web/app (no landing de cliente)
- **URL pública:** https://elulises15.github.io/habit-quest-demo/ (✅ 200; robots: `sin meta`)
- **Estado:** publicado · sin meta robots
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `/workspace/habit-quest-demo`

### 133. Órbita (prototipo)
- **Rubro/vertical:** proyecto propio
- **Tipo:** web/app (no landing de cliente)
- **URL pública:** https://elulises15.github.io/orbita/ (✅ 200; robots: `sin meta`)
- **Estado:** publicado · sin meta robots
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `/workspace/orbita`

### 134. Política 8D
- **Rubro/vertical:** proyecto propio
- **Tipo:** web/app (no landing de cliente)
- **URL pública:** https://elulises15.github.io/politica-8d/ (✅ 200; robots: `sin meta`)
- **Estado:** publicado · sin meta robots
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `/workspace/politica8d`

### 135. Speechify app (lector)
- **Rubro/vertical:** proyecto propio
- **Tipo:** web/app (no landing de cliente)
- **URL pública:** https://elulises15.github.io/speechify-app/ (✅ 200; robots: `sin meta`)
- **Estado:** publicado · sin meta robots
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `/workspace/speechify-app`

### 136. Paladin Survival demo web
- **Rubro/vertical:** proyecto propio
- **Tipo:** web/app (no landing de cliente)
- **URL pública:** https://elulises15.github.io/paladin-survival-demo/ (✅ 200; robots: `sin meta`)
- **Estado:** publicado · sin meta robots
- **Modelo:** no consta
- **Fecha / commit:** no consta · no consta
- **Fuente local:** `/workspace/paladin-publish`

## Notas

- **Indexables a propósito o heredadas:** `demos-clientes/complejo-aylen/` y `demos-clientes/el-origen-eventos/` responden `index,follow`, igual que `complejo-aylen.pages.dev` y `el-origen-eventos.pages.dev`. Son copias/espejos de los sitios de los clientes. No los cambié; si no deberían indexar, hay que revisarlo aparte.
- **Modelo de las originales:** la galería Web Factory (C1) se construyó con Codex según `/workspace/webtest/STATUS.md`. Las 15 de Sourigues (B), con Opus 5.5 según `manifest.json` del recorrido. En los kit-demos originales (C2) y los sitios de Cloudflare, el modelo no consta en los archivos.
- **Fechas de las copias A1–A3:** salen de la corrida (`outcome.json`). El commit es el último que tocó esa carpeta en preview-fable.
- Este catálogo se regenera con `python3 /workspace/webteam/catalogo/build.py && python3 /workspace/webteam/catalogo/render.py`.
