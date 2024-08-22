document.addEventListener('DOMContentLoaded', function () {
    const juegosEnCarrito = JSON.parse(localStorage.getItem('juegosEnOferta')) || [];

    const carritoSection = document.querySelector('#carrito_section'); // Ajusta el selector según tu HTML

    juegosEnCarrito.forEach(juego => {
        const article = document.createElement('article');
        article.className = 'carrito_juego';
        article.dataset.id = juego.id;

        article.innerHTML = `
            <div id="container_carrito">
                <figure id='poster_carrito'>
                    <img id="img_carrito" src="${juego.imagen}" alt="">
                    <figcaption id="titulo_carrito">
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

        carritoSection.appendChild(article);
    });
});

