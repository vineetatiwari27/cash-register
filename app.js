var bill = document.querySelector("#billAmount");
var cashes = document.querySelector("#cashGiven");
var notesGiven = document.querySelectorAll(".notes");
var clickButton = document.querySelector("#check");
const message = document.querySelector("#error");
const availableNotes = ["2000", "500", "100", "50", "10", "5", "1"];
clickButton.addEventListener("click", function validation() {
    hideMessage();
    if (bill.value > 0) {
        if (cashes.value >= bill.value) {
            const totalAmount = cashes.value - bill.value;
            calculateChange(totalAmount);
        }
        else {
            show("Read the bill right!");
        }
    }


    else {
        show("Invalid input");
    }
})
function calculateChange(totalAmount) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberTotal = Math.trunc(totalAmount / availableNotes[i]);

        totalAmount = totalAmount % availableNotes[i];
        notesGiven[i].innerText = numberTotal;
    }
}
function hideMessage() {
    message.style.display = "none";
}
function show(msg) {
    message.style.display = "block";
    message.innerText = msg;
}
