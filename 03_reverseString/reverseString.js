

const reverseString = function(string) {
    
let stringArray = string.split(''); //turns string into array
let left = 0; //left-most index
let right = stringArray.length - 1; //right-most index
        
    while (left < right) {
        let temp = stringArray[left]; //temp var needed so we don't lose the left-most index
        stringArray[left] = stringArray[right]; //swap left-most index with righ-most
        stringArray[right] = temp; // store that right-most
        left++;
        right--;

        //OMG I DIDN'T REALIZE THE SOLUTION IS JUST A .reverse() FUNCTION WTF
        //I SPENT 2 HOURS TRYING TO COME UP WITH THIS METHOD
        //
    }
        
    return stringArray.join('');
}
    

    



// Do not edit below this line
module.exports = reverseString;
