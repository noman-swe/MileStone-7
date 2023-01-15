const addItem = () => {
    const productField = document.getElementById('product-name');
    const productName = productField.value;
    // console.log(productName);

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
    cart[productName] = 1; 
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}