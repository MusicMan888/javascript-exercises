let text = '';
function reverseString (text)
{
  let txtOut = '';
  const myArray = text.split('');
  let i = myArray.length;

  i = i - 1;
    for (i; i >-1; i--)
    {
    
      txtOut += myArray[i];
    }

    return txtOut;
  
}

// Do not edit below this line
module.exports = reverseString;
