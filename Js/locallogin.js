// login.js

// Verificar si el usuario ha iniciado sesión
function verificarSesion() {
    let sesion = localStorage.getItem('sesion');
    if (!sesion) {
        // Redirigir al usuario a la página de inicio de sesión si no ha iniciado sesión
        window.location.href = 'login.html';
    }
}

// Función para manejar el inicio de sesión
function iniciarSesion(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los inputs
    let usuario = document.getElementById('usuarioInput').value;
    let contrasena = document.getElementById('contrasenaInput').value;

    // Validar que los campos no estén vacíos
    if (usuario === "" || contrasena === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Guardar la sesión en localStorage
    localStorage.setItem('sesion', usuario);

    // Redireccionar al index u otra página
    window.location.href = 'index.html';
}

// Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('sesion'); // Eliminar la sesión del localStorage
    window.location.href = 'login.html'; // Redirigir al usuario a la página de inicio de sesión
}

// Capturar el evento de envío del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', iniciarSesion);

// Ejecutar la verificación de sesión en todas las páginas excepto en la de inicio de sesión
if (window.location.pathname !== '/login.html') {
    verificarSesion();
}
