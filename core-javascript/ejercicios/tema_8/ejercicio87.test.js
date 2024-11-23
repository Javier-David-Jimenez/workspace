const StringTransformer = require('./ejercicio87.js'); // Asegúrate de que la ruta sea correcta

describe('StringTransformer', () => {

  let transformer = StringTransformer('Divide esta frase');
 
  test('should convert string to an array of characters', () => {
    expect(transformer.toCharArray()).toEqual([
      'D', 'i', 'v', 'i', 'd', 'e', ' ', 'e', 's', 't', 'a', ' ', 'f', 'r', 'a', 's', 'e'
    ]);
  });

  test('should shuffle the characters of the string', () => {
    const shuffled = transformer.shuffleChars();
    expect(shuffled).not.toBe('Divide esta frase');  // Verificamos que esté mezclado
    expect(shuffled.length).toBe('Divide esta frase'.length);  // Mismo número de caracteres
  });

  test('should reverse the characters in the string', () => {
    expect(transformer.reverseChars()).toBe('esarf atse ediviD');
  });

  test('should remove vowels from the string', () => {
    expect(transformer.removeVowels()).toBe('Dvd st frs');
  });

  test('should remove consonants from the string', () => {
    expect(transformer.removeConsonants()).toBe('iie ea ae');
  });

  test('should split the string into an array of words', () => {
    expect(transformer.toWordArray()).toEqual(['Divide', 'esta', 'frase']);
  });

  test('should reverse the order of the words in the string', () => {
    expect(transformer.reverseWords()).toBe('frase esta Divide');
  });
});
