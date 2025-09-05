// Espera a que todo el contenido HTML de la página se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona todos los artículos de noticias
    const articles = document.querySelectorAll('.news-article');

    // Configura el observador de intersección
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el artículo está en la pantalla (intersecting)
            if (entry.isIntersecting) {
                // Añade la clase 'visible' para activar la animación CSS
                entry.target.classList.add('visible');
                
                // Deja de observar este artículo para que la animación no se repita
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // La animación se activa cuando el 10% del artículo es visible
    });

    // Pide al observador que vigile cada uno de los artículos
    articles.forEach(article => {
        observer.observe(article);
    });

});