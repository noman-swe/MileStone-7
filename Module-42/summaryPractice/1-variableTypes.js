// 1.1- variable (let, const) three types of variables
let goal = 3; 
console.log('Goals after half-time: ', goal);
goal = 5;
console.log('Goals after full-time: ', goal);

const playerName = 'Messi';
var team = 'Barsolona';
console.log('Before the year of 2021 Leo-Messi played for', team);
team = 'PSG';
console.log('After the year of 2021 Leo-Messi plays for', team);


// 1.2 condition (<, >, ===, !==, <=, >=) &&, ||, if, else, if-else,
if(team === "PSG" && goal >= 5){
    console.log(`Leo ${playerName} is the man of the match.`);
}
else if (playerName !== 'Messi' || goal <= 2){
    console.log('Mbappe has Score.');
}else{
    console.log(playerName, 'plays for', team);
}

// 1.3 array: declare, length, index, push, pop, indexOf, includes
const myFriends = ['Alif', 'Sayem', 'Anik', 'Shagor', 'Hridoy', 'Shihab', 'Nahad'];
console.log('My total friend = ', myFriends.length);
// index 
const topFriend1 = myFriends[0];
const topFriend2 = myFriends[1];
const topFriend3 = myFriends[2];
console.log('My top 3 friends are : ', topFriend1,',', topFriend2, ',', topFriend3);

myFriends.push('Salman');
myFriends.push('Sadid');
myFriends.push('Showmik');
console.log('My total friend = ', myFriends.length);
myFriends.pop();
myFriends.pop();
myFriends.push('Nahid');
console.log('My total friend = ', myFriends.length);

// indexOf
const myNeighbourFriend = myFriends.indexOf('Anik');
console.log('My neighbour friends number is:', myNeighbourFriend);

// includes
const isFriendAmin = myFriends.includes('Amin');
const isFriendNahid = myFriends.includes('Nahid');
console.log('Amin is my friend: ', isFriendAmin);
console.log('Nahid is my frined: ', isFriendNahid);

// 1.4 for loop, while
for(i = goal; i <= myFriends.length; i++){
    console.log('I love you Shanto.');
}

let gooal = 0;
while(gooal <= myFriends.indexOf('Shagor')){
    gooal++;
    console.log('Shanto!');
}

// 1.5 function return parameter
function playCricket(batOwner, bowlOwner){
    console.log(`call ${batOwner} to bring bat and ${bowlOwner} to bring bowl.`);
}
playCricket('rakib', 'showrav');

// 1.6 object property, including array, object.
const tounarmentMeeting = {
    meetingTime: '10:30 am',
    meetingPlace: 'Eid-gha',
    meetingMember: ['Tomal vai', 'Rafi vai', 'Sayem', 'Rakib'],
    feeCollector: {
        showrav: 4000,
        ristak: 6000,
        abid: 'Zero',
    }
}