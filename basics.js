// Write a function that takes two numbers (a and b) as argument
//  Sum a and b
// Return the result

const calcSum = (a, b) => {
  return a + b
}
calcSum(1,2)
//****************************** 
const calcSum2 = (a, b) => {
    return a + b
  }
  calcSum2(1,10)
//******************************* 
  const calcSum3 = (a, b) => {
    return a + b
  }
  calcSum3(99,1)

/*
Test cases:
calcSum(1,2) Expected 3
calcSum(1,10) Expected 11
calcSum(99,1) Expected 100
*/

// ========================================

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const strictEquality = (a, b) => {
    if(a == b && typeof a == typeof b)
    console.log(true)
    else
    console.log(false)
}
strictEquality(2,3)
//******************************* 
const strictEquality2 = (a, b) => {
    if(a == b && typeof a == typeof b)
    console.log(true)
    else
    console.log(false)
}
strictEquality2(3,3)
//******************************* 
const strictEquality3 = (a, b) => {
    if(a == b && typeof a == typeof b)
    console.log(true)
    else
    console.log(false)
}
strictEquality3(1,'1')
//******************************* 
const strictEquality4 = (a, b) => {
    if(a == b && typeof a == typeof b)
    console.log(true)
    else
    console.log(false)
}
strictEquality4('10','10')


/*
Test cases:
myFunction(2, 3) Expected false
myFunction(3, 3) Expected true
myFunction(1, '1') Expected false
myFunction('10', '10') Expected true 
*/

// ========================================

// Write a function that takes a value as argument
// Return the type of the value
const getTypeOfValue = (a) => {
  return typeof(a)
}
getTypeOfValue(1)
//******************************* 
const getTypeOfValue2 = (a) => {
    return typeof(a)
  }
  getTypeOfValue(false);   
//******************************* 
  const getTypeOfValue3 = (a) => {
    return typeof(a)
  }
  getTypeOfValue({})
//******************************* 
  const getTypeOfValue4 = (a) => {
    return typeof(a)
  }
  getTypeOfValue(null)
//******************************* 
  const getTypeOfValue5 = (a) => {
    return typeof(a)
  }
  getTypeOfValue('string')
//******************************* 
  const getTypeOfValue6 = (a) => {
    return typeof(a)
  }
  getTypeOfValue(['array'])
/*
Test cases:
myFunction(1) Expected 'number'
myFunction(false) Expected 'boolean'
myFunction({}) Expected 'object'
myFunction(null) Expected 'object'
myFunction('string') Expected 'string'
myFunction(['array']) Expected 'object'
*/

// ========================================

// Write a function that takes a string (a) as argument
// Return the 1st character of the strgin a
// Tip: look up the string prototype function slice() or split()
const getFirstChar = (a) => {
  return a.slice(0, 1)
}
getFirstChar("abcd")
//******************************* 
const getFirstChar2 = (a) => {
  return a.slice(0,1)
}
getFirstChar("zyxbwpl")
//******************************* 
const getFirstChar3 = (a) => {
  return a.slice(0, 1)
}
getFirstChar("gfedcba")

/*
Test Cases:
myFunction('abcd') Expected 'a'
myFunction('zyxbwpl') Expected 'z'
myFunction('gfedcba') Expected 'g'
*/

// ========================================

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
// Tip: look up the string prototype function slice() or split()
const getNthChar = (a, n) => {
  return a.slice(n -1, n)
}
getNthChar('abcd',1)
//******************************* 
const getNthChar2 = (a, n) => {
  return a.slice(n -1, n)
}
getNthChar('zyxbwpl',5)
//******************************* 
const getNthChar3 = (a, n) => {
  return a.slice(n -1, n)
}
getNthChar('gfedcba',3)
/*
Test Cases:
myFunction('abcd',1) Expected 'a'
myFunction('zyxbwpl',5) Expected 'w'
myFunction('gfedcba',3) Expected 'e'
*/

