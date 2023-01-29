/* 
1.Show Output afrer 3.5s
2. take a number using prompt. add 200. then alert the result
3. do you want to see the href. if ok console.log href

4. perpose of cookies? write down in 5 to 7 lines in english 
5. local storage vs session storage -3 difference
---------hone work---------
6. how js run? in 5-7 line in english
7.js/browser asyynchronous list 
8. what is event loop in js and how does it work?
--------optional--------
9. simple website with two input fields and a button. product name, product er price, by clicking on the button product will ve added to the local storage. you should be able to add multiple.
10. display products on the website. if they exists on the local storage display from there.
----------Must----------
11.create an account on stack overflow and spend time 30 mins there.
*/



// 1-----------
setTimeout(function () {
    console.log('Hi, I am shibly')
}, 3500);

// 2..............
document.getElementById('numBtn').addEventListener('click', function () {
    const promptNumber = prompt('Please input your number, Shibly');
    // const totalNumText = parseInt()
    const totalNum = parseInt(promptNumber) + 200;
    alert('The total nuumber is : ' + totalNum);
});

// 3..................
var links = document.querySelectorAll('#res a');
for (var i = 0; i < links.length; i++) {
    console.log(links[i].href);
};