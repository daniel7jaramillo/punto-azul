# 🔵 Asociación Punto Azul

Una página web institucional y de impacto social desarrollada con un diseño moderno, interactivo y consciente, creada como parte de mi aprendizaje en el bootcamp de programación web.

---

## Propósito del Proyecto
La Asociación Punto Azul nace con el firme compromiso de ofrecer un espacio seguro, digno y de acogida para personas en situación de extrema vulnerabilidad, abordando de manera integral problemáticas como las adicciones y la salud mental. Esta web busca reflejar esa sensibilidad a través del diseño visual y la experiencia de usuario.

---

##  Características Principales
* **Efecto Scroll-Snap:** Desplazamiento vertical magnético e imantado entre las diferentes secciones institucionales (`Quiénes somos`, `Origen`, `Actividades`, `Formación` e `Historia`).
* **Multimedia Integrado:** 
  * Vídeo de fondo en bucle (`background-video`) que da atmósfera a la página.
  * Contenedor circular con vídeo en zoom centrado en la portada.
  * Reproductor de audio flotante interactivo para reproducir el "Himno Institucional".
* **Menú de Hamburguesa Adaptativo:** Navegación móvil moderna y fluida desarrollada con JavaScript puro.
* **Diseño Responsivo:** Adaptado mediante unidades flexibles y `clamp()` para verse impecable en cualquier pantalla.

---

##  Tecnologías Utilizadas

Este proyecto ha sido construido desde cero utilizando las tecnologías fundamentales del desarrollo web (*Frontend*):
* **HTML5:** Para la estructura semántica de todas las secciones institucionales.
* **CSS3:** Para los estilos visuales, efectos de posición fija, contenedores flexibles (`Flexbox`) y diseño adaptativo.
* **JavaScript (Vanilla):** Para dotar de interactividad al botón de menú móvil y al reproductor de audio institucional.

---

##  Estructura de Archivos

Así se organiza el proyecto dentro de la carpeta principal:
```text
/
├── index.html             # Estructura principal de la web
├── style.css              # Estilos, colores y animaciones visuales
├── script.js              # Lógica de JavaScript (menú hamburguesa y audio)
├── background-video.mp4   # Vídeo de fondo general
<div></div>
├── punto-azul.webm        # Vídeo circular de la portada
├── punto-azul-cancion.mp3 # Archivo de audio del himno institucional
└── img/                   # Carpeta de recursos gráficos
    ├── quienes-somos.png
    ├── origen-punto-azul.png
    ├── actividades-diarias.png
    ├── formacion-equipo.png
    └── nuestra-historia.png