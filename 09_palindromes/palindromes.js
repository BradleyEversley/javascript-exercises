const palindromes = function (string) {
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const curatedString = string.toLowerCase().split('').filter((character) => alphanumeric.includes(character)).join('');

    const reversedString = curatedString.split('').reverse().join('');

    return curatedString === reversedString;
  
};

// Do not edit below this line
module.exports = palindromes;
