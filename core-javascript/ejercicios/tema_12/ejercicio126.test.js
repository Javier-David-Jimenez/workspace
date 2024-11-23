

const getValuesBetwen = require ('ejercicio126.js');

describe("getValuesBetwen", () => {

    test("debería devolver los valores dentro del rango especificado", () => {
        const numbers = new Set([1, 5, 10, 15, 20, 25, 30, 35, 40]);
        const min = 10;
        const max = 30;
        const result = getValuesBetwen(numbers, min, max);
        expect(result).toEqual(new Set([10, 15, 20, 25, 30]));
    });

    test("debería devolver un Set vacío si no hay valores en el rango", () => {
        const numbers = new Set([1, 2, 3, 4, 5]);
        const min = 10;
        const max = 20;
        const result = getValuesBetwen(numbers, min, max);
        expect(result).toEqual(new Set());
    });

    test("debería incluir los límites del rango si están presentes en el Set", () => {
        const numbers = new Set([5, 10, 15, 20, 25]);
        const min = 10;
        const max = 20;
        const result = getValuesBetwen(numbers, min, max);
        expect(result).toEqual(new Set([10, 15, 20]));
    });

    test("debería manejar un Set vacío y devolver un Set vacío", () => {
        const numbers = new Set();
        const min = 1;
        const max = 10;
        const result = getValuesBetwen(numbers, min, max);
        expect(result).toEqual(new Set());
    });

    test("debería devolver un Set vacío si min es mayor que max", () => {
        const numbers = new Set([1, 5, 10, 15, 20]);
        const min = 20;
        const max = 10;
        const result = getValuesBetwen(numbers, min, max);
        expect(result).toEqual(new Set());
    });

});
