const countDigits = (number) => {
    let count = 0;
    let num = number
    while(num > 0){
        count++;
        num = Math.floor(num / 10);
    }
    return count
}

const countDigitsOptimised = (number) => {
    return Math.floor(Math.log10(number)+1)
}

console.log(countDigitsOptimised(99))



const reverseNumber = (number) => {
    let result = 0;
    while(number > 0){
        const temp = number % 10;
        result = result*10 + temp;
        number = Math.floor(number / 10)
    }
    
    return result
    
}

console.log(reverseNumber(899))

const checkPalindromeNumber = (number) => {
    const reverseNum = reverseNumber(number)
    if(reverseNum === number) return true
    return false
}


const findGCD = (num1,num2) => {
    let minimum = num1 > num2 ? num1 : num2
    minimum = minimum/2
    let gcd = 1;
    let i = 1;
    while(i<minimum){
        if(num1%i==0 && num2%i==0){
            gcd = i
        }
        i++;
    }
    
    return gcd
}

// Approach : find common factor from reverse and return
const findGCDBetterApproach = (num1,num2) => {
    
    for(let i=Math.min(num1,num2); i>0; i--){
        if(num1%i==0 && num2%i==0){
            return i;
        }
    }
    
    return 1;
    
}

// Optimal approach
// GCD is same when substracting large number with small number
// gcd(a,b) == gcd(a,a-b) 
// if any of the numbers are zero, the other one is the gcd.
// Important Note: Applying modulous by n means(%) repeadtedly doing substraction of n upto the other number less than n

function findGCDOptimalApproach(num1,num2){
    while(num1>0 && num2 > 0){
        if(num1>num2){
            num1 = num1 % num2
        }
        else{
            num2 = num2 % num1
        }
    }
    if(num1 === 0) return num2
    return num1
}

console.log(findGCDOptimalApproach(24,60))



function isArmstrongNumber(number){
    const size = Math.floor(Math.log10(number)+1)
    
    let result = 0;
    let numberPre = number
    
    while(number > 0){
        const temp = number % 10;
        number = Math.floor(number / 10);
        result = result + Math.pow(temp,size)
    }
    

    if(result === numberPre) return true
    else return false
}

console.log(isArmstrongNumber(153))


// For divisors we need to look up for upto square root of number
// if i is divisor then n/i must be a divisor
// Example 36, 2 is divisor 36/2 = 18 as well
// Example 36, 4 is divisor 36/4 = 9 as well

function findDivisiors(number){
    const divisors = [];
    
    for(let i=1; i<Math.sqrt(number);i++){
        if(number%i==0){
            divisors.push(i)
            
            // One duplicate condition in the middle
            if(i != number/i){
                divisors.push(number/i)
            }
            
        }
        
    }
    
    return divisors
    
    
}

console.log(findDivisiors(36))


function checkForPrime(number){
    let cnt=0
    for(let i=2; i<=Math.sqrt(number);i++){
        if(number % i == 0){
            cnt++;
            
            if(i != number/i){
                cnt++;
            }
        }
    }
    if(cnt == 0) return true
    else return false
}

console.log(checkForPrime(13))
