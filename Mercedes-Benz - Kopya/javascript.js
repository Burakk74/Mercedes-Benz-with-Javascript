const addToCartButtons = document.querySelectorAll('.add-to-cart');


// Initialize cart as an empty array
let cart = [];

// Add event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get car name and price from the button's data attributes
        const carName = button.getAttribute('data-car');
        const carPrice = parseInt(button.getAttribute('data-price'));
        
        // Add car to cart as an object
        cart.push({ name: carName, price: carPrice });
        
        // Optional: You can display a message to the user indicating the car has been added to the cart
        
        // Optional: You can update the UI to reflect the change in the cart
        // For example, update a counter showing the number of items in the cart
    });
});


function toggleCart() {
    var cartContent = document.getElementById("cartContent");
    cartContent.style.display = cartContent.style.display === "block" ? "none" : "block";
  }
  
  function addToCart(carName, carPrice, carImage) {
    var cartContent = document.getElementById("cartContent");
    
    // Create a div to hold the cart item
    var cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
  
    // Create an image element for the car
    var carImageElement = document.createElement("img");
    carImageElement.src = carImage;
    carImageElement.alt = carName;
    carImageElement.classList.add("car-image");
    
    // Create a paragraph element for the car name
    var carNameElement = document.createElement("p");
    carNameElement.textContent = carName;
    
    // Create a paragraph element for the car price
    var carPriceElement = document.createElement("p");
    carPriceElement.textContent = carPrice + "₺";
  
    // Create a delete button for the car
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
      cartContent.removeChild(cartItem);
      updateTotal(-parseFloat(carPrice));
    };
    
    // Append image, name, price, and delete button to the cart item
    cartItem.appendChild(carImageElement);
    cartItem.appendChild(carNameElement);
    cartItem.appendChild(carPriceElement);
    cartItem.appendChild(deleteButton);
    
    // Append the cart item to the cart content
    cartContent.appendChild(cartItem);
  
    // Update the total price
    updateTotal(parseFloat(carPrice));
  }
  
  function updateTotal(price) {
    // Update the total price in the cart content
    var cartTotalElement = document.getElementById("cartTotal");
    var currentTotal = parseFloat(cartTotalElement.textContent);
    var newTotal = currentTotal + parseFloat(price);
    cartTotalElement.textContent = newTotal.toFixed(2) + "₺";

    // Update the total price input field in the payment form
    var paymentTotalInput = document.querySelector('.total-price');
    paymentTotalInput.value = "Total: " + newTotal.toFixed(2) + "₺";
}

  function togglePayment() {
    var paymentDropdown = document.getElementById("paymentDropdown");
    paymentDropdown.style.display = paymentDropdown.style.display === "block" ? "none" : "block";
}

function finishShopping() {
    var cartContent = document.getElementById("cartContent");
    var paymentDropdown = document.getElementById("paymentDropdown");
    
    cartContent.style.display = "none"; // Hide the cart content
    paymentDropdown.style.display = "block"; // Show the payment dropdown
    
}

function clearCart() {
    // Clear the cart array
    cart = [];

    // Remove all car items from the cart content
    var cartContent = document.getElementById("cartContent");
    var cartItems = cartContent.getElementsByClassName("cart-item");
    while (cartItems.length > 0) {
        cartContent.removeChild(cartItems[0]);
    }

    // Update the total price to zero
    var cartTotalElement = document.getElementById("cartTotal");
    cartTotalElement.textContent = "0₺";
}


  
  function closePayment() {
    var paymentDropdown = document.getElementById("paymentDropdown");
    paymentDropdown.style.display = "none";
  }
  
  function finishPayment() {

    var totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price;
    });

    var totalPriceInput = document.querySelector('.payment-form input[type="text"]');
    totalPriceInput.value = "Total: " + totalPrice.toFixed(2) + "₺";

    alert("Order is complete!");


    closePayment();
    clearCart();
}
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');

let currentIndex = 0;

function slideTo(index) {
  slides.style.transform = `translateX(-${index * 435}px)`;  // Adjust 300px to match the slide width
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.children.length;
  slideTo(currentIndex);
}

// Automatically slide every 5 seconds
setInterval(nextSlide, 5000);
