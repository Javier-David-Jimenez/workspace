const readline = require('readline');
const { getMultiples } = require('./ejercicio77');

// Pruebas para la función getMultiples
describe('getMultiples', () => {
  test('debe devolver un array de múltiplos de 2 con tamaño 4', () => {
    expect(getMultiples(4, 2)).toEqual([2, 4, 6, 8]);
  });

  test('debe devolver un array de múltiplos de 3 con tamaño 5', () => {
    expect(getMultiples(5, 3)).toEqual([3, 6, 9, 12, 15]);
  });

  test('debe devolver un array vacío si el tamaño es 0', () => {
    expect(getMultiples(0, 5)).toEqual([]);
  });

  test('debe devolver un array de múltiplos de 5 con tamaño 3', () => {
    expect(getMultiples(3, 5)).toEqual([5, 10, 15]);
  });

  test('debe devolver un array de múltiplos de 1 con tamaño 10', () => {
    expect(getMultiples(10, 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
