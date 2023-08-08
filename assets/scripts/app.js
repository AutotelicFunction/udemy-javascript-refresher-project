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

const arr = transformToObjects([1,2,3])

console.log(arr);

const [first, second, third] = arr;
console.log(first.val);
console.log(second.val);
console.log(third.val);


const user = {
    name: "Ali",
    age: 22
}

const {name: aliasName, age: aliasAge} = user

console.log(aliasName);
console.log(user.name);
console.log(aliasAge);
console.log(user.age);

const hobbies = ["Learning", "Coding"];
const additionalHobbies = ["Reading"];
const superUser = {
    isAdmin: true,
    ...user
}

const extendedHobbies = [...hobbies, ...additionalHobbies];
console.log(user);
console.log(superUser);
console.log(extendedHobbies);
console.log(hobbies);
console.log(additionalHobbies);


if (Util.password) {
    const pass = prompt("please enter a PW");

    if (pass === "A") {
        console.log(":)");
    } else if (pass === "hello"){
        console.log("hi");
    } else {
        console.log("bruh");
    }
} else {
    console.log("no password prompt")
}

for (const hobby of extendedHobbies) {
    console.log("Lol, more hobbies  \n" + hobby);
}

function thisIs() {
    console.log("timed out");
}

const theSameAsThis = ()=>{
    console.log("and again kekw");
};

setTimeout(thisIs, 1000);
setTimeout(theSameAsThis, 1000);
setTimeout(() => {
    console.log("more timing out")
}, 1000);

onclick = greeting; // oh lol
