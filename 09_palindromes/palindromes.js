const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z]+/g, '');
    let strPal = '';
    for (let i = str.length - 1; i >=0; i--) {
      strPal += str[i];
    }
    if (str === strPal) {
      return true
    }
    else {  
      return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
