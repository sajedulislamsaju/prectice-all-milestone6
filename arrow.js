const add = (first , secend ) => first + secend;

// this is the multipul function 

const add5 = (x , y ,z) => {
    const plus = x+y ;
    const secendPlus = y + z ;
    const result = plus * secendPlus ;
    const totalResult = result / 2 
    return totalResult ; 
}


const functionResult = add5(5,6,7);
console.log(functionResult)