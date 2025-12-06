// cart count codes//
function updateCartCountDisplay() {
  const countEl = document.querySelector('.cart-count');
  countEl.textContent = cartItems.length;
    // Animate the count
  countEl.classList.add('bump');
  setTimeout(() => countEl.classList.remove('bump'), 200);
}


  // Find all "Add to Cart" buttons and attach event


//  call addToCart() when a product is added
// Declare cartItems once at the top
let cartItems = [];

// Add to cart

function addToCart(name, price) { 
  cartItems.push({ name, price });
  updateCart();
  updateCartCountDisplay(); // ✅ update count
  showPopup("Item added successfully!");
}
// Remove from cart
function removeFromCart(name) {
  cartItems = cartItems.filter(item => item.name !== name);
  updateCart();
  updateCartCountDisplay(); // ✅ update count
  showPopup("Item removed successfully!");
}

// Popup feedback
function showPopup(message) {
  const popup = document.getElementById("popupMessage");
  popup.textContent = message;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2000);
}

// shopping cart total
function updateCart() {
  const cartElement = document.getElementById('cart-items');
  cartElement.innerHTML = '';

  let total = 0;
  cartItems.forEach(item => {
    cartElement.innerHTML += `<li>${item.name} - $${item.price}</li>`;
    total += item.price;
  });

  document.getElementById('total').textContent = total;
}


