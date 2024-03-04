// this code is to add countdown timer on inventory
/*
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

*/

// script.js

// Function to update the number of customers on the dashboard
function updateCustomerCount() {
  try {
      // Get the existing customer count
      let customerCount = parseInt(document.getElementById('customerCount').innerText);

      // Increment the customer count
      customerCount++;

      // Update the displayed count on the dashboard
      document.getElementById('customerCount').innerText = customerCount;
  } catch (error) {
      console.error('Error updating customer count:', error);
  }
}

// Function to add a new row to the customer table on the customer.html page
function addCustomerToTable(name, address, phone) {
  try {
      // Get the customer table
      let customerTable = document.getElementById('customerTable');

      // Create a new row
      let newRow = customerTable.insertRow(-1);

      // Add cells to the row
      let cell1 = newRow.insertCell(0);
      let cell2 = newRow.insertCell(1);
      let cell3 = newRow.insertCell(2);
      let cell4 = newRow.insertCell(3);

      // Fill cells with data
      cell1.innerText = customerTable.rows.length - 1; // Auto-incrementing Sr. number
      cell2.innerText = name;
      cell3.innerText = address;
      cell4.innerText = phone;
  } catch (error) {
      console.error('Error adding customer to table:', error);
  }
}

// Function to handle adding an item to the cart
function addToCart(itemName, itemPrice) {
  try {
      // Get the cart table
      let cartTable = document.getElementById('cartTable');

      // Create a new row
      let newRow = cartTable.insertRow(-1);

      // Add cells to the row
      let cell1 = newRow.insertCell(0);
      let cell2 = newRow.insertCell(1);
      let cell3 = newRow.insertCell(2);
      let cell4 = newRow.insertCell(3);

      // Fill cells with data
      cell1.innerText = cartTable.rows.length - 1; // Auto-incrementing item number
      cell2.innerText = itemName;
      cell3.innerText = itemPrice;
      cell4.innerHTML = '<button onclick="removeFromCart(this)">Remove</button>';
  } catch (error) {
      console.error('Error adding item to cart:', error);
  }
}

// Function to handle removing an item from the cart
function removeFromCart(button) {
  try {
      // Get the row to be removed
      let row = button.parentNode.parentNode;

      // Remove the row from the cart table
      row.parentNode.removeChild(row);
  } catch (error) {
      console.error('Error removing item from cart:', error);
  }
}

// Function to get receipt
function getReceipt() {
  try {
      // Your logic to gather information and navigate to the receipt page
      // For simplicity, let's navigate to receipt.html
      window.location.href = './html/receipt.html';
  } catch (error) {
      console.error('Error getting receipt:', error);
  }
}
