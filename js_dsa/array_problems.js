// Question type - 1 Finding largest and smallest numbers in array
const arr = [7,1,2,3,4,3];
const findFirstLargest = (arr) => {
    let largest = Number.NEGATIVE_INFINITY;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
   return largest
}

const findSecondLargest = (arr) => {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    
    for(let i=0; i<arr.length; i++){
        // Assigning previous value of largest to secondLargest
        // Updating largest
        if(arr[i] > largest){
           secondLargest = largest;
           largest = arr[i]
        }
        // Updating second largest
        else if(arr[i] > secondLargest && arr[i] < largest){
            secondLargest = arr[i]
        }
    }
    
    return secondLargest

}


const findThirdLargest = (arr) => {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    let thirdLargest = Number.NEGATIVE_INFINITY;
    
    for(let i=0; i<arr.length; i++){
        // Assigning previous value of largest to secondLargest
        // Assigning previous value of secondLargest to thirdLargest
        // Updating largest
        if(arr[i] > largest){
           thirdLargest = secondLargest
           secondLargest = largest;
           largest = arr[i]
        }
        // Assignnig previous value of secondLargest to thirdLargest
        // Updating secondLargest
        else if(arr[i] < largest && arr[i] > secondLargest){
            thirdLargest = secondLargest
            secondLargest = arr[i]
        }
        // Updating thirdLargest
        else if(arr[i] < secondLargest && arr[i] > thirdLargest){
            thirdLargest == arr[i]
        } 
        
    }
    
    return thirdLargest

}

const findFirstSmallElement = (arr) => {
    let firstSmallest = Number.POSITIVE_INFINITY;
    
    for(let num of arr){
        if(num < firstSmallest){
            firstSmallest = num
        }
    }
    
    return firstSmallest
    
}

const findSecondSmallElement = (arr) => {
    let firstSmallest = Number.POSITIVE_INFINITY;
    let secondSmallest = Number.POSITIVE_INFINITY;
    
    for(let num of arr){
        // Assigning previous value of firstSmallest to secondSmallest
        // Updating smallest
        if(num < firstSmallest){
            secondSmallest = firstSmallest
            firstSmallest = num
        }
        else if(num > firstSmallest && num < secondSmallest){
            secondSmallest = num
        }
        
    }
    
    return secondSmallest
    
}


// Question type - 2 Rotating array by k

// Approach 1 : Slice the array and re shuffle the array parts.
// Approach 2 : Reverse the array and reverse the portions

// rotate right by 3
// 1 2 3 4 5 
// rotate 1 = 5 1 2 3 4
// rotate 2 = 4 5 1 2 3
// rotate 3 = 3 4 5 1 2

// rorate left by 3
// 1 2 3 4 5
// rotate 1 = 2 3 4 5 1
// rotate 2 = 3 4 5 1 2
// rotate 3 = 4 5 1 2 3

// Reverse approach k = 3 for Left
// 1 2 3 4 5 -> 5 4 3 2 1 -> 3 4 5   1 2

// Reverse approach k = 2(5 - 3) for Right
// 1 2 3 4 5 -> 5 4 3 2 1 -> 4 5   1 2 3


const arr = [1,2,3,4,5];

const reverseArray = (arr,start,end) => {
    let i = start;
    let j = end;
    while(start<end){
        let temp = arr[start]
        arr[start++] = arr[end]
        arr[end--] = temp
    }
}


const rotateArrayRightByK = (arr,k)=>{
    const size = arr.length
    // if k greater than size then modulous
    if(k > size){
        k = k % size
    }
    reverseArray(arr,0,size - 1);
    reverseArray(arr,0,k-1);
    reverseArray(arr,k,size - 1);
    return arr;
}

const rotateArrayLeftByK = (arr,k)=>{
    return rotateArrayRightByK(arr,arr.length-k)
}

console.log(rotateArrayRightByK([1,2,3,4,5],3))
console.log(rotateArrayLeftByK([1,2,3,4,5],3))


// General Question type Swapping

const swap = (a,b) => {
    const temp = a;
    a = b;
    b = temp
    console.log(a,b)
}

const swapWithOutUsingThird = (a,b)=>{
    a = a + b;
    b = a - b;
    a = a - b;
    
    console.log(a,b)
}












console.log(findSecondSmallElement(arr))
// For Nth smallest need to use sorting or heaps.

