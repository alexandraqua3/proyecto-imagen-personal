# Proyecto de Imagen Personal — IE General Santander

Este proyecto es una plataforma web desarrollada como **Proyecto de Grado de la Técnica en Sistemas Teleinformáticos** en articulación con el **SENA** (Servicio Nacional de Aprendizaje) para la **Institución Educativa General Santander**.

## 📌 Propósito del Proyecto
El objetivo principal del sitio web es orientar a los estudiantes de la institución educativa en la correcta aplicación de la presentación personal y el uso adecuado de los uniformes escolares, de acuerdo con el **Artículo 81** del Manual de Convivencia institucional.

Bajo el lema institucional:
> **"Tu imagen habla por ti"** (o *"Tu imagen habla por ti en el colegio"*)

Buscamos acompañar a la comunidad educativa a comprender que la pulcritud, el decoro y la buena presentación personal son reflejo del respeto, la disciplina y la identidad del estudiante colegianista.

---

## 🛠️ Estructura del Sitio Web
El sitio web consta de las siguientes páginas:
- **`index.html` (Inicio):** Presentación del proyecto y desglose del Artículo 81 sobre los uniformes de diario (hombres/mujeres), gala y educación física.
- **`sobre-mi.html` (Sobre Nosotros):** Información del equipo de 4 estudiantes especialistas encargados del proyecto.
- **`uniforme.html` (Nuestro Uniforme):** Enfoque detallado en tres áreas:
  1. Uso Correcto del Uniforme
  2. Presentación Personal (pulcritud, accesorios, cabello)
  3. Buenas Prácticas del Estudiante Ejemplar
- **`galeria.html` (Galería):** Muestra visual de los uniformes y las actividades realizadas.
- **`contacto.html` (Contacto):** Información para contactar al equipo vía redes sociales (Instagram).

---

## 🎨 Diseño y Estilos
- **Base Visual:** Tema minimalista con tonos rosa, blanco y oscuro, diseñado para una carga limpia y una navegación intuitiva.
- **Interactividad:** Cuenta con micro-animaciones dinámicas en tarjetas y perfiles para una experiencia de usuario agradable y moderna usando java script.

---

## 🔍 Explicación del código añadido (para personas sin conocimientos previos)
En el archivo JavaScript principal se agregaron varios bloques que hacen que la página se sienta más viva y moderna. Todo funciona con eventos del navegador y con pequeños cambios visuales.

### 1. Fondo interactivo
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const blobs = document.createElement('div');
    blobs.className = 'background-blobs';
    document.body.prepend(blobs);
});
```
Este bloque se ejecuta cuando la página termina de cargarse. Crea un contenedor llamado `background-blobs` y lo coloca al inicio del cuerpo de la página.

**Explicación sencilla:**
- `DOMContentLoaded` significa: “cuando la página ya está lista”.
- `document.createElement('div')` crea un elemento HTML nuevo.
- `document.body.prepend(blobs)` lo inserta en la parte superior de la página.

Esto permite que el fondo tenga elementos decorativos o formas animadas detrás del contenido.

### 2. Seguimiento del mouse
```javascript
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        const x = `${(e.clientX / window.innerWidth) * 100}%`;
        const y = `${(e.clientY / window.innerHeight) * 100}%`;
        document.body.style.setProperty('--mouse-x', x);
        document.body.style.setProperty('--mouse-y', y);
