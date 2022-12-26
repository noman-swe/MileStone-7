console.log('First');
// setInterval(()=>console.log('Third'), 3000); //it doesn't stop, it continues.

let seconds = 0;
const timeID = setInterval(() => {
    // seconds++;
    console.log(seconds++);
    if (seconds > 15) {
        clearInterval(timeID);
    }
}, 1000);

console.log('Second');