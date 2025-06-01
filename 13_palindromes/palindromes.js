const palindromes = function (string) {

const str = string.toLowerCase().replace(/[,.! ]/g, "");
const revertedStr = str.split("").reverse().join("");
return str === revertedStr;
};

// Do not edit below this line
module.exports = palindromes;
