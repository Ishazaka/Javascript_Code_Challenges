

//creating 2d array 

let anewArray = new Array(3);
let count = 1
for(let i =0; i < anewArray.length; i++){
  let Array2nd =  new Array(3).fill(0);
  for(let j = 0; j < Array2nd.length; j++){
    Array2nd[j] = count;
      count++
  }
  anewArray[i] = Array2nd

}


console.log(anewArray);
console.log(anewArray[0]);
console.log(anewArray[0][0]);
