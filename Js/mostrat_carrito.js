// mostrarCarrito.js

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContainer = document.getElementById('carrito-container');
  
    // Limpiar el contenedor antes de volver a mostrar los elementos
    carritoContainer.innerHTML = '';

    carrito.forEach((juego, index) => {
        const article = document.createElement('article');
        article.id = "trading_carrito";
    
        article.innerHTML = `
        <div id="container_carrito">
            <figure id='poster_carrito'>
                <img id="img_carrito" src="${juego.imagen}" alt="${juego.titulo}">
                <figcaption id="titulo_carrito">
                    <a href="${juego.link}"><h1>${juego.titulo}</h1></a>
                    <div id='texto_carrito'><h2>${juego.descripcion}</h2></div>
                    <div id='boton_comprar_carrito'>
                        <button class="ui green button"><h3>Comprar</h3></button>
                        <button class="ui blue button"><h3>Favoritos</h3></button>
                        <button class="ui red button eliminar-item" data-index="${index}"><h3>Eliminar</h3></button>
                    </div>
                </figcaption>
            </figure>
        </div>
        
        <div class="border-container_carrito">
            <svg class="svg-border_carrito" viewBox="0 0 100 10" preserveAspectRatio="none">
                <polyline points="0 1, 60 1, 65 8, 70 8, 100 8" class="border-line_carrito" />
            </svg>
        </div>
        `;
    
        carritoContainer.appendChild(article);
    });

    // Agregar evento a todos los botones de eliminar
    const eliminarBotones = document.querySelectorAll('.eliminar-item');
    eliminarBotones.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    });
}

// Función para eliminar un juego del carrito
function eliminarDelCarrito(event) {
    const index = event.target.closest('.eliminar-item').getAttribute('data-index');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Eliminar el juego del carrito
    carrito.splice(index, 1);
    
    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Volver a mostrar el carrito actualizado
    mostrarCarrito();
}

// Llamar a la función cuando la página cargue
document.addEventListener('DOMContentLoaded', mostrarCarrito);
