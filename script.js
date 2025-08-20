
// Part 1
function checkAge() {
  let age = prompt("Enter your age:");
  if (age >= 18) {
    console.log("You are an adult");
    alert("You are an adult");
  } else {
    console.log("You are a minor");
    alert("You are a minor");
  }
}


// Part 2: Functions
function calculateTotal(quantity, price) {
  let total = quantity * price;
  console.log(`Total cost: $${total}`);
  alert(`Total cost: $${total}`);
  return total;
}

function toggleMessage() {
  const msg = document.getElementById("message");
  msg.style.display = (msg.style.display === "none") ? "block" : "none";
}

// Part 3: Loops
function countdown(n) {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
  alert("Countdown complete!");
}

const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => {
  let li = document.createElement("li");
  li.textContent = fruit;
  document.getElementById("loop-list").appendChild(li);
});

// Part 4: DOM Manipulation
document.getElementById("colorBtn").addEventListener("click", () => {
  document.getElementById("title").style.color = "purple";
});

document.getElementById("addItemBtn").addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = "New Dynamic Item";
  document.getElementById("dynamic-list").appendChild(li);
});

