const products = [    
    {name: 'laptop', price: 3200, brand:'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand:'iPhone', color: 'golden'},
    {name: 'watch', price: 3000, brand:'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand:'rayban', color: 'black'},
    {name: 'camera', price: 9000, brand:'canon', color: 'gray'},
];

const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
/* console.log(brands); 
console.log(prices);  */
/* 
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color)); */

// filter
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specficName = products.filter(product => product.name.includes('n'));
console.log(specficName);


// find
const special = products.find(product => product.name.includes('n'));