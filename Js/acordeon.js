$(document).ready(function() {
    $('.ui.accordion').accordion();
  });
  
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
  
  function loadContent(page) {
    // Implementar llamada AJAX para cargar contenido dinámicamente si es necesario
    console.log("Cargando página: " + page);
  }
  