// Función para realizar la petición a la URL según el número de artículo ingresado
function fetchArticle() {
    // Obtener el número de artículo desde el input
    const articleId = document.getElementById('articleId').value;
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = ''; // Limpiar mensajes de error previos
  
    // Verificar si el número es válido
    if (!articleId || isNaN(articleId) || articleId <= 0) {
      errorDiv.textContent = 'Por favor, introduce un número válido de artículo.';
      return;
    }
  
    // Logueamos el número de artículo seleccionado para verificar
    console.log('Número de artículo solicitado:', articleId);
  
    // Realizar la petición fetch con el número de artículo
    fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
      .then(response => {
        // Verificamos si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }
        // Logueamos el estado de la petición
        console.log('Status de la respuesta:', response.status);
  
        // Convertimos la respuesta a JSON
        return response.json();
      })
      .then(data => {
        // Mostramos el contenido del artículo en la página
        const articleDiv = document.getElementById('article');
        articleDiv.innerHTML = `<h2>Título: ${data.title}</h2>
                                <p>${data.body}</p>`;
        // Logueamos el contenido recibido
        console.log('Contenido del artículo recibido:', data);
      })
      .catch(error => {
        // En caso de error, lo mostramos en el div de errores
        console.error('Error en la petición:', error);
        errorDiv.textContent = 'Error al obtener el artículo. Intenta de nuevo.';
      });
  }
  
  // Asociamos el evento al botón
  document.getElementById('fetchButton').addEventListener('click', fetchArticle);
  