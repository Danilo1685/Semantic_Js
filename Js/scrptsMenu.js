function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
  
  function loadContent(url) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('main-content').innerHTML = data;
        closeNav(); // Cerrar el menú después de cargar el contenido
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  