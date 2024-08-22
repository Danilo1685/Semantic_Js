document.addEventListener('DOMContentLoaded', function () {
    fetch('juegos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Aquí puedes filtrar o seleccionar los juegos que estén en oferta
            const juegosEnOferta = data.filter(juego => juego.enOferta); // Supone que hay un campo 'enOferta' en el JSON
            
            // Guardamos los juegos en oferta en localStorage para acceder a ellos desde el carrito
            localStorage.setItem('juegosEnOferta', JSON.stringify(juegosEnOferta));

            // Aquí podrías actualizar la sección de ofertas en tu HTML si es necesario
            // Ejemplo:
            const ofertasSection = document.querySelector('#ofertas_section'); // Ajusta el selector según tu HTML

            juegosEnOferta.forEach(juego => {
                const article = document.createElement('article');
                article.className = 'oferta_juego';

                article.innerHTML = `
                    <div id="container_ofertas">
                        <figure>
                            <img src="${juego.imagen}" alt="">
                            <figcaption>
                                <a href="${juego.link}"><h1>${juego.titulo}</h1></a>
                                <div><h2>${juego.descripcion}</h2></div>
                                <button class="ui green button agregar-carrito" data-id="${juego.id}">Agregar al Carrito</button>
                            </figcaption>
                        </figure>
                    </div>
                `;

                ofertasSection.appendChild(article);
            });

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
