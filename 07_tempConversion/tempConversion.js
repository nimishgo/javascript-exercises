const ftoc = function(F) {
  
  let cel = (F - 32) * (5/9);

  return Math.round(cel * 10) / 10;

};

const ctof = function(F) {
  let Fah = F * (9/5) + 32;

  return Math.round(Fah * 10)/10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
