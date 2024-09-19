// Resursion is a phenomenon where function calls itself infinitely untill a specific condition is met(Base condition)
// Recursion tree : in the series of function calls functions will be put in stack and executed last in first order and output is returned to the next function in the stack
// If we need to have 

function printName(i,n){
    if(i>n) return
    console.log("Prem")
    printName(i+1,n)
}

printName(1,7)
