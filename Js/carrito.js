document.addEventListener('DOMContentLoaded', function () {
    fetch('juegos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const articles = document.querySelectorAll('#trading_carrito');

            articles.forEach(article => {
                const id = article.getAttribute('data-id');
                const juego = data.find(item => item.id == id);

                if (juego) {
                    article.querySelector('#img_carrito').src = juego.imagen;
                    article.querySelector('h1').textContent = juego.titulo;
                    article.querySelector('a').href = juego.link;
                    article.querySelector('#texto_carrito h2').textContent = juego.descripcion;
                }
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
