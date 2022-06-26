
const removeFromArray = function(...args) {

    let a = args[0];
    
    for (const element of args) {
    // console.log(element);
    let index = a.indexOf(element);


    if(index >= 0 && a[index] === element)
    {
    a.splice(index,1);
    }

    }
    console.log(a);
    return a;

};

// removeFromArray(["hey",2,3,"ho"],"hey",3);
// removeFromArray([1,2,3,4],1,2,3,4);
// Do not edit below this line
module.exports = removeFromArray;
