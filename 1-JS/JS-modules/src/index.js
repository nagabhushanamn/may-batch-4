console.log('-app.js-');


//pack/mod1.js
// var ibm = ibm || {};
// ibm.mod1.doWork();

//---------------------------------------------------

let greetMod = require('ibm-kol-greet');
greetMod.greet('en');
greetMod.greet('es');
greetMod.greet();

//---------------------------------------------------

// import { item1, item2 } from './hotel/menu';
// or
// import { item1 as nonVeg, item2 as veg } from './hotel/menu';
// or
// import * as items from './hotel/menu';
// console.log(items.item1);
// console.log(items.item2);

import item1, { item2 } from './hotel/menu';
console.log(item1);
console.log(item2);


