
// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//  Maximum element is: 9

// Input: arr[] = {22, 14, 8, 17, 35, 3}
// Output:  Minimum element is: 3
//  Maximum element is: 35

let minmax = [4, 9, 6, 5, 2, 3];

function getMin(val) {
  let min = val[0];
  for (let i = 0; i < val.length; i++)
    if (val[i] < min) {
      min = val[i];
    }

  return min;
}

function getMax(val) {
  let max = val[0];
  for (let i = 0; i < val.length; i++) {
    if (val[i] > max) {
      max = val[i];
    }
  }

  return max;
}

function Main(value) {
  console.log("Min value is " + getMin(value));
  console.log("Max value is " + getMax(value));
}

Main(minmax);

// Time Complexity:
// O(n) + O (n) 
// 2 0(n) --> O(n)






