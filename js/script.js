// math pow
function pow(x, n){
  
    return x ** n
}
let res = pow(2, 4)
console.log(res)


//math abs

function abs(x){
    return x * -1
}
let res2 = abs(-7)
console.log(res2)


// math sqrt

function sqrt(a, b){
    
    return  a ** ( 1 / b)
}

let res3 = sqrt(16, 2)
console.log(res3)


//math floor
function floor(x){
    if(x % 1 >= 0.5){
        console.log(x.toFixed(0)-1)
    }else{
        console.log(x.toFixed(0))
    }
}
floor(3.1)


//math ceil
function ceil(x){
    if(x % 1 >= 0.5){
        console.log(x.toFixed(0))
    }else{
        console.log(x.toFixed(0)+1)
    }
}
ceil(5.6)


 //math round 
 function round(x){

    return x.toFixed(0)
 }

let res4 = round(8.4)
console.log(res4)


//  matth trunc
function trunc(x){

    return x- (x %1)
 }
 
let res5 = trunc(12.3)
console.log(res5)





