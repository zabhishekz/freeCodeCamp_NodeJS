//mpn -global command- comes with node
//npm --version

//local dependency - use it only in this particular project
// mpn i <packagename>

//global dependency - use it in any project
//mpm install -g <packagename>
//sudo npm install -g <packagename> (mac)

//package.json - manifest file(Stores important info about our project/package)
//manual approach - (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems)