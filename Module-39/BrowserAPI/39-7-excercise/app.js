// load or display local storage cart
const displayLocalStorageCart = () => {
    const cart = getCart();
    for(const productName in cart){
        displayProduct(productName);
    }
}

const addItem = () => {
    const productField = document.getElementById('product-name');
    const productName = productField.value;
    // console.log(productName);
    if (!productName) {
        return;
    }

    // display Products
    displayProduct(productName);

    // add to local storage
    addProductToCart(productName);

    productField.value = '';
}

const displayProduct = productName => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = productName;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');

    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = productName => {
    const cart = getCart();
    // cart[productName] = 1;
    if(cart[productName]){
        cart[productName] = cart[productName] + 1;
    }else{
        cart[productName] = 1;
    }
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// place order
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

// display LocalStorage existing items
displayLocalStorageCart();