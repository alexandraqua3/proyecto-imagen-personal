/* =========================================
   MAIN.JS - Lógica Global del Sitio
   - Navegación activa automática
   - Utilidades comunes
   ========================================= */

// Activar enlace de navegación según la página actual
document.addEventListener('DOMContentLoaded', function() {
    highlightActiveNavLink();
});

/**
 * Marca automáticamente el enlace de navegación activo
 * según la URL actual de la página
 */
function highlightActiveNavLink() {
    const currentPage = getCurrentPageName();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('data-page');

        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

/**
 * Obtiene el nombre de la página actual basado en el nombre del archivo
 * Retorna: 'inicio', 'sobre-mi', 'servicios', 'contacto', etc.
 */
function getCurrentPageName() {
    const currentFile = window.location.pathname.split('/').pop();
    
    if (currentFile === '' || currentFile === 'index.html') {
        return 'inicio';
    }
    
    // Elimina .html del nombre de archivo
    return currentFile.replace('.html', '');
}

/**
 * Función auxiliar para animaciones suaves
 * Uso: smoothScroll('#elemento-id')
 */
function smoothScroll(elementSelector) {
    const element = document.querySelector(elementSelector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Validación básica de email
 */
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

/**
 * Función para mostrar notificaciones
 */
function showNotification(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
}

// Exportar funciones para uso en módulos específicos
window.appUtils = {
    smoothScroll,
    isValidEmail,
    showNotification,
    getCurrentPageName
};