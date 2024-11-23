
function fetchArticle() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
          console.log('Status:', response.status);

          return response.json();
      })
      .then(data => {
          const articleDiv = document.getElementById('article');
          articleDiv.innerHTML = `<h2>Título: ${data.title}</h2>
                                  <p>${data.body}</p>`;
      })
      .catch(error => {
          console.error('Error en la petición:', error);
      });
}

document.getElementById('fetchButton').addEventListener('click', fetchArticle);

module.exports = { 
  fetchArticle,
};
