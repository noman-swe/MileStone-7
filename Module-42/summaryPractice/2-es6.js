// 1.templete string, string ${}
const myName = 'Noman Shibly';
const designation = 'Software Engineer';
const audience = 'everyone';
const aboutMe = `Hi ${audience}, i'm ${myName}. i'm a ${designation}.`;
console.log(aboutMe);

// 2. spread operator (...) 

const numbers = [89, 35, 98, 12];

const newNumbers1 = numbers;
const newNumbers = [...numbers];

// create a new array from an older array and add ana element
const currentNumbers = [...numbers, 55]

numbers.push(100);

numbers.push(100);
numbers.push(111);
console.log(numbers, ' normal array where push kora array element gula add hoisy');
console.log(newNumbers, 'shudu ager number gulaii add hoisy.push kora gula hoy nai. -> spread operator use korar jonne');//newNumbers e shudhu ager numbers gulai asy
// if i want no exsisting or newly added number then i have to use spread operator

// console.log(numbers);
console.log(currentNumbers, ' ager no er sathy 55 add kora hoisy -> spread operator use korar jonne');

// 2.2 use filter to remove an element from an array
const arrayNums = [1, 2, 3, 4, 5, 6];
const filteredNums = arrayNums.filter(num => num >= 3);
console.log(filteredNums);

// 3. arrow function 
const love = () => console.log('My love');
love();
const get10 = () => 10;//like return 10
const valueOfGet10 = get10();
console.log(valueOfGet10);