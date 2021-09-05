const names = require('./names');
const sayHi = require('./utils');

// sayHi(names.dani);
// sayHi(names.mihai);
// sayHi(names.jennie);

const _ = require('lodash');
const numbers = [1, [2, [3, [4]]]];

console.log(_.flattenDeep(numbers));