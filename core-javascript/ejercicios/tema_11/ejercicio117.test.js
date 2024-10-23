// Importamos la función para pruebas
const fetchArticle = require('./ejercicio116.js');

describe('fetchArticle', () => {
  // Mock para simular la función fetch
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          userId: 1,
          id: 1,
          title: 'Mock Title',
          body: 'Mock body content',
        }),
      })
    );
  });

  it('logs the status of the request and updates the DOM with article data', async () => {
    document.body.innerHTML = `
      <input type="number" id="articleId" value="1" />
      <div id="article"></div>
    `; // Simulamos el DOM
    
    await fetchArticle(); // Ejecutamos la función para pruebas

    expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');
    expect(document.getElementById('article').innerHTML).toContain('Mock Title');
    expect(document.getElementById('article').innerHTML).toContain('Mock body content');
  });
});
