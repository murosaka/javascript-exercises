const fibonacci = function(a) {
    let arr = [0,1];
    let i = 2;
    if (a < 0) {
        return 'OOPS'
    } else {
    for (i; i <= a; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[a];
    }
};

// Do not edit below this line
module.exports = fibonacci;
