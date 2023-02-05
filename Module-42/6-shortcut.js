//almas, 5, true, {}, []
// '', false, null, undefined
// example of truthy and falsy

const money = 90;

// ternary
let food = money>100 ? 'biriyani' : 'Cha Pani';
// console.log(food);

// kono ekta number er sathy ekta '' (empty string ) add kore dile number taw string hoye jay.
 
// string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum);

// use of &&
const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

isActive ? showUser() : hideUser();//isActive jodi true hoy taile showUser ar false hoile hideUser
isActive && showUser(); //isActive jodi shottie hoy taile showUser k call kora holo.

// use of || -if the left side is false then right side will be executed
isActive || showUser();

// toggle boolean -true k false korlam and false kew true korar niyom
isActive = !isActive;