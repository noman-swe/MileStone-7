console.log('i am here.');
// alert('Mom is comming.');

const maComming = () => {
    alert('Maa is comming.');
};

const askPicnic = () => {
    const response = confirm('are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bikash kore de')
    }
    else (
        alert('dure giye mor..')
    );
}
// 

const askName = () => {
    const name = prompt('What is your name?');

    if (name) {
        console.log(name);
    }
}

// alert gives alert; confirm - asks yes or no; promt - comes with a input field;