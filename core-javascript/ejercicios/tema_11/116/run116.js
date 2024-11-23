// run.js

// Simulaciones para el DOM
global.document = {
    getElementById: (id) => {
      if (id === 'timer') {
        return {
          textContent: '00:00',
          set textContent(value) {
            console.log(`Actualización del cronómetro: ${value}`);
          },
        };
      }
      if (id === 'article') {
        return {
          innerHTML: '',
          set innerHTML(value) {
            console.log(`Contenido del artículo actualizado: ${value}`);
          },
        };
      }
      return null;
    },
  };
  
  // Función para probar el temporizador
  let timer;
  let seconds = 0;
  let isRunning = false;
  
  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      timer = setInterval(() => {
        seconds += 1;
        updateTimerDisplay();
      }, 1000);
    } else {
      isRunning = false;
      clearInterval(timer);
    }
  }
  
  function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timer');
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  
  // Simulación de la función fetch para el artículo
  function fetchArticle() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        console.log('Status:', response.status);
        return response.json();
      })
      .then(data => {
        const articleDiv = document.getElementById('article');
        articleDiv.innerHTML = `<h2>Título: ${data.title}</h2><p>${data.body}</p>`;
      })
      .catch(error => {
        console.error('Error en la petición:', error);
      });
  }
  
  // Pruebas del temporizador
  console.log('Iniciando prueba de temporizador...');
  startTimer();
  
  setTimeout(() => {
    console.log('Esperando 3 segundos para verificar el cronómetro...');
    updateTimerDisplay();
  }, 3000);
  
  setTimeout(() => {
    console.log('Deteniendo el temporizador después de 5 segundos.');
    startTimer();
    updateTimerDisplay();
  }, 5000);
  
  // Mock de fetch para Jest
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
  
  // Ejecución manual de la prueba de fetchArticle
  fetchArticle()
    .then(() => {
      console.log('Prueba fetchArticle completada.');
    })
    .catch((error) => {
      console.error('Error en la prueba de fetchArticle:', error);
    });
  
  module.exports = { startTimer, updateTimerDisplay, fetchArticle };
  