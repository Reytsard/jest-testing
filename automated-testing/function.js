const myFunction = {
  sum: function (a, b) {
    return Number(a) + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

//for automated unit testing
module.exports = myFunction;