```
Este código detecta cada movimiento del cursor del mouse. Luego calcula dónde está la persona en la pantalla y guarda esos valores como variables CSS.

**Explicación sencilla:**
- `mousemove` es un evento que ocurre cuando el usuario mueve el mouse.
- `e.clientX` y `e.clientY` indican la posición exacta del cursor.
- `window.innerWidth` y `window.innerHeight` representan el tamaño de la ventana.
- Con eso, el programa sabe en qué porcentaje de la pantalla está el cursor.

**¿Para qué sirve?**
Porque así el diseño puede reaccionar al movimiento del mouse, por ejemplo para mover luces, fondos o efectos visuales.

### 3. Partículas o destellos al pasar el mouse
```javascript
function createSpark(x, y) {
    const spark = document.createElement('div');
    spark.className = 'cursor-spark';
    spark.style.left = (x - 3) + 'px';
    spark.style.top = (y - 3) + 'px';

    spark.style.backgroundColor = Math.random() > 0.5 ? 'var(--spark-neon)' : 'var(--spark-rose)';
    document.body.appendChild(spark);

    spark.style.transform = `translate(${(Math.random() - 0.5) * 80}px, ${(Math.random() - 0.5) * 80}px) scale(0)`;
    spark.style.opacity = '0';

    setTimeout(() => {
        spark.remove();
    }, 600);
}
```
Este bloque crea pequeñas partículas cuando el usuario mueve el mouse.

**Explicación sencilla:**
- `document.createElement('div')` crea un punto o brillo visual.
- `Math.random()` elige un color al azar entre dos opciones.
- `translate(...)` mueve la partícula ligeramente en una dirección aleatoria.
- `scale(0)` hace que se haga más pequeña hasta desaparecer.
- `setTimeout(..., 600)` elimina la partícula después de 600 milisegundos.

**Resultado:**
Se ve como pequeñas chispas o destellos que siguen al cursor.

### 4. Efecto de elevación en tarjetas
```javascript
document.querySelectorAll('.card').forEach(c => {
    if (!c.style.transition) c.style.transition = 'transform .22s ease';
    c.addEventListener('mouseenter', () => c.style.transform = 'translateY(-6px)');
    c.addEventListener('mouseleave', () => c.style.transform = 'translateY(0)');
});
```
Este bloque busca todas las tarjetas del sitio (`.card`) y les agrega una animación cuando el mouse entra o sale de ellas.

**Explicación sencilla:**
- `querySelectorAll('.card')` selecciona todas las tarjetas.
- `forEach` recorre cada una.
- `mouseenter` ocurre cuando el mouse entra a la tarjeta.
- `mouseleave` ocurre cuando sale.

**Resultado:**
Las tarjetas se levantan ligeramente para dar sensación de interacción y modernidad.

### 5. Animación de dibujos decorativos
```javascript
document.querySelectorAll('.doodle').forEach((d, i) => {
    d.style.animationDelay = (i * 0.6) + 's';
});
```
Aquí se asigna un retraso distinto a cada elemento decorativo llamado `.doodle`.

**Explicación sencilla:**
- Cada dibujo comienza su animación con un tiempo diferente.
- Eso hace que los elementos se muevan con un efecto más natural y menos rígido.

### 6. Posiciones aleatorias del fondo decorativo
```javascript
const bgDoodles = document.querySelectorAll('.background-doodle-pattern .bg-doodle');
if (bgDoodles.length) {
    bgDoodles.forEach(d => {
        const x = 10 + Math.random() * 80;
        const y = 10 + Math.random() * 70;
        const rotation = -24 + Math.random() * 48;
        d.style.left = `${x}%`;
        d.style.top = `${y}%`;
        d.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
        d.style.opacity = `${0.48 + Math.random() * 0.34}`;
    });
}
```
Esta parte coloca los elementos decorativos del fondo en posiciones aleatorias.

**Explicación sencilla:**
- `Math.random()` genera números aleatorios.
- Con eso, cada dibujo se ubica en un lugar distinto.
- También cambia su rotación y su transparencia.

**Resultado:**
El fondo se ve más orgánico y menos repetitivo.

### 7. Resaltar la página activa en la navegación
```javascript
const links = document.querySelectorAll('.nav-link');
if (links.length) {
    links.forEach(a => {
        try {
            const href = a.getAttribute('href') || '';
            if (location.pathname.endsWith(href) || (location.pathname.endsWith('/') && href.endsWith('index.html'))) {
                a.classList.add('active');
            }
        } catch (e) {}
```
Este bloque revisa cuál página está activa y marca el enlace correspondiente en el menú.

**Explicación sencilla:**
- El navegador compara la página actual con el enlace del menú.
- Si coincide, le agrega la clase `active`.
- Esa clase normalmente cambia el color o estilo del enlace para indicar que es la página donde está el usuario.

### 8. Acordeón de preguntas frecuentes
```javascript
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                    other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    other.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            if (isActive) {
                item.classList.remove('active');
                question.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = null;
            } else {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}
```
Este bloque crea una especie de “acordeón” para las preguntas frecuentes.

**Explicación sencilla:**
- Cuando se da clic en una pregunta, se abre o se cierra la respuesta.
- Si se abre otra pregunta, la anterior se cierra para que solo una quede activa a la vez.
- `maxHeight` sirve para mostrar u ocultar la respuesta con una animación suave.

**Resultado:**
La sección de preguntas frecuentes queda ordenada, fácil de usar y visualmente más agradable.

### 🔹 ¿Qué hace la indentación en estos bloques?
La indentación es muy importante en JavaScript porque ayuda a entender qué instrucciones pertenecen a qué bloque. No es solo estética: organiza el código y permite saber qué se ejecuta dentro de una función, un evento o una condición.

#### Ejemplo 1: bloque dentro de un evento
```javascript
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        const x = `${(e.clientX / window.innerWidth) * 100}%`;
        const y = `${(e.clientY / window.innerHeight) * 100}%`;
        document.body.style.setProperty('--mouse-x', x);
        document.body.style.setProperty('--mouse-y', y);
    });
});
```
Aquí vemos tres niveles:
- `document.addEventListener(...)` es el bloque principal.
- `requestAnimationFrame(...)` está dentro del evento porque está indentado más a la derecha.
- `const x...` y `const y...` están aún más dentro, porque pertenecen a la función que se ejecuta dentro del `requestAnimationFrame`.

Esto significa que:
- primero ocurre el movimiento del mouse,
- luego se ejecuta la animación,
- y por último se calculan las nuevas posiciones del cursor.

#### Ejemplo 2: bloque dentro de una condición
```javascript
const bgDoodles = document.querySelectorAll('.background-doodle-pattern .bg-doodle');
if (bgDoodles.length) {
    bgDoodles.forEach(d => {
        const x = 10 + Math.random() * 80;
        const y = 10 + Math.random() * 70;
        d.style.left = `${x}%`;
        d.style.top = `${y}%`;
    });
}
```
La indentación aquí indica que:
- `if (bgDoodles.length)` es la condición principal.
- Si hay elementos encontrados, entonces se ejecuta el bloque interior.
- `forEach` está dentro del `if`, porque solo debe ejecutarse si existen dibujos de fondo.

#### Ejemplo 3: bloque dentro de una función
```javascript
function createSpark(x, y) {
    const spark = document.createElement('div');
    spark.className = 'cursor-spark';
    spark.style.left = (x - 3) + 'px';

    setTimeout(() => {
        spark.remove();
    }, 600);
}
```
En este ejemplo:
- `function createSpark(x, y)` inicia la función.
- Las líneas con `const spark...` y `spark.style...` están dentro de la función.
- `setTimeout(...)` también está dentro de la función, pero más adentro porque forma otro bloque.

Esto nos ayuda a entender que la partícula se crea dentro de la función y luego se elimina después de un tiempo.

#### Ejemplo 4: varios elementos dentro de un mismo bloque
```javascript
document.querySelectorAll('.card').forEach(c => {
    if (!c.style.transition) c.style.transition = 'transform .22s ease';
    c.addEventListener('mouseenter', () => c.style.transform = 'translateY(-6px)');
    c.addEventListener('mouseleave', () => c.style.transform = 'translateY(0)');
});
```
La indentación muestra que todas estas acciones pertenecen a cada tarjeta individual:
- primero se revisa si tiene transición,
- luego se agrega el evento de entrar al mouse,
- luego se agrega el evento de salir.

### ✅ En conclusión
La indentación ayuda a leer el código como si fuera un árbol:
- bloque principal,
- bloque dentro de otro,
- instrucciones que dependen de una condición,
- y funciones que ejecutan tareas específicas.

Sin la indentación, el código sería más difícil de entender, porque no se vería claramente qué parte pertenece a qué acción.

---

## ✅ En resumen
El código añadido no cambia la información del proyecto, sino que mejora la experiencia visual y la interacción con el usuario. Gracias a estos bloques:
- la página se siente más dinámica,
- el fondo tiene movimiento,
- el mouse genera pequeños efectos,
- las tarjetas reaccionan al pasar el cursor,
- la navegación marca la página actual,
- y las preguntas frecuentes se pueden abrir y cerrar fácilmente.

Todo esto hace que el sitio web sea más moderno, atractivo y fácil de usar para la comunidad educativa.

---

## 🎓 Créditos
Desarrollado por estudiantes de la Técnica en Sistemas Teleinformáticos del SENA, en colaboración y articulación con la Institución Educativa General Santander, 2026.
