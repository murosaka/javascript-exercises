const fibonacci = function(a) {
    let arr = [];
    let i = 2;
    arr[0] = 0;
    arr[1] = 1;
    if (a < 0) 
    {
        return 'OOPS'
    }
    else 
    {
    for (i; i <= a; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[a]
    }
};

// Do not edit below this line
module.exports = fibonacci;
