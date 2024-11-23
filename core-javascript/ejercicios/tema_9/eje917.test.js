const {capitalizeLastName} = require('./eje917');

describe('capitalizeLastName', () => {
    test('should capitalize the first letter of the first name and uppercase the last name', () => {
        expect(capitalizeLastName('marisa tomei')).toBe('Marisa TOMEI');
    });

    test('should handle names with different cases in the input', () => {
        expect(capitalizeLastName('mARisa ToMeI')).toBe('Marisa TOMEI');
    });

    test('should throw a TypeError if the input is not a string', () => {
        expect(() => capitalizeLastName(123)).toThrow(TypeError);
    });

    test('should throw an Error if there are not exactly two words', () => {
        expect(() => capitalizeLastName('marisa')).toThrow(Error);
        expect(() => capitalizeLastName('marisa tomei junior')).toThrow(Error);
    });

});
