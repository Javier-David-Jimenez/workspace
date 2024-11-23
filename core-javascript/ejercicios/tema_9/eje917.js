function capitalizeLastName(fullName) {
  try {
    if (typeof fullName !== 'string') {
      throw new TypeError('The argument must be a string');
    }

    const nameParts = fullName.split(' ').filter((part) => part !== '');

    if (nameParts.length !== 2) {
      throw new Error('The input string must consist of exactly two words: a first and a last name');
    }

    const firstName = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1).toLowerCase();
    const lastName = nameParts[1].toUpperCase();

    return `${firstName} ${lastName}`;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

module.exports = {
  capitalizeLastName,
};