// ========================================

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
// Tip: look up the string prototype function slice() or split()
const extractFirstHalfOfString = (a) => {
  let half = a.length / 2
  return a.slice(0, half)
}
extractFirstHalfOfString('abcdefgh')
//******************************* 
const extractFirstHalfOfString2 = (a) => {
  let half = a.length / 2
  return a.slice(0, half)
}
extractFirstHalfOfString('1234')
//******************************* 
const extractFirstHalfOfString3 = (a) => {
  let half = a.length /2
  return a.slice(0, half)
}
extractFirstHalfOfString('gedcba')

/*
Test Cases:
myFunction('abcdefgh') Expected 'abcd'
myFunction('1234') Expected '12'
myFunction('gedcba') Expected 'ged'
*/

// ========================================

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
const removeLastNChractersOfString = (a) => {
  return a.slice(0, -3)
}
removeLastNChractersOfString('abcdefg')
//******************************* 
const removeLastNChractersOfString2 = (a) => {
  return a.slice(0, -3)
}
removeLastNChractersOfString2('1234')
//******************************* 
const removeLastNChractersOfString3 = (a) => {
  return a.slice(0, -3)
}
removeLastNChractersOfString3('fgedcba')

/*
Test cases:
myFunction('abcdefg') Expected 'abcd'
myFunction('1234') Expected '1'
myFunction('fgedcba') Expected 'fged'
*/

// ========================================

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
// Tip: How does the % operator work?
const checkIfNumberIsEven = (number) => {
  return number % 2 === 0
}
checkIfNumberIsEven(10)
//******************************* 
const checkIfNumberIsEven2 = (number) => {
  return number % 2 === 0
}
checkIfNumberIsEven2(-4)
//******************************* 
const checkIfNumberIsEven3 = (number) => {
  return number % 2 === 0
}
checkIfNumberIsEven3(5)
//******************************* 
const checkIfNumberIsEven4 = (number) => {
  return number % 2 === 0
}
checkIfNumberIsEven4(-111)
/*
Test Cases:
myFunction(10) Expected true
myFunction(-4) Expected true
myFunction(5) Expected false
myFunction(-111) Expected false
*/

// ========================================

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
const getPercentageOfNumber = (a,b) => {
  return (b / 100) * a 
}
getPercentageOfNumber(100,50)
//******************************* 
const getPercentageOfNumber2 = (a,b) => {
  return (b / 100) * a
}
getPercentageOfNumber2(10,1)
//******************************* 
const getPercentageOfNumber3 = (a,b) => {
  return (b / 100) * a
}
getPercentageOfNumber3(500,25)
/*
Test cases:
myFunction(100,50) Expected 50
myFunction(10,1) Expected 0.1
myFunction(500,25) Expected 125
*/

// ========================================

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip:
// - Mind the order
// - Power operator is either Math.pow or **
//   - e.g. 2**2 = 4
const useAllTheOperators = (a, b, c, d, e, f) => {
  let sum = a+b
  let substractC = sum - c
  let multiplyD = substractC * d
  let divideE = multiplyD / e
  let result = Math.pow(divideE, f)
  return result
}
useAllTheOperators(6,5,4,3,2,1)

// það væri líka hægt að gera:
const useAllTheOperators1 = (a,b,c,d,e,f) =>{
  let sum = ((((a + b) - c ) * d ) / e) **f 
    return sum
  }
  useAllTheOperators(2,3,6,4,2,3)
//**************************************************
const useAllTheOperators2 = (a, b, c, d, e, f) => {
  let sum = a+b
  let substractC = sum - c
  let multiplyD = substractC * d
  let divideE = multiplyD / e
  let result = Math.pow(divideE, f)
  return result
}
useAllTheOperators2(6,2,1,4,2,3)
//**************************************************
const useAllTheOperators3 = (a, b, c, d, e, f) => {
  let sum = a+b
  let substractC = sum - c
  let multiplyD = substractC * d
  let divideE = multiplyD / e
  let result = Math.pow(divideE, f)
  return result
}
useAllTheOperators3(2,3,6,4,2,3)
/*
Test cases:
myFunction(6,5,4,3,2,1) Expected 10.5
myFunction(6,2,1,4,2,3) Expected 2744
myFunction(2,3,6,4,2,3) Expected -8
*/

// ========================================