// JSON

const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['King Khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

/* 
obj k JSON.stringify(object) diye json kora jay and JSON.parse(JSONobj) diye abr JSON theke object kora jay. 
*/

// keys, values 
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);

// for loop
const numbers = [12, 45, 65, 21, 49];
numbers.forEach(nums => console.log(nums));
numbers.map(num => num + 2);

// for of on array like object
// for in -  using for in object loop


// add or remove from an arry 
const products = [    
    {name: 'laptop', price: 3200, brand:'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand:'iPhone', color: 'golden'},
    {name: 'watch', price: 3000, brand:'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand:'rayban', color: 'black'},
    {name: 'camera', price: 9000, brand:'canon', color: 'gray'},
];

const newProduct = {name: 'webcam', price: 700, brand: 'lal'};

// copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(products);

// create a new array without one specification iten
// remove phone means create a new array without the phone
const remaining = products.filter(p=>p.name !== 'phone');