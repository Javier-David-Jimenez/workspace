// ejercicio118.test.js
const { fetchAllTitles, fetchAllArticles } = require('./ejercicio118');

const mockResponse = [
  { title: 'Title 1', body: 'Content 1' },
  { title: 'Title 2', body: 'Content 2' },
];

// Simular el DOM
const setUpDom = () => {
  global.document = {
    getElementById: jest.fn((id) => {
      const element = {
        innerHTML: '',
        textContent: '',
        appendChild: jest.fn(),
        querySelector: jest.fn(() => ({ children: [] })),
      };
      return element;
    }),
  };
  
  global.console = {
    error: jest.fn(), // Simular console.error
  };

  // Aquí puedes agregar otros elementos que necesites simular
};

beforeEach(() => {
  setUpDom();

  // Simular la función fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks(); // Restablecer mocks después de cada prueba
});

describe('fetchAllTitles', () => {
  test('debería hacer una solicitud fetch para obtener todos los artículos y mostrar los títulos', async () => {
    await fetchAllTitles();
    
    const titleListDiv = document.getElementById('titleList');
    expect(titleListDiv.innerHTML).toContain('Title 1');
    expect(titleListDiv.innerHTML).toContain('Title 2');
  });

  test('debería mostrar un mensaje de error si la solicitud falla', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('Network Error'))
    );

    await fetchAllTitles();

    const errorDiv = document.getElementById('error');
    expect(errorDiv.textContent).toBe('Error al obtener los títulos. Intenta de nuevo.');
  });
});

describe('fetchAllArticles', () => {
  test('debería hacer una solicitud fetch para obtener todos los artículos y mostrar el conteo y contenido en la tabla', async () => {
    await fetchAllArticles();
    
    const articleCountDiv = document.getElementById('articleCount');
    expect(articleCountDiv.textContent).toBe('Total de artículos: 2');

    const articlesTableBody = document.getElementById('articlesTable').querySelector('tbody');
    expect(articlesTableBody.children.length).toBe(2); // Verifica que se han añadido dos artículos
    expect(articlesTableBody.children[0].innerHTML).toContain('Title 1');
    expect(articlesTableBody.children[1].innerHTML).toContain('Title 2');
  });

  test('debería mostrar un mensaje de error si la solicitud falla', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('Network Error'))
    );

    await fetchAllArticles();

    const errorDiv = document.getElementById('error');
    expect(errorDiv.textContent).toBe('Error al obtener los artículos. Intenta de nuevo.');
  });
});

