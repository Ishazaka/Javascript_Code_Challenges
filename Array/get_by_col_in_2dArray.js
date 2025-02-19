

let arr2d = [ [1,2,3] , [4,5,6,] , [7,8,9] ]
let newarr2d = [ [1,2,3] , [4,5,6,7] , [8,9, 10,11] , [12] ]

 function getCol(arr) {
  if (arr.length === 0) return ""; 
  if (arr.length === 1) return arr[0].join(" "); 

  let row = arr.length;
  let col = Math.max(...arr.map(col => col.length))
  let result = '';

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (arr[j][i] !== undefined) {
        result += arr[j][i] + ' ';
      }
    }
  }

  return result.trim();
}

  console.log(getCol(arr2d))
console.log(getCol(newarr2d))
