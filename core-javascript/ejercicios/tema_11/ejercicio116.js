// Función para realizar la petición a la URL
function fetchArticle() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        // Logueamos el estado de la petición
        console.log('Status:', response.status);
        
        // Convertimos la respuesta a JSON
        return response.json();
      })
      .then(data => {
        // Mostramos el contenido del artículo en la página
        const articleDiv = document.getElementById('article');
        articleDiv.innerHTML = `<h2>Título: ${data.title}</h2>
                                <p>${data.body}</p>`;
      })
      .catch(error => {
        // En caso de error, lo mostramos en consola
        console.error('Error en la petición:', error);
      });
  }
  
  // Asociamos el evento al botón
  document.getElementById('fetchButton').addEventListener('click', fetchArticle);
  