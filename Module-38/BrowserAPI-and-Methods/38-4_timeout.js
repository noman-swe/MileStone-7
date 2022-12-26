function LearningJS() {
    console.log('I am learning JS>>>>>>>>>>>>>>>>>');
}

console.log('2nd: i am a swe student');

setTimeout(LearningJS, 7000);

setTimeout(() => {
    console.log('hey! it is a arrow function')
}, 5000);

setTimeout(function () {
    console.log('Daffodil university');
}, 3000);

console.log('3rd: Alif is in belgium');
console.log('hey! it is number 4.');

// settimeout() diye tmi jodi kono ekta function k or onno kono kisu k call koro tahole seta syncronuously hbe na seta hobe asyncronious way te. and kotokkhn pore hbe tmi chaile seta bole dite paro.