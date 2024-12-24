## Two Pointers

1. Two pointers can be used to reduce complexity from n^2 to n. for finding pairs
2. Same Direction : proccesing or scanning the data in a single go. detecting cycles
3. Opposite Direction : Finding pairs

## Sliding window

1. It is extended version of two pointers with more focused purpose and it maintains window of elements meeting certain criteria.
2. Fixes window lenghth
3. Dynamic window length, increases or decreases based on the conditions in the program.
4. Ideal for subbary sub string problems, it contains start and end, if end increases window expands
5. Example is longest substring without repeating characters. idea is when duplicate found move the start pointer, if not move the end
6. It can be used combined with hash maps to keep track of elements

## Binary Search

1. for finding element in a sorted array, it contains left, mid and right, we move the pointers so that mid matches the target
2. Binary search is applicable for any type of problem where it is monotonic
3. Monotonic means when there is a linear increase or decrease with the value of x anf f(x)
4. it can be applicable to any type of pattern when there is consistent increase or decrease we can apply BS.
5. if we have list of true and false, FFFFFFFTTTTTT we can find the first occurance of true.
6. Find minimum in rotated sorted array, we can solve by converting into false and true.



