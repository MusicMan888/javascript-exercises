let str = '';
let num = 0;

const repeatString = function(str, num) {
  let strOut = ''
  if (num < 0)
  {
    strOut = 'ERROR';
    return strOut;
  } else if (num == 0){
    strOut = '';
    return strOut;
  }
    for (num; num > 0; num--){
      strOut += str;
    }
    return strOut;
  
};

// Do not edit below this line
module.exports = repeatString;
