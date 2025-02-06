


///////    Question   ///////////
//Multiply Arguments



function multiply(){

  //  console.log(arguments)
let args  = [...arguments]
console.log(args)
  const result =  args.reduce(( total , curr ) =>  {  return curr == 0 ? curr + total : curr * total },1)
return result;
}






console.log(multiply(4, 5))
// 4 * 5 = 20
console.log(multiply(1, 2, 3, 5))
// 1 * 2 * 3 * 5 = 30
console.log(multiply(2, 0, 4, 2))
// 2 + 0 * 4 * 2 = 16


