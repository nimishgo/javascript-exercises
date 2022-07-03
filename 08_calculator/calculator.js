const add = function(arg1,arg2) {
  return arg1 + arg2;
};

const subtract = function(arg1,arg2) {
	return arg1 - arg2;
};

const sum = function(args) {
  return args.reduce((total, current) => total + current, 0);	
};

const multiply = function(args) { 
 return (args.reduce((total,element) => (total * element),1));
}
const power = function(arg1,arg2) {
	return arg1 ** arg2;
};

const factorial = function(num) {
  if(num <= 1) return 1;

  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
