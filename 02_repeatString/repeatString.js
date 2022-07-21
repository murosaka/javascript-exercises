const repeatString = function(str, num) {
    let result = '';
    let i =0;
    while (i < num) {
        result += str;
        i++;       
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
