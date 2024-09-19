// Tail Recursion :- recursive statement is at last of the function :- executions in notmla flow - execution flow followed by function call
// Head Recursion :- recursive statement is at first of the function :- executes in reverse flow - all function calls then execution.
// Linear Recursion  :- Function contains only one recursion
// Tree Recursion :- Function contain more than one recursion

// Resursion is a phenomenon where function calls itself infinitely untill a specific condition is met(Base condition)
// Recursion tree : in the series of function calls functions will be put in stack and executed last in first order and output is returned to the next function in the stack


function printName(i,n){
    if(i>n) return
    console.log("Prem")
    printName(i+1,n)
}

printName(1,7)

// If we need to have variables like count it should be in variables
// There is no place for global variables to keep in recursion it should at arguments only.

function printOneToN(i,n){
    if(i > n) return
    console.log(i);
    printOneToN(i+1,n)
}

printOneToN(1,10)

function printNToOne(n){
    if(n < 1) return
    console.log(n)
    printNToOne(n-1)
}

function printNToOneHead(i,n){
    
    if(i > n) return;
    printNToOneHead(i+1,n)
    console.log(i)
    
}

printNToOneHead(1,10)

printNToOne(10)



// Sum of first N numbers
// Consider arguments like initializing variables
// Write only recursion part remaining wrap in another function

// When there is any series of execution required till the end we can use recursion there.

function sumOfN(i,n){
    if(i == n) return n;
    return i + sumOfN(i+1,n);
    
}

console.log(sumOfN(1,10))

function fact(n){
    if(n == 0) return 1;
    if(n == 1) return 1;
    return n * fact(n-1)
}

console.log(fact(5))

function reverseArray(){
    const arr = [1,2,3,4,5,6]
    const a1 = rev(arr,0,arr.length - 1)
    console.log(arr,a1)
    
}


function reverseArrayRecursive(arr,start,end){
    if(start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        reverseArrayRecursive(arr,start+1,end-1)
    }
    return arr
    
}

// We can create a variable in arguments and we can return that varibale with values.
// In the below example the result at the base condition will be forwared to all the functions and finally it becomes result of the function.

function rev(arr,start,end, result = []){
    if(end < 0){
        return result
    }
    result[start] = arr[end]
    return rev(arr,start+1,end-1, result)
    
}

reverseArray();

// tree recursion

function finonacci(n){
    if(n <= 1){
        return n
    }
    return finonacci(n-1) + finonacci(n-2)
}

console.log(finonacci(6))


