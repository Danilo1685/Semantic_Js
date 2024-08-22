// agregarCarrito.js

function agregarAlCarrito(idJuego) {
    fetch('json/juegos.json')
      .then(response => response.json())
      .then(juegos => {
        const juego = juegos.find(j => j.id === idJuego);
        if (juego) {
          // Obtener el carrito actual del localStorage
          let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
          
          // Agregar el juego al carrito
          carrito.push(juego);
  
          // Guardar el carrito actualizado en el localStorage
          localStorage.setItem('carrito', JSON.stringify(carrito));
          
          console.log('Juego agregado:', juego);
        } else {
          console.error('Juego no encontrado');
        }
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }
  
