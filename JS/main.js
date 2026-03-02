const minusBut = document.querySelector("#minusOne");
const addBut = document.querySelector("#plusOne");
const amt = document.querySelector("#amount");

// change amount from string to number
let currentAmount = parseInt(amt.textContent);

// add event listeners to detect button presses and change number
minusBut.addEventListener ("click", function() {
    if (currentAmount > 1) {
        currentAmount--;
    }
    amt.textContent = currentAmount;
});

addBut.addEventListener("click", function() {
    currentAmount++;
    amt.textContent = currentAmount;
});