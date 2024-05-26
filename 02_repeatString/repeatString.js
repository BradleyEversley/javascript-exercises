
const repeatString = function(string, num) {
    let result = '';
    let count = 0;

    if (num >=0) {
        while (count < num) {
            result += string;
            count ++;
        }
    } else {
        result = 'ERROR';
    }

    return result;
};


// Do not edit below this line
module.exports = repeatString;
