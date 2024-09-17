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

console.log(findSecondSmallElement(arr))
// For Nth smallest need to use sorting or heaps.

