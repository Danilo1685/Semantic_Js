// Obtener los datos de juegos.json
async function obtenerJuegos() {
    const response = await fetch('juegos.json');  // Ajusta la ruta si es necesario
    if (!response.ok) {
        throw new Error('Error al cargar juegos.json');
    }
    return response.json();
}

// Función para agregar un juego al carrito
async function agregarAlCarrito(idJuego) {
    try {
        const juegos = await obtenerJuegos();  // Obtener los juegos desde juegos.json
        const juegoSeleccionado = juegos.find(juego => juego.id === idJuego);  // Buscar el juego por ID

        if (juegoSeleccionado) {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];  // Obtener carrito del localStorage
            carrito.push(juegoSeleccionado);  // Agregar juego al carrito
            localStorage.setItem('carrito', JSON.stringify(carrito));  // Guardar carrito en localStorage
        }
    } catch (error) {
        console.error('Error al agregar al carrito:', error);
    }
}

// Función para mostrar los artículos del carrito
function mostrarCarrito() {
    const containerCarrito = document.querySelector('#container_carrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];  // Obtener carrito del localStorage

    carrito.forEach(juego => {
        // Crear la estructura HTML para el artículo en el carrito
        const article = document.createElement('article');
        article.setAttribute('id', 'trading_carrito');

        article.innerHTML = `
            <div id ="container_carrito">
                <!-- Poster de cada juego -->
                <figure id='poster_carrito'>
                    <img id="img_carrito" src="${juego.imagen}" alt="">
                    <figcaption id="titulo_carrito">
                        <!-- Titulo de la sección -->
                        <a href="${juego.link}"><h1>${juego.titulo}</h1></a>
                        <div id='texto_carrito'><h2>${juego.descripcion}</h2></div>
                        <div id='boton_comprar_carrito'>
                            <button class="ui green button"><h3>Comprar</h3></button>
                            <button class="ui blue button"><h3>Favoritos</h3></button>
                        </div>
                    </figcaption>
                </figure>
            </div>
        `;

        containerCarrito.appendChild(article);  // Agregar el artículo al carrito

        // Crear y agregar el contenedor de borde después del artículo
        const borderContainer = document.createElement('div');
        borderContainer.classList.add('border-container_carrito');
        borderContainer.innerHTML = `
            <svg class="svg-border_carrito" viewBox="0 0 100 10" preserveAspectRatio="none">
                <polyline points="0 1, 60 1, 65 8, 70 8, 100 8" class="border-line_carrito" />
            </svg>
        `;
        containerCarrito.appendChild(borderContainer);  // Agregar el contenedor de borde después del artículo
    });
}

// Cargar el carrito cuando la página del carrito se carga
document.addEventListener('DOMContentLoaded', mostrarCarrito);

