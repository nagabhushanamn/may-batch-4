


// function f1() {
//     console.log('log-before');
//     console.log('f1()');
//     console.log('log-after');
// }

// function f2() {
//     console.log('log-before');
//     console.log('f2()');
//     console.log('log-after');
// }

// f1();
// f2();



//----------------------------------------
// FP principle
// Higher-order programming
//----------------------------------------

function f1() {
    console.log('f1()');
}
function f2() {
    console.log('f2()');
}

// HO function
function withLog(f) {
    let newF = function () {
        console.log('log-before');
        f();
        console.log('log-after')
    }
    return newF;
}

let f1WithLog = withLog(f1);
f1WithLog();
let f2WithLog=withLog(f2);
f2WithLog();

// //-------------------------------------------