      function removeFromArray(myArray) 
      {
        if (arguments.length > 1)
        {
          for (let arg = 1; arg < arguments.length; arg++)
          {
            for (let ind = 0; ind < myArray.length; ind++)
            {
              if (myArray[ind] === arguments[arg])
              {
                myArray.splice(ind, 1);
              } 
            }
          }
          return myArray;
        } else
        {
          return myArray;
        }
      }

// Do not edit below this line
module.exports = removeFromArray;
