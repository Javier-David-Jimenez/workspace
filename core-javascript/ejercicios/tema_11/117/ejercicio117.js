function fetchArticle(articleIdInput, articleDiv, errorDiv) {
  const articleId = articleIdInput.value;
  const errorMessage = ''; 
  errorDiv.textContent = errorMessage;


  if (!articleId || Number.isNaN(Number(articleId)) || Number(articleId) <= 0) {
    errorDiv.textContent = 'Por favor, introduce un número válido de artículo.';
    return; 
  }

  console.log('Número de artículo solicitado:', articleId);

  return fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }

      console.log('Status de la respuesta:', response.status);
      return response.json();
    })
    .then((data) => {

      const articleContent = `<h2>Título: ${data.title}</h2>
                                  <p>${data.body}</p>`;
      articleDiv.innerHTML = articleContent;
      console.log('Contenido del artículo recibido:', data);
    })
    .catch((error) => {
      console.error('Error en la petición:', error);
      errorDiv.textContent = 'Error al obtener el artículo. Intenta de nuevo.';
    });
}

document.getElementById('fetchButton').addEventListener('click', () => {
  fetchArticle(
    document.getElementById('articleId'),
    document.getElementById('article'),
    document.getElementById('error'),
  );
});

module.exports = { fetchArticle };
