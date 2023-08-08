//import util from "./util.js";
//import {foo, imagine} from "./util";
// import  { foo } from "./util";
import * as Util from "./util";



// console.log(util);
// console.log(foo);
// console.log(imagine)
function utilOutput() {
    console.log(Util.default);
    console.log(Util.imagine);
    console.log(Util.foo);
}
function greeting() {
    console.log("Hello");
}

function greetUser(name="user", message="Hello!") {
    console.log(name);
    console.log(message);
}

utilOutput();
greeting();
greetUser("Max", "Hi");
greetUser("Max");

function transformToObjects(numberArray) {
    let returnArr = [];

    numberArray.map((item) => returnArr.push({val : item}));

    return returnArr;
}

console.log(transformToObjects([1,2,3]));