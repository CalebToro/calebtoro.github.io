# Caleb Toro — sitio personal

Sitio personal estático construido con HTML, CSS y JavaScript nativo. Reúne
artículos, notas de cuaderno, proyectos y formas de contacto, sin dependencias
de frameworks ni pasos de compilación.

## Estructura

```text
calebtoro-static/
├── index.html
├── sobre-mi.html
├── articulos.html
├── cuaderno.html
├── proyectos.html
├── contacto.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── posts/
│   ├── aprender-en-publico.html
│   ├── derecho-y-tecnologia.html
│   └── una-web-como-cuaderno.html
├── proyectos/
│   └── archivo-personal.html
└── README.md
```

## Editar el sitio

- Las páginas principales y los listados están en la raíz.
- Las entradas individuales viven en `posts/`; los proyectos con página propia,
  en `proyectos/`.
- Los estilos compartidos están en `assets/css/style.css`. El menú móvil y el año
  del copyright se gestionan desde `assets/js/main.js`.
- La navegación, las últimas entradas y los pies de página se mantienen
  directamente en HTML. Al cambiar una de esas partes, comprueba las páginas
  relacionadas para conservar la misma experiencia en todo el sitio.
- Mantén las rutas relativas. Las páginas dentro de `posts/` o `proyectos/`
  necesitan `../` para enlazar recursos y páginas de la raíz.
- Cada página debe tener un `<title>` y una descripción `meta` que correspondan a
  su contenido.

### Añadir una entrada

1. Crea el archivo dentro de `posts/`, siguiendo la estructura de una entrada
   existente y ajustando título, descripción, fecha y contenido.
2. Añade un enlace a la entrada en el listado correspondiente:
   `articulos.html` para artículos o `cuaderno.html` para notas.
3. Si debe aparecer entre las novedades, añádela al comienzo de «Últimas
   entradas» en `index.html`.
4. Abre las páginas en un navegador y revisa que los enlaces y estilos funcionen.

### Añadir un proyecto

1. Crea la página del proyecto dentro de `proyectos/`.
2. Añade su tarjeta a `proyectos.html`.
3. Si es una novedad, inclúyelo también en «Últimas entradas» de `index.html`.

## Probar localmente

Abre `index.html` en un navegador. El sitio no requiere instalación de paquetes,
compilación ni servidor local.

## Publicar en GitHub Pages

1. Sube el contenido de este proyecto a un repositorio de GitHub.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch** y elige la
   rama de publicación y la carpeta raíz (`/`).
4. Guarda la configuración y espera a que GitHub Pages complete la publicación.
5. Abre la URL publicada y prueba la navegación, las páginas de contenido y los
   enlaces externos.

El sitio no necesita un proceso de build: `index.html` está en la raíz y los
recursos usan rutas relativas, compatibles con GitHub Pages.
