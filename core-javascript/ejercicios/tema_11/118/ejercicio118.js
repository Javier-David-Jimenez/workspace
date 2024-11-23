function fetchAllTitles() {
  const titleListDiv = document.getElementById('titleList');
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = '';
  titleListDiv.textContent = ''; 

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const titles = data.map(article => article.title);
      titleListDiv.innerHTML = `<h3>Títulos de los Artículos:</h3><ul>${titles.map(title => `<li>${title}</li>`).join('')}</ul>`;
    })
    .catch(error => {
      console.error('Error en la petición:', error);
      errorDiv.textContent = 'Error al obtener los títulos. Intenta de nuevo.';
    });
}

function fetchAllArticles() {
  const errorDiv = document.getElementById('error');
  const articleCountDiv = document.getElementById('articleCount');
  const articlesTableBody = document.getElementById('articlesTable').querySelector('tbody');
  
  errorDiv.textContent = ''; 
  articleCountDiv.textContent = ''; 
  articlesTableBody.innerHTML = ''; 

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const articleCount = data.length;
      articleCountDiv.textContent = `Total de artículos: ${articleCount}`;
      data.forEach(article => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${article.title}</td><td>${article.body}</td>`;
        articlesTableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error en la petición:', error);
      errorDiv.textContent = 'Error al obtener los artículos. Intenta de nuevo.';
    });
}

if (typeof document !== 'undefined') {
  document.getElementById('fetchTitlesButton').addEventListener('click', fetchAllTitles);
  document.getElementById('fetchAllButton').addEventListener('click', fetchAllArticles);
}

module.exports = {
  fetchAllTitles,
  fetchAllArticles,
};
