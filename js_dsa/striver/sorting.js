// SELECTION SORT
// takes the first element, searches for the minimum element from the remaining array and replaces the first element.\
// this process will be continued till the last

const arr = [6,2,5,1,3,4];

function selectionSortINC(arr){
    const size = arr.length
    for(let i=0; i<size - 1; i++){
        let minimum = i
        for(let j=i+1; j<size; j++){
            if(arr[j] < arr[minimum]){
                minimum = j
            }
        }
        // swap logic
        [arr[i],arr[minimum]] = [arr[minimum],arr[i]]
    }
    return arr
}

function selectionSortDSC(arr){
    const size = arr.length;
    
    for(let i=0; i<size-1; i++){
        let maximum = i;
        for(let j=i+1; j<size; j++){
            if(arr[j] > arr[maximum]){
                maximum = j
            }
        }
        // swap logic
        [arr[i],arr[maximum]] = [arr[maximum],arr[i]]
    }
    
    return arr
}

console.log(selectionSortDSC(arr))





// INSERTION SORT
// it works as sorted part and un sorted part.
// we take the first element as sorted, take the element from the unsorted and insert at the right place in the sorted part

function intersectionSortINC(arr){
    const size = arr.length;
    
    for(let i=0; i < size; i++){
        let j = i;
        while(j > 0 && arr[j-1] > arr[j]){
            [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
            j--;
        }
    }
    return arr
}

// console.log(intersectionSortINC([6,4,5,1,3,2]))

function intersectionDSC(arr){
    const size = arr.length;

    for(let i=0; i<size; i++){
        let j=i;
        while(j > 0 && arr[j] > arr[j-1]){
            // swap logic
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            j--;
            
        }
    }
    
    return arr;
}

console.log(intersectionDSC([6,4,5,1,3,2]))
