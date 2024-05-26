

const sumAll = function(x, y) {

let sum = 0;

    //swaps if y is smaller than x
    if (y < x) {
        const temp = x;
        x = y;
        y = temp;
    } 
    if (x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR"; // valid numbers only
    }
   
    for (let i = x; i <= y; i++) {
        sum += i;
    }
        return sum;

}

// Do not edit below this line
module.exports = sumAll;
