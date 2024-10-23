class StringTransformer {
  constructor(text) {
    this.text = text;
  }

  toCharArray() {
    return this.text.split('');
  }

  shuffleChars() {
    const array = this.toCharArray();
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
  }

  reverseChars() {
    return this.text.split('').reverse().join('');
  }

  removeVowels() {
    return this.text.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, '');
  }

  removeConsonants() {
    return this.text.replace(/[^aeiouáéíóúAEIOUÁÉÍÓÚ\s]/g, '');
  }

  toWordArray() {
    return this.text.split(/\s+/);
  }

  reverseWords() {
    return this.toWordArray().reverse().join(' ');
  }
}

module.exports = {
  StringTransformer,
};

const transformer = new StringTransformer('Divide esta frase');

console.log(transformer.toCharArray());

console.log(transformer.shuffleChars());

console.log(transformer.reverseChars());

console.log(transformer.removeVowels());

console.log(transformer.removeConsonants());

console.log(transformer.toWordArray());

console.log(transformer.reverseWords());
