// 1. how to declare a variavle using let and const 
const fatherNamne = 'Hasan';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic conditions : >, <, ===, !==. <=, >=
// multiple conditions : &&, ||

if(fatherNamne === 'hasan' || season === 'rainy'){

}
else if(fatherNamne === 'Hasan'){

}
else{

}

// 3. array
// index, 
// length, push
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. loop 
// for loop
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5. function
function multiply(num1, num2){
    const result = num1 * num2;
    return result;

}
const output = multiply(35, 10);
console.log(output);

// 6.Object *3 ways to access property by name
const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['King Khan', 'Dhakar Mastan']
}

const myAge = 'age';

console.log(student.age);//directly access by property 
console.log(student['age']);//access via property name string 
console.log(student[myAge]);// access via property name in a variable