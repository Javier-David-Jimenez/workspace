const fetchArticle = require('./ejercicio116.js');

global.document = {
  body: {
    innerHTML: '',
  },
  getElementById: function (id) {
    if (!this[id]) {
      this[id] = {
        innerHTML: '',
        addEventListener: jest.fn(),
      };
    }
    return this[id];
  },
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
    json: () =>
      Promise.resolve({
        userId: 1,
        id: 1,
        title: 'Mock Title',
        body: 'Mock body content',
      }),
  })
);

describe('fetchArticle', () => {
  it('logs the status of the request and updates the DOM with article data', async () => {
    document.body.innerHTML = '<div id="article"></div>';
    document.getElementById('fetchButton').addEventListener('click', fetchArticle);

    await fetchArticle();
    
    expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');
    expect(document.getElementById('article').innerHTML).toContain('Mock Title');
    expect(document.getElementById('article').innerHTML).toContain('Mock body content');
  });
});
