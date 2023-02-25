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
// 3-1. no perameter
const love = () => console.log('My love');
love();
const get10 = () => 10;//like return 10
const valueOfGet10 = get10();
console.log(valueOfGet10);

// 3-2. single perameter
const multiplyBy10 = digit => digit * 10;
const multiplyBy10Result = multiplyBy10(7);
console.log(multiplyBy10Result, 'single perameter arrow function');

// 3-3. multiple perameter
const addition = (x, y, z) => x + y + z;
const addResult = addition(5, 3, 2);
console.log(addResult, 'multiple perameter arrow function');

// 3-4. multi line 
const getDecimalCalculation = (length, width) => {
    const squireFeet = length * width;
    const dicimal = squireFeet / 435.6;
    return dicimal;
}
const decimal = getDecimalCalculation(133, 45);
console.log(decimal);

// 4. destructuring : object destructuring, array destructuring.
// object destructuring
const tounarmentMeeting = {
    meetingTime: '10:30 am',
    meetingPlace: 'Eid-gha',
    meetingMember: ['Tomal vai', 'Rafi vai', 'Sayem', 'Rakib'],
    feeCollector: {
        showrav: 4000,
        ristak: 6000,
        abid: 'Zero',
    },
    team: {
        hurricane: {
            captain: 'Rafi',
            players: ['Hridoy', 'Showmik', 'rafi', 'sakib', 'sifat', 'shibly'],
            jersyColor: 'red',
        },
        thunders: {
            captain: 'tomal',
            players: ['Anik', 'Showrav', 'tomal', 'rakib', 'Ristak'],
            jersyColor: 'blue',
        }
    }
}

const [fristLeader, secondLeader] = tounarmentMeeting.meetingMember;
console.log(fristLeader, secondLeader);

const { captain, jersyColor } = tounarmentMeeting.team.thunders
console.log(`captain is : ${captain} and the jersy color is ${jersyColor}`);

const [openerBatsMan1, openerBatsMan2, oneDown, twoDown, fifth] = tounarmentMeeting.team.hurricane.players;
console.log(openerBatsMan1, openerBatsMan2, oneDown, twoDown, fifth);


// 5. object shorthand
let bookName = 'Socoal Administration';
let pages = 439;
const bookDetails = {
    name: bookName,
    pages: pages,
}
console.log(bookDetails);
console.log(JSON.stringify(bookDetails));

// 6. function with default parameter value
function getMedicine(amount, price = 10) {
    const totalPrice = price * amount;
    return totalPrice;
}
const medicinePrice = getMedicine(9, 12);
const medicinePrice2 = getMedicine(2);
console.log(medicinePrice);
console.log(medicinePrice2);


// 7. Optional chaining (?.)
medicinePrice <= 100 ? console.log('lets buy') : console.log('i do not have enough money');
medicinePrice2 <= 100 ? console.log('lets buy') : console.log('i do not have enough money');
