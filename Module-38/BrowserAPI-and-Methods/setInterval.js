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

// js single threaded language & single threaded er moddhy e asyncronouns vabe kaj korte hobe coz amra block korte parbo na tokhn amadr k event loop chalaite hobe.