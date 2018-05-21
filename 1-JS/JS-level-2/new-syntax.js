

//-------------------------------------------
// obj-literal enhancements
//-------------------------------------------
// var name = "Nag";
// var age = 34;
// var dynamicAddressType = "office"; // office | vacation
// //ES5
// var person1 = {
//     name: name,
//     age: age,
//     sayName: function () {
//         ///
//     },
//     'home-address': 'chennai'
// };
// //ES6
// var person2 = {
//     name,
//     age,
//     sayName() {
//         //..
//     },
//     [dynamicAddressType + '-address']: 'chennai',
//     [1 + 2 + 2]: 'five',
//     'say Name'() {
//         console.log('say Name()');
//     }
// };
// person2['say Name']()
//-------------------------------------------


//-------------------------------------------
// de-structuring  ( extracting props from array/object to variables)
//-------------------------------------------


// A. array

// let nums = [1, 2, 3, 4, 5, [6, 7]];

// let n1 = nums[0];
// let n2 = nums[1];

// or

// let [n1, n2, n3 = 30, , n5, [n6, n7]] = nums;



// B. Object


// let person = {
//     name: 'Nag',
//     age: 34
// };

// // manual

// // let myName = person.name;
// // let myAge = person.age;

// // or

// // let { name: myName, age: myAge } = person;
// // let { name: name, age: age } = person;
// // or
// // let { name, age } = person;

// let name;
// let age;

// //let { name, age } = person; // error , variable already exist
// ({ name, age } = person);



//-------------------------------------------
// Symbol data-type
//-------------------------------------------

/*
    unique & immutable value, used as object's indentifier property
*/

// let javaSymbol = Symbol.for('java');
// let jsSymbol = Symbol.for('js');

// let e1 = { name: 'A', [javaSymbol]: 'java,spring' }
// let e2 = { name: 'A', [jsSymbol]: 'js,angular,ember' }


// if (e1[javaSymbol]) {
//     console.log('he is java employee..');
// }


//----------------------------------------------------------------------
// Spread operator
//----------------------------------------------------------------------

// let menu = ['idly', 'vada', 'poori']  // iterable object
// let newMenu = [...menu, 'dosa'] // spread

// let arr1 = [1, 2, 3];
// let arr2 = [7, 8, 9];
// let arr3 = [...arr1, 4, 5, 6, ...arr2]; // spreading


// let [m1, m2, , m4] = newMenu  // destructuring


//----------------------------------------------------------------------
//Iterable obkects
//----------------------------------------------------------------------

// let idMaker = {
//     [Symbol.iterator]: function () {
//         let id = 0;
//         return {
//             next: function () {
//                 id++;
//                 return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true }
//             }
//         }
//     }
// };

// let ids = [...idMaker];
// let [id1, id2, id3] = idMaker;


//----------------------------------------------------------------------
//for...of loop
//----------------------------------------------------------------------

// for (let id of idMaker) {
//     console.log(id);
// }

//----------------------------------------------------------------------




