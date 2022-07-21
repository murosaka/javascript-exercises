const removeFromArray = function() 
{    
    const args =[...arguments]
    let arr = args[0];
    let arr2 =args.slice(1)
    for (let i = arr.length-1; i >= 0; i--) 
    {
      for (let element of arr2) 
      {
        if (arr[i] === element && 
            typeof arr[i] === typeof element) 
        {
          arr.splice(i,1)
        }
      }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
//npm test removeFromArray.spec.js