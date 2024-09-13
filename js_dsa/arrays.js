// Arrays

const array = []
array.push(1) // Add elements to end
array.pop() // remove elements from end

array.unshift(2) // Add elements to start of the array
array.shift() // remove elemennts from the start of the array

// loops
for(let i=0; i<10; i++){
  console.log(i)
}

let i=0;
while(i<2){
  i++;
  console.log(i)
}
// Use while loop as an alternative for recursion


// In-built loops


const arr1 = [1,2,3,4,5]
const mappedArr = arr1.map((element,index,array)=>{
  return element; // return element
})

const filteredArr = arr1.map((element,index,array)=>{
  return element > 0 // return boolean
})

const reducedArr = arr1.reduce((prev,current)=>{
  return prev+current
  // Usefull in cases where initialize some value and adding some value to that, it can be array or any different data structure
},0)
// We can use reduce function in some cases of recursion, for Example flattening an array
// Reduce can be used at places where initializing array and adding elements to the array and computing the final array
// not only in array, it helps in string builder, array builder and object builder.

const someArr = arr1.some((element,index, array)=>{
  return item > 3
  // It is like or gate, if one satisfies there it will be true as output
})

const everyArr = arr1.every((element,index,arrat)=>{
  return item > 4
  // It is like AND gate if all satisfies there it will be true output
})

const findArray = arr1.find((element,index,array)=>{
  return item > 3;
  // return boolean, it returns the first element which satisfies the condition
})

const findIndexArray = arr1.findIndex((element,index,array)=>{
  return item > 3;
  // return type boolean, it returns the first element index which satisfies the given condition
})

// Quick Note : Using normal loops, we can find first occurance and last occurance by toggelling break statement.
let startIndex = 0;
let endIndex = 1;
const slicedArray = arr1.slice(startIndex,endIndex)
// StartIndex -> including
// EndIndex -> Excluding and optional, if not given it will consider to the end.

let replaceIndex = 0;
let deleteCount = 0;
let elementsToAdd = [6,7,8]
arr1.splice(replaceIndex, deleteCount, ...elementsToAdd)
// replaceIndex -> requiried field, it is the index where splice operation starts
// deleteCount -> from the given replace index, number of items will be removed. if 0 not elememts removed, if not given all elements removed starting from the replaceIndex
// elementsToAdd -> optional, adds elements from replaceIndex
// splice modify original array

const toSplicedArray = arr1.splice(replaceIndex, deleteCount, ...elementsToAdd)
// Everything sane as above but it does not modify the original array, returns new array.


// Spread and rest
let array1 = [1,2,3];
let array2 = [3,4,5];
let array3 = [...array1,...array2]

// Rest

const func(...args){
  console.log(args)
  // All arguments are packed as array
}

func(1,2,3,4,5) // It can accept any number of arguments

const concatArray = array1.concat(array2)

let numberTofill = 5
let startIndex = 2
const filledArray = array1.fill(numberTofill, startIndex);
// numberToFill = It will fill the array with the given number


const flattenArray = [1,2,[1,2,[3]],4].flat(2)
// it flatttens the given array and return new array
// in the above 2 is depth

const deppFlattednArray = [1,2,[1,2,[3]],4].flat(Infinity)
// 1. Can be done using Infinity
// 2. can be done using polyfill using recusion
// 3. can be done using reduce and recursion

const reversedArray = array1.reverse();

const sortedArrayASC = array1.sort((a,b)=>{a-b})
const sortedArrayDSC = array1.sort((a,b)=>{b-a})

// the callback computes a - b, if negative it places a,b, if positive it places b,a, if zero not changes

// Creating array from iterable
const formedArray = Array.from(new Set(arr))
 






