
// rest parameter, takes in an array and a variable number of arguments (...args)
const removeFromArray = function(array,...exclude) {

    const newArray = []; //empty box

    //"converting a for loop to forEach" - mdn webdocs
    //"array.prototype.push()" - mdn webdocs
    array.forEach(element => {
        
        if (!exclude.includes(element)) { //if 'element' is not included in "exclude"
            newArray.push(element); //then put it into our new box called newArray
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
