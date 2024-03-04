// this code is to add countdown timer on inventory

document.addEventListener("DOMContentLoaded", function () {
  let countdownTime = localStorage.getItem("countdownTime") || 8 * 60 * 60;

  let countdownInterval;

  const hoursElement = document.querySelector("#hours");
  const minElement = document.querySelector("#min");
  const secElement = document.querySelector("#sec");

  updateCountdown();

  function updateCountdown() {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    hoursElement.innerText = hours.toString().padStart(2, "0");
    minElement.innerText = minutes.toString().padStart(2, "0");
    secElement.innerText = seconds.toString().padStart(2, "0");

    localStorage.setItem("countdownTime", countdownTime);
  }

  function startCountdown() {
    countdownInterval = setInterval(function () {
      countdownTime--;

      updateCountdown();

      if (countdownTime < 0) {
        clearInterval(countdownInterval);
        console.log("Countdown has finished!");
      }
    }, 1000);
  }

  function stopCountdown() {
    clearInterval(countdownInterval);
  }

  startCountdown();
});

// adding functionality to add to cart button
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  function addToCart(event) {
    const card = event.target.closest(".card");
    const itemImg = card.querySelector(".item-img").src;
    const itemPrice = card.querySelector(".item-price").innerText;

    // Create a new item in the cart
    const newItem = document.createElement("div");
    newItem.className = "item";

    newItem.innerHTML = `
                <img src="${itemImg}" class="item-img">
                <div class="item-details">
                    <p class="item-price">${itemPrice}</p>
                </div>
                <div class="quantity">
                    <i class="fa-solid fa-minus" onclick="updateQuantity(this, -1)"></i>
                    <p class="item-quantity">1</p>
                    <i class="fa-solid fa-plus" onclick="updateQuantity(this, 1)"></i>
                    <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                </div>
            `;

    // Append the new item to the cart
    const cartItems = document.querySelector(".items");
    cartItems.appendChild(newItem);
  }

  window.updateQuantity = function (element, increment) {
    const quantityElement =
      element.parentElement.querySelector(".item-quantity");
    let quantity = parseInt(quantityElement.innerText);
    quantity += increment;
    if (quantity < 1) quantity = 1; // Ensure quantity is not less than 1
    quantityElement.innerText = quantity;
  };

  window.removeItem = function (element) {
    const item = element.closest(".item");
    item.remove();
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const makeReceiptButton = document.querySelector(".make-receipt");

  function makeReceipt() {

    const cartItems = document.querySelectorAll(".item");
    const customerName = document.getElementById("name").value;
    const customerAddress = document.getElementById("address").value;
    const customerPhone = document.getElementById("phone").value;
    const customerGender = document.getElementById("gender").value;


  makeReceiptButton.addEventListener("click", makeReceipt);

  }
});
