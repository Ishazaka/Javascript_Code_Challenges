

// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
// Output: 4
// Explanation: 2 occurs 4 times in the given array.

// Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 4
// Output: 0
// Explanation: 4 is not present in the given array.

//Count number of occurrences in a sorted array

let arr = [1, 1, 2, 2, 2, 2, 3, 3, 3, 4];
let target = 2;

let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == target) {
    count++;
  }
}

console.log(count);
//time complexity will be O(n) and O (1)

//2nd way
//Binary Search

arr = [1, 1, 2, 2, 2, 2, 3, 3, 3, 4];
target = 3;

