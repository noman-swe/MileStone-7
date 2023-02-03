// 1. array destructuring
const numbers = [42, 65];

const x = numbers[0];
const y = numbers[1];

console.log(x, y);

const [a, b] = numbers;
console.log(a, b);

// 
function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;

}
const [first, second] = [90, 34];

console.log(boxify(first, second));

// 

const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['King Khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie);

// object distructuring

// const {name, age} = {name: 'Sakib', age: 51};
const {name, age} = {id:01, name: 'Sakib', Year:2323, age: 51};
console.log(name, age);


const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language:['html', 'css', 'js'],
    specification:{
        height:66,
        weight: 67,
        address: 'kumarKhali',
        drink: 'water',
        watch: {
            color: 'black',
            brand: 'Apple',
            price: 5000
        }
    }
}
const {machine, ide} = employee;
console.log(machine, ide);

// 
const {weight, address} = employee.specification;
console.log(weight,address);
const {brand, price} = employee?.specification?.watch;
console.log(brand,price);