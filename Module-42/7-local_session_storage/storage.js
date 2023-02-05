/* localStorage.setItem('userId', 10007);
sessionStorage.clear();
 */
const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;

    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    // add to local storage-
    if (id && value) {
        localStorage.setItem(id, value);
    }

    // doing input field empty
    idInput.value = '';
    valueInput.value = '';


    // json.stringify([array], or {object}) -> er maddhom e local storage e array or object set kora jay.. tasara normally local storage e sob kisu text hisheb e set hoy.. 

    localStorage.setItem('friends', ['sifat', 'shakil', 'shoib']); //will not add as array

    localStorage.setItem('enemy', JSON.stringify(['Shakil', 'ALif', 'Salman']));

    // to object
    const pen = {color: 'red', price: 10, inkColor:'blue'};
    localStorage.setItem('pen', pen);//this will not pass a object
    
    localStorage.setItem('pen', JSON.stringify(pen));
}

// getItem from local storage
const storedItem = localStorage.getItem('pen');
const penObj = JSON.parse(storedItem);
console.log(storedItem);//output is a text
console.log(penObj);//output is a object
