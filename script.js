
let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total;
}

function checkout() {
    alert('Thank you for your purchase! Your order has been placed.');
    cart = [];
    updateCart();
}
