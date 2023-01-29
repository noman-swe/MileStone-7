const numbers = [89, 35, 98, 12];
const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['King Khan', 'Dhakar Mastan']
}

//1.templete string 
const about = `My name is ${student.name} and my age is ${student.age} and my lucky number is ${numbers[2]} and my favorite movie is ${student.movies[1]}`;
console.log(about);

// 2.array function
const getFiftyFive = () => 55; //without perameter
const addSixtyFive = num => num + 65; //with a perameter
const isEven = x => x % 2 == 0; //find even number
const addThree = (x, y, z) => x+y+z; //add three
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
// const newNumbers = numbers;
const newNumbers = [...numbers];

// create a new array from an older array and add ana element
const currentNumbers = [...numbers, 55]

numbers.push(99);

numbers.push(99);
numbers.push(99);
console.log(numbers);
console.log(newNumbers);//newNumbers e shudhu ager numbers gulai asy
// if i want no exsisting number then i have to use spread operator

console.log(numbers);
console.log(currentNumbers);