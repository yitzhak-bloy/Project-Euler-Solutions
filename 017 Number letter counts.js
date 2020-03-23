/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

const numberLetterCounts = (limit) => {
  let allLetters = ''
  
  // Converts the number to words
  const changeToWords = (num) => {
    let numberAtWords = ''
    const strOfNum = num.toString()

    if (strOfNum.length === 4) {
      numberAtWords += 'onethousand'
    } else {
      if (strOfNum[strOfNum.length-2] === '1') {  
        switch (strOfNum[strOfNum.length-1]) {
          case '0':
            numberAtWords += 'ten'
            break
          case '1':
            numberAtWords += 'eleven'
            break
          case '2':
            numberAtWords += 'twelve'
            break
          case '3':
            numberAtWords += 'thirteen'
            break
          case '4':
            numberAtWords += 'fourteen'
            break
          case '5':
            numberAtWords += 'fifteen'
            break
          case '6':
            numberAtWords += 'sixteen'
            break
          case '7':
            numberAtWords += 'seventeen'
            break
          case '8':
            numberAtWords += 'eighteen'
            break
          case '9':
            numberAtWords += 'nineteen'
            break;
          default:
            numberAtWords += ''
            break;
        }
      } else {
        switch (strOfNum[strOfNum.length-1]) {
          case '1':
            numberAtWords += 'one'
            break
          case '2':
            numberAtWords += 'two'
            break
          case '3':
            numberAtWords += 'three'
            break
          case '4':
            numberAtWords += 'four'
            break
          case '5':
            numberAtWords += 'five'
            break
          case '6':
            numberAtWords += 'six'
            break
          case '7':
            numberAtWords += 'seven'
            break
          case '8':
            numberAtWords += 'eight'
            break
          case '9':
            numberAtWords += 'nine'
            break;
          default:
            numberAtWords += ''
            break;
        }  
  
        switch (strOfNum[strOfNum.length-2]) {
          case '2':
            numberAtWords += 'twenty'
            break
          case '3':
            numberAtWords += 'thirty'
            break
          case '4':
            numberAtWords += 'forty'
            break
          case '5':
            numberAtWords += 'fifty'
            break
          case '6':
            numberAtWords += 'sixty'
            break
          case '7':
            numberAtWords += 'seventy'
            break
          case '8':
            numberAtWords += 'eighty'
            break
          case '9':
            numberAtWords += 'ninety'
            break;
          default:
            numberAtWords += ''
            break;
        }
      }
  
      switch (strOfNum[strOfNum.length-3]) {
        case '1':
          numberAtWords += 'onehundred'
          break
        case '2':
          numberAtWords += 'twohundred'
          break
        case '3':
          numberAtWords += 'threehundred'
          break
        case '4':
          numberAtWords += 'fourhundred'
          break
        case '5':
          numberAtWords += 'fivehundred'
          break
        case '6':
          numberAtWords += 'sixhundred'
          break
        case '7':
          numberAtWords += 'sevenhundred'
          break
        case '8':
          numberAtWords += 'eighthundred'
          break
        case '9':
          numberAtWords += 'ninehundred'
          break;
        default:
          numberAtWords += ''
          break;
      }  
  
      if (strOfNum[strOfNum.length-3] > 0 && (strOfNum[strOfNum.length-1] > 0 || strOfNum[strOfNum.length-2] > 0)) {  
        numberAtWords += 'and'
      }
    }
    return numberAtWords
  } 
  
  // Moves all numbers up to the given number, and you enter each number into the changeToWords function
  for (let i = 1  ; i <= limit; i++) {
    allLetters += changeToWords(i)
  }

  // Returns the string amount of allLetters
  return allLetters.length;
}

numberLetterCounts(1000);