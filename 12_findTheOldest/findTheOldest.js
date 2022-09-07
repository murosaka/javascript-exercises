const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]


const findTheOldest = function(arr) {
  const result = arr.reduce((prevVal, curVal) =>
   (prevVal.yearOfDeath-prevVal.yearOfBirth < 
    curVal.yearOfDeath-curVal.yearOfBirth) ? curVal: prevVal);
  
  return result.name;
};

console.log(findTheOldest(people));
// Do not edit below this line
// module.exports = findTheOldest;
