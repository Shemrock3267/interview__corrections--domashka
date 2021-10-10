//1. Data types

// Primitives
const str = 'string' // string
const num = 1 // number
const bool = true || false // boolean; this one will return "true"
const undef = undefined // undefined
const isEqualNull = null // null (hollow object yet to be assigned with some values to it)
const bigInt = 1234567n // bigInt, must end with "n" after digits. !!!NEVER use Number and BigInt together, losing precision!!!
const keySym = Symbol('dz') // symbol, doesn't need keyword new

//  Reference types

const myObj = {test: 'data', } // Object; where property test is key and string 'data' is value of that property
const myArr = ['string', 1, true, undef, isEqualNull, bigInt, keySym.description] // Array, can store any data types; each new item inside array stored under it's own index, starting from 0;



//2. Comparison of Objects 
const check1 = {b: 2} == {b:2 } // => false, comparison by reference (variable will be reserved a unique place in memory)
const check2 = {b: 2} === {b:2 } // => false, comparison by reference (variable will be reserved a unique place in memory)
console.log(check1 == check2) // => true, comparison by values, console.log(check1 === check2) => true as well

// DON'T use JSON.stringify() to compare objects, because order of keys can be different, example below
// console.log(JSON.stringify({a: 1, b: 2}) === JSON.stringify({b: 2, a: 1}))
// instead use 
// 1) https://lodash.com/docs/4.17.15#isEqual  
// 2) https://nodejs.org/api/util.html#util_util_isdeepstrictequal_val1_val2   (check deepStrictEqual.js file)
// 
// SOLUTION is in deepStrictEqual.js file
//


//3. Functional scope (stress overtook me on this question, dunno why)
const outerVar = 'i\'m globally available';
// NOTE: no checking for what data type is being passed implemented, expecting two strings
const person = (fName, lName) => {
  const fullName= ()=>{
    return `${fName} ${lName}`
  }
  return fullName();
}

console.log(fullName) // => error this variable isn't defined, because fullName variable is available only inside that function.
console.log(outerVar) // => 'i'm globally available'



//4. Currying
// same function with additional parameter (nested functions)

// basic currying
function person(fName){
  return function(mName){ // mName => middle name
    return function(lName){
      return `${fName} ${mName} ${lName}`
    }
  }
}
person('Patrick ')('Lavon ')('Mahomes') 

// modern way
const person = fName => mName => lName=> `${fName} ${mName} ${lName}`
person('Patrick ')('Lavon ')('Mahomes') 



//5. Event loop => i told about this video https://www.youtube.com/watch?v=8aGhZQkoFbQ

// JS => 1 thread => 1 call stack => 1 thing at a time (1 piece of a code at a time)
// Call stack: push something into stack, pull something off top of the stack

// CALL STACK lives in V8 (JS runtime)
// WEBapis live in browser


// blowing a stack => function that calls itself infite number of times function boom(){return boom()}
// maximum call stack size exceeded 


// fake sync calls example
var first = getData('/first/data')
var second = getData('/second/data')
var third = getData('/third/data').

console.log(first)
console.log(second)
console.log(third)

// call STACK: main() => first() => second() =>  third() => 
// => console.log(first) => console.log(second) => console.log(third) => cleared


// about setTimeout() and callbacks and EVENT LOOP
// setTimeout() and other stuff like xhr requests are part of WEBapi
// if setTimeout() happens while STACK isn't full and it completes the result of it pushes into TASK QUEUE
// EVENT loop watches: if STACK is empty it pushes first thing from TASK QUEUE into the STACK

// if setTimeout(function deferReturn(){console.log( 'defer this return until stack is cleared');}, 0);

// that second parameter is minimum time of execution, paste this code into console and run
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)
setTimeout(function(){console.log('yo')}, 1500)

// there is also a render queue, which executes render only if STACK is empty
// by doing asyncronous functions we let browser to rerender content while STACK empties
// between single calls of CALLBACK QUEUE


//6. delay() fucntion using Promise & setTimeout()
function delay(time){
  return new Promise ((resolve,reject)=> {
    if(typeof time === 'number'){ setTimeout(()=>resolve(time/1000),time)}
    else {throw new Error(`WRONG TYPE: provided value is ${isNaN(time) ? time  : typeof time}`)}
  })
}

delay(5000).then((result)=> console.log(`promise fulfilled after ${result} seconds passed`)).catch(error => console.log(error.message))

