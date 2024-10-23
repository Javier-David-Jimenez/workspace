// Función para realizar la petición y obtener todos los títulos
function fetchAllTitles() {
    const titleListDiv = document.getElementById('titleList');
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = ''; // Limpiar mensajes de error previos
    titleListDiv.textContent = ''; // Limpiar lista de títulos anterior
  
    // Realizar la petición fetch para obtener todos los artículos
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Verificamos si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }
  
        // Convertimos la respuesta a JSON
        return response.json();
      })
      .then(data => {
        // Mostrar los títulos de los artículos
        const titles = data.map(article => article.title);
        titleListDiv.innerHTML = `<h3>Títulos de los Artículos:</h3><ul>${titles.map(title => `<li>${title}</li>`).join('')}</ul>`;
      })
      .catch(error => {
        // En caso de error, lo mostramos en el div de errores
        console.error('Error en la petición:', error);
        errorDiv.textContent = 'Error al obtener los títulos. Intenta de nuevo.';
      });
  }
  
  // Función para realizar la petición y obtener todos los artículos
  function fetchAllArticles() {
    const errorDiv = document.getElementById('error');
    const articleCountDiv = document.getElementById('articleCount');
    const articlesTableBody = document.getElementById('articlesTable').querySelector('tbody');
    
    errorDiv.textContent = ''; // Limpiar mensajes de error previos
    articleCountDiv.textContent = ''; // Limpiar conteo anterior
    articlesTableBody.innerHTML = ''; // Limpiar tabla anterior
  
    // Realizar la petición fetch para obtener todos los artículos
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Verificamos si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }
  
        // Convertimos la respuesta a JSON
        return response.json();
      })
      .then(data => {
        // Mostrar el conteo de artículos
        const articleCount = data.length;
        articleCountDiv.textContent = `Total de artículos: ${articleCount}`;
  
        // Llenar la tabla con los títulos y el contenido
        data.forEach(article => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${article.title}</td>
            <td>${article.body}</td>
          `;
          articlesTableBody.appendChild(row);
        });
      })
      .catch(error => {
        // En caso de error, lo mostramos en el div de errores
        console.error('Error en la petición:', error);
        errorDiv.textContent = 'Error al obtener los artículos. Intenta de nuevo.';
      });
  }
  
  // Asociamos los eventos a los botones
  document.getElementById('fetchTitlesButton').addEventListener('click', fetchAllTitles);
  document.getElementById('fetchAllButton').addEventListener('click', fetchAllArticles);
  