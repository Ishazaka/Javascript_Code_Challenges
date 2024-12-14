//Question 7
// Find duplicate elements in an array

// Input: {2, 10, 10, 100, 2, 10, 11, 2, 11, 2}
// Output: {2, 10, 11}

// Input: {5, 40, 1, 40, 100000, 1, 5, 1}
// Output: {5, 40, 1}

let arr6 = [1, 4, 1, 2, 3, 3, 4, 1, 7, 5, 5];

// first appraoch -> using loop and nested loop to compare
// O(n ^ 2)
function check_Duplicates(arr) {
  let n = arr.length;

  let temp_arr = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        if (!temp_arr.includes(arr[i])) {
          temp_arr.push(arr[i]);
        }

        break;
      }
    }
  }

  return temp_arr;
}

console.log(check_Duplicates(arr6));



// 2nd Approach
// built-in methods

function check_Duplicate2(arr){

  let arrTable = [];

for(let i =0; i < arr.length; i++){

  let first = arr.indexOf(arr[i])
  let last = arr.lastIndexOf(arr[i])

  if(last > first){

    if(!arrTable.includes(arr[i]))
    arrTable.push(arr[i])

  }

}

return arrTable;

}

// console.log(check_Duplicate2(arr6))
