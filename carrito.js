
function toggleCart() {
    var cart = document.getElementById("cart");
    if (cart.style.display === "none" || cart.style.display === "") {
        cart.style.display = "block";
    } else {
        cart.style.display = "none";
    }
}

function toggleCart() {
    var cart = document.getElementById("cart");
    cart.style.display = (cart.style.display === "none" || cart.style.display === "") ? "block" : "none";
}

function closeCart() {
    document.getElementById("cart").style.display = "none";
}


window.addEventListener("scroll", function() {
    var cart = document.getElementById("cart");
    if (cart.style.display === "block") {
        cart.style.display = "none";
    }
});

function addToCart() {
    
    var alertBox = document.getElementById('custom-alert');
    alertBox.classList.add('show');

   
    setTimeout(function() {
        alertBox.classList.remove('show');
    }, 3000); }

document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const addCartButtons = document.querySelectorAll('.btn-add-cart');

    addCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.card-product');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseFloat(productElement.querySelector('.price').textContent.replace('$', ''));
            const product = { id: productId, name: productName, price: productPrice };

            addToCart(product);
        });
    });

    function addToCart(product) {
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }

        updateCartUI();
    }

    function updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</span>
                <button class="btn-remove-cart" data-id="${item.id}"></button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        document.getElementById('cart-total').textContent = `$${totalPrice.toFixed(2)}`;

        addRemoveButtonsListeners();
    }

    function addRemoveButtonsListeners() {
        const removeCartButtons = document.querySelectorAll('.btn-remove-cart');

        removeCartButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.getAttribute('data-id');
                removeFromCart(productId);
            });
        });
    }

    function removeFromCart(productId) {
        const productIndex = cart.findIndex(item => item.id === productId);

        if (productIndex > -1) {
            cart[productIndex].quantity -= 1;
            if (cart[productIndex].quantity === 0) {
                cart.splice(productIndex, 1);
            }
        }

        updateCartUI();
    }
});



