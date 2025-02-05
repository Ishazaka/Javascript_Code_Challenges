///////    Question 1    ///////////
// returns 3 times 

// example (1,2)(1,2)(3,4)
// 1 * 1 * 3 + 2 * 2 * 4 = 3 + 16 = 19

// example (1,2)(0,1)(0,5)
// 1 * 0 * 0 + 2 * 1 * 5 = 0 + 10 = 10


//  with 2 arguments
function mulitply2(a,b){
    return function (c , d){
       return function(e,f){
        console.log(a * c * e +  b * d  * f )
       }

    }


}



mulitply2(1,2)(1,2)(3,4)

// with 3 arguments

function mulitply3(a,b,c){
    return function (d , e,f){
       return function(j,k, l){
        console.log(a * d * j + b *  e * k   + c * f * l )
       }

    }


}
mulitply3(1,2 , 3)(1,2 , 1)(3,4 , 1)

// with arrow function 

const multiplyArrow =  (a,b) =>  (c,d) =>  (e,f) =>  a * c * e +  b * d  * f 




console.log(multiplyArrow(1,2)(1,2)(3,4))
