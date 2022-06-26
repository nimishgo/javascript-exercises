const sumAll = function(start,end) {


    let strt = (start > end) ? end : start;
    let en = (start > end) ? start : end;

    if(start === end)
    {
        return start;
    }

    if(typeof start !== typeof end || start < 0 || end < 0)  return 'ERROR';

    let sum = strt;
    while (strt < en) {
        strt = strt + 1;
        sum += strt;
    }
    return sum;
};

// Do not edit below this line
// console.log(sumAll(123,1));
// console.log(sumAll(-10,3));
// console.log(sumAll(-10,"3"));
// console.log(sumAll(10, [90, 1]));
// console.log(sumAll(1, 4000));
// console.log(sumAll(1,4));

module.exports = sumAll;
