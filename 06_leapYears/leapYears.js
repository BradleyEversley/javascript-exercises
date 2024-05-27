const leapYears = function(year) {
 return year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)

};

// Do not edit below this line
module.exports = leapYears;

// true if it is the case that year is div by 4 AND is
// true if the year is either div by 400 or not div by 100
