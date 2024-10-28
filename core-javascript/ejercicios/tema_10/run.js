const { startTimer, updateTimerDisplay } = require('./src/ejercicio109');

// Simulación de DOM para actualizar el temporizador en consola
global.document = {
  getElementById: (id) => ({
    textContent: '00:00',
    set textContent(value) {
      console.log(`Actualización del cronómetro: ${value}`);
    },
  }),
};

// Ejecución de pruebas manuales
console.log('Iniciando prueba de temporizador...');
startTimer(); // Iniciar el temporizador

// Verificación del cronómetro en funcionamiento después de unos segundos
setTimeout(() => {
  console.log('Esperando 3 segundos para verificar el cronómetro...');
  updateTimerDisplay(); // Mostrar el valor actual
}, 3000);

// Detener el temporizador después de 5 segundos y verificar
setTimeout(() => {
  console.log('Deteniendo el temporizador después de 5 segundos.');
  startTimer(); // Detener el temporizador
  updateTimerDisplay(); // Mostrar el valor final
}, 5000);
