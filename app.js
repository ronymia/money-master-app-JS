const TotalExpance = document.getElementById("TotalExpance");
const Balance = document.getElementById("Balance");

const SavingAmount = document.getElementById("SavingAmount");
const RemainingBalance = document.getElementById("RemainingBalance");


function calculateFunctionality() {
    TotalExpance.innerText = calculateExpence();

    if (calculateBalance() >= 0) {
        Balance.innerText = calculateBalance()
    }

    else {
        Balance.innerHTML = "<span class='text-red-800 bg-red-300 px-5 py-1 rounded-md'> Expence is greater then Income.</span>"
    }
}

function savingFunctionality() {
    SavingAmount.innerText = calculateSavingAmount();
    RemainingBalance.innerText = calculateRemainingBalance();
}



function calculateExpence() {
    const food = parseInt(document.getElementById("Food").value);
    const rent = parseInt(document.getElementById("Rent").value);
    const clothes = parseInt(document.getElementById("Clothes").value);

    return (food + rent + clothes)
}

function calculateBalance() {
    const income = parseInt(document.getElementById("Income").value);
    return (income - calculateExpence());
}


function calculateSavingAmount() {
    const percentage = parseInt(document.getElementById("percentage").value);
    return ((calculateBalance() * percentage) / 100);
}

function calculateRemainingBalance() {
    return (calculateBalance() - calculateSavingAmount());
}
