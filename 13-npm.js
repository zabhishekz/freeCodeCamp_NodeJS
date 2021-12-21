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
console.log("Hello World")

/* Note about sharing code-
When someones clones your git repo, they do not have the node modules because of .gitignore.
But, when they run "npm install", npm will check for dependencies in package.json and 
automatically install packages and setup that node_modules folder by itself.
*/

/*
developer dependencies - package needed for development of application not for application
npm i <packagename> -D
or you can use-
npm i <packagename> --save-dev
*/

/*
Nodemon-watch files and restart on change
*/

//npm start- runs the command stored in scripts "start"
//sometimes uyou have to use npm run start