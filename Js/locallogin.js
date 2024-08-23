      // Capturar el evento de envío del formulario
      document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores de los inputs
        let usuario = document.getElementById('usuarioInput').value;
        let contrasena = document.getElementById('contrasenaInput').value;

        // Obtener la sesión actual del localStorage como una cadena de texto
        let sesion = localStorage.getItem('sesion') || "";

        // Agregar el usuario y la contraseña a la sesión, separados por un delimitador
        sesion += usuario + "," + contrasena + ",";

        // Guardar la sesión actualizada en el localStorage
        localStorage.setItem('sesion', sesion);

        // Redireccionar al index u otra página
        window.location.href = 'index.html';
      });