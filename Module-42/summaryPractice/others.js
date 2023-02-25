// 1. array: map, forEach, filter, find
const arr = [1401, 5, 54, 56, 51, 20];
const arrMap = arr.map(nums => console.log(nums));
arr.forEach(element => {
    console.log(element);
});

// filter
// const arrFilter = arr.filter(num => console.log(num));
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

// filter
function isBigEnough(digits) {
    return digits >= 55;
}

const filterdValue = arr.filter(num => isBigEnough(num));
console.log(filterdValue);

// find 
/* The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. */
// const digit = [];

const found = arr.find(element => element > 10);
console.log('low', found);

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

const cherries = inventory.find(isCherries);
console.log(cherries);

//  2. ternary operator
const age = 18;
const educationStatus = age <= 20 ? 'School or college Student' : 'Worker';
console.log(educationStatus);


// 4. JOSN(Stringify, parse)

const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['King Khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 5.(+)add kore string k number and('') add kore number k string kore fela
// arr.forEach( num => )
const newNum = 90;
// console.log(newNum);
const stringNewNum = newNum + '';
console.log(stringNewNum);
const againNewNum = +stringNewNum;
console.log(againNewNum);