function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == 0) throw new Error('Cannot be divided by zero');
    return a / b;
}

function isEven(n){
    return n % 2 === 0;
}

function isOdd(n){
    return n % 2 !== 0;
}

function isPositive(n){
    return n > 0;
}

function isNegative(n){
    return n < 0;
}

export { add, subtract, multiply, divide, isEven, isOdd, isPositive, isNegative };