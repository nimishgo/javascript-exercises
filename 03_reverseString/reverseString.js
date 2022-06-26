const reverseString = function(str) {

    let len = str.length;
    let op = "";
    for (let i = len - 1; i >= 0; i--) {
        op += str[i]; 
    }
    return op;
};

// Do not edit below this line
module.exports = reverseString;
