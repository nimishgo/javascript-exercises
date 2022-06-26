const leapYears = function(leapYear) {

    if(leapYear % 4 === 0 && leapYear%100 !== 0) return true;

    else if ( leapYear % 400 === 0) return true;

    else return false;
};

// console.log(leapYears(1800));
// console.log(leapYears(1900));
// console.log(leapYears(2000));
// console.log(leapYears(1600));
// Do not edit below this line
module.exports = leapYears;
