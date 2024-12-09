
// Input: arr[] = {1, 4, 3, 2, 6, 5}
// Output: {5, 6, 2, 3, 4, 1}

// Input: arr[] = {4, 5, 1, 2}
// Output: {2, 1, 5, 4}

// built-in method
// First method

const reverseArr = [1, 4, 3, 2, 6, 5];

let copied = [...reverseArr]; // need to first create a copy, because reverse mutates the original array

copied.reverse();

// console.log(copied)

// Time complexity -> O(n)


//2nd way

// traversing elements
// O(n) Time and O(n) Space

let copyarr = [];
for (let i = reverseArr.length - 1; i >= 0; i--) {
  copyarr.push(reverseArr[i]);
}

console.log(copyarr);
console.log(reverseArr)


// 3rd way
// using two pointers

const rvrArr = [1, 2, 3, 5, 4, 7];

console.log(rvrArr)
function reverseFunc(arr) {
  let left = 0; // starting from the most left side
  let right = arr.length - 1; // staarting from the most right side

  if (!arr.length) {
    return "No value inside";
  }

  if (left >= right) {
    return rvrArr;
  }

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    // let temp = rvrArr[left]
    // rvrArr[left] =  rvrArr[right]
    // rvrArr[right] = temp

    left++;
    right--;
  }

  return arr;
}

console.log(reverseFunc(rvrArr))



// 4th way

const rvrArr2 = [1, 2, 3, 5, 4, 7];

// console.log(rvrArr2)
function revrsArr(rvrArr2) {
  let n = rvrArr2.length - 1;

  for (let i = 0; i <= rvrArr2.length / 2; i++) {
    let temp = rvrArr2[i];
    rvrArr2[i] = rvrArr2[n - i];
    rvrArr2[n - i] = temp;
  }

  return rvrArr2;
}

console.log(revrsArr(rvrArr2))




//5th way

// Using Recursion – O(n) Time and O(n) Space

const rvrArr3 = [1, 2, 3, 5, 4, 7];

console.log(rvrArr3);

function recursiveFunc(arr, l, r) {
  if (l >= r) return;

  [arr[l], arr[r]] = [arr[r], arr[l]];
  recursiveFunc(arr, l + 1, r - 1);
}

function reverseFunc(arr) {
  let n = arr.length - 1;
  recursiveFunc(arr, 0, n);

  return arr;
}

console.log(reverseFunc(rvrArr3));



