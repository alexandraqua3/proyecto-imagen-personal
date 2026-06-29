# 🚀 Proyecto Web: "Mi Estilo, Mi Esencia" - Refactorización Integral

Este proyecto representa una migración completa de una página web de imagen personal y asesoría de estilo desde un CMS (Joomla/Elementor) a un stack moderno basado en **HTML5, CSS3, Vanilla JavaScript y el framework minimalista Bootstrap 5**. El objetivo es mantener la integridad visual y funcional del contenido original, pero mejorando la arquitectura del código, la experiencia de usuario (UX), el rendimiento y la capacidad de mantenimiento futuro.

---

## ✨ Características Principales del Refactor

El proceso de migración se centró en tres pilares fundamentales: Limpieza de Código, Mejora de UX y Estándares Modernos.

### 1. 🧹 Limpieza y Reestructuración de Código

* **Eliminación de Código Muerto**: Se purgaron todos los estilos, scripts y componentes heredados del constructor original (CSS inyectado, estilos de widgets, frameworks desuso).
* **Estructura Modular**: Se implementó una separación lógica clara entre HTML (contenido), CSS (presentación) y JavaScript (interactividad).
* **Optimización de Imágenes**:
  * Implementación de la etiqueta `<picture>` y atributos `srcset` para **carga adaptativa** (Responsive Images).
  * Optimización de logos y banners para web con compresión y formatos modernos (WebP cuando fue posible).
* **Eliminación de Elementos Obsoletos**: Se retiraron las librerías y plugins de terceros innecesarios (Popups, Contadores de Visitas, Efectos de Animación excesivos) para reducir el peso de la página.

### 2. 🎨 Mejora de la Experiencia de Usuario (UX)

* **Navegación Intuitiva**:
  * Se optimizó la barra de navegación para hacerla más limpia y accesible.
  * Mejora del menú desplegable (dropdown) y su comportamiento.
  * Implementación de enlaces internos claros y jerarquía visual.
* **Optimización Mobile-First**:
  * Se corrigieron los breakpoints de Bootstrap para asegurar un comportamiento fluido en dispositivos móviles, tabletas y escritorios.
* **Interacción Moderna**:
  * El formulario de contacto ahora utiliza **AJAX nativo** para enviar mensajes sin recargar la página, proporcionando feedback inmediato al usuario.

### 3. 🛠️ Estándares y Buenas Prácticas

* **Accesibilidad (A11y)**:
  * Mejora de los atributos `alt` en imágenes.
  * Uso correcto de etiquetas semánticas (`<nav>`, `<main>`, `<article>`, `<aside>`).
  * Contraste de colores mejorado.
* **Performance**:
  * Minimización del CSS y JS.
  * Carga lazy de imágenes (atributos `loading="lazy"`) para mejorar el tiempo de carga inicial.
* **Maintenance**:
  * Comentarios claros en el código.
  * Nomenclatura de archivos consistente.

---

## 📂 Estructura del Proyecto Refactorizado

La arquitectura del proyecto ahora sigue un patrón limpio y profesional:

```
mi-estilo-mi-esencia/
│
├── assets/
│   ├── css/
│   │   └── style.css            # Estilos principales (Bootstrap + Custom)
│   ├── js/
│   │   └── main.js            # Script principal (Formulario AJAX + Navegación)
│   ├── images/
│   │   ├── 
│   │   └── ...                  # Imágenes optimizadas
│   ├── images/escudo.jpg        # Logo de la Institución
│   ├── images/IE_general_santander.png # Escudo de la Institución
│   ├── images/IE_General_Santander.webp # Versión WebP optimizada
│   └── images/logo.png          # Logo del proyecto
│
├── index.html                   # Página de inicio (Landing Page)
├── sobre-mi.html                # Perfil y Experiencia
├── servicios.html               # Catálogo de servicios
├── paquetes.html                # Tarifas y paquetes
├── estilo.html                  # Blog/Consejos de estilo
├── calendario.html              # Calendario de eventos/cursos
├── galeria.html                 # Portafolio fotográfico
├── contacto.html                # Formulario de contacto y mapa
├── aviso-privacidad.html        # Documento Legal
└── terminos-condiciones.html   # Documento Legal
```

---

## ⚙️ Tecnologías Utilizadas

* **Core**: HTML5
* **Framework**: [Bootstrap 5](https://getbootstrap.com/)
* **Styling**: CSS3 + [Custom CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
* **Scripting**: JavaScript (Vanilla JS - ES6)
* **Optimización**: WebP (Format), [Lazy Loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)
* **Form Handling**: AJAX (XMLHttpRequest / Fetch API)

---

## 🎯 Próximos Pasos Sugeridos

1. **Análisis Final**: Revisar detenidamente cada página migrada en el navegador (desktop y móvil).
2. **Validación de Enlaces**: Asegurarse de que todos los enlaces internos y externos funcionen correctamente.
3. **SEO Básico**: Implementar meta tags y Open Graph para mejorar el posicionamiento en buscadores.
4. **Integración de Formulario**: Configurar el backend (PHP/Node/etc.) para recibir los correos del formulario de contacto.
5. **Contenido Adicional**: Llenar los espacios reservados en `estilo.html` y `galeria.html` con contenido real.
