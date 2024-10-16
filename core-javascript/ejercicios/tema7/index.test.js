
const { mapWithCb } = require('./ejercicio6_2');

describe('mapWithCb', () => {
  test('should call the callback for each element in the array', () => {
    const mockCallback = jest.fn((x) => x * 1.21); //IVA
    const array = [100, 200, 300];

    const result = mapWithCb(array, mockCallback);

    expect(mockCallback).toHaveBeenCalledTimes(3);
    // seleccion directa sobre el array
    expect(mockCallback.mock.calls[0][0]).toBe(100); 
    expect(mockCallback.mock.calls[1][0]).toBe(200); 
    expect(mockCallback.mock.calls[2][0]).toBe(300);

    expect(result).toEqual([121, 242, 363]);
  });
});
