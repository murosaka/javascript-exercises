const reverseString = function(str) {
    let output = '';
    let len = str.length - 1;
    for (let i = len; i > -1 ; i--) {
        output += str.charAt(i);
    }
    return output;
};


// Do not edit below this line
module.exports = reverseString;
//npm test reverseString.spec.js
