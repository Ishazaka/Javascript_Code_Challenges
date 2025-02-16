


// Traversing on 2D array

let arr2d = [ [1,2,3] , [4,5,6,] , [7,8,9] ]
let newarr2d = [ [1,2,3] , [4,5,6,7] , [8,9, 10,11] , [12] ]

// [ 
// [ 1, 2, 3 ], 
// [ 4, 5, 6 ], 
// [ 7, 8, 9 ] 
// ]



console.log(arr2d);
console.log(newarr2d);

 function newArr2d(arr){

  let newarray= '';
  let realArry = []
  for(let i =0; i < arr.length; i++){
     for(let j =0; j < arr[i].length; j++){
       newarray += " " + arr[i][j];
       realArry.push(arr[i][j])
     }
 
  }
// console.log(newarray);
console.log(realArry);

 }

 newArr2d(arr2d)
newArr2d(newarr2d)

