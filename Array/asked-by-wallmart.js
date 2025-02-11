
// 1. input = [ 'A', 'B','C', 1, 2, 3, '4', '5', 6, '@', '~', 'D' ]
 
//       * Split the string, integer, and special characters into new arrays. 
//   * Make sure 4 and 5 which is a string should be in integer array list and convert it to integer.
 
//          Console Output:
//                  integer = [1,2,3,4,5,6]  
//                  string = [ 'A', 'B', 'C', 'D' ]
//                  chars = [ '@', '~' ]  
 



let input = [ 'A', 'B','C', 1, 2, 3, '4', '5', 6, '@', '~', 'D' ];


function splitElem(input){

let integers = [], string = [], chars = []

for(let i =0; i < input.length; i++){
  if(input[i] >= "0" && input[i] <= "9"){
    integers.push(+input[i])
  }else if(input[i].match(/[a-zA-Z]/) ){
    string.push(input[i])
  }else{
    chars.push(input[i])
  }

}

return {integers, string, chars }

}

 const {integers, string,chars } = splitElem(input);

 console.log(integers)
 console.log(string)
 console.log(chars)


// 2.   Follow-up questions for integer array. 
//             integer = [1,2,3,4,5,6]  
//                  * Split it to 2 arrays with random elements and sum each array
//                    example: 
//                           Output_1: 
//                             array_1 = [ 1,4,6 ]
//                             array_2 = [ 2,3,5 ]    
//                           Output_2: Sum each array
//                             array_1 = 11
//                             array_2 = 10 


// let integer = [1,2,3,4,5,6]; 
// function arraySum(integer){

// integer.sort(() => Math.random() - 0.5)


// const mid = Math.ceil(integer.length/2);
// const array1 = integer.slice(0 , mid);
// const array2 = integer.slice(mid)


// let array_1 = array1.reduce((acc, num) => acc + num,0)
// let array_2 = array2.reduce((acc, num) => acc + num,0)

// console.log(array_1)
// console.log(array_2)

// }


// arraySum(integer);
