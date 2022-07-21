const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let summary = 0;
	for (let i = 0; i <= arr.length - 1; i++) 
  {
    summary += arr[i];
  }
  return summary;
};

const multiply = function(arr) {
  let summary = 1;
	for (let i = 0; i <= arr.length - 1; i++) 
  {
    summary *= arr[i];
  }
  return summary;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let fac = 1;
  if (a == 0) 
  {
    fac = 1;
  }
  else 
  {
    for (let i = a; i >= 1; i--){
      fac *= i;
    }
  }
	return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
