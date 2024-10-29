/* eslint-env browser */
const { fetchArticle } = require('./ejercicio117');

describe('fetchArticle', () => {
    let articleIdInput;
    let articleDiv;
    let errorDiv;

    beforeEach(() => {
        articleIdInput = { value: '1' };
        articleDiv = { innerHTML: '' };
        errorDiv = { textContent: '' };

        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({
                    userId: 1,
                    id: 1,
                    title: 'Mock Title',
                    body: 'Mock body content',
                }),
            })
        );
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('debería obtener y mostrar un artículo correctamente', async () => {
        await fetchArticle(articleIdInput, articleDiv, errorDiv);

        expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');
        expect(articleDiv.innerHTML).toContain('Mock Title');
        expect(articleDiv.innerHTML).toContain('Mock body content');
        expect(errorDiv.textContent).toBe('');
    });

    it('debería mostrar un mensaje de error si el artículo no es válido', async () => {
        articleIdInput.value = ''; 
        await fetchArticle(articleIdInput, articleDiv, errorDiv);

        expect(errorDiv.textContent).toBe('Por favor, introduce un número válido de artículo.');
    });

    it('debería manejar errores de fetch correctamente', async () => {
        global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Network Error')));

        await fetchArticle(articleIdInput, articleDiv, errorDiv);

        expect(errorDiv.textContent).toBe('Error al obtener el artículo. Intenta de nuevo.');
    });

    it('debería manejar respuestas no exitosas del servidor', async () => {
        global.fetch.mockImplementationOnce(() => Promise.resolve({ ok: false, status: 404 }));

        await fetchArticle(articleIdInput, articleDiv, errorDiv);

        expect(errorDiv.textContent).toBe('Error al obtener el artículo. Intenta de nuevo.');
    });
});
