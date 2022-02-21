

const CalculateBtn = document.getElementById("CalculateBtn");
const savingBtn = document.getElementById("savingBtn");

const TotalExpance = document.getElementById("TotalExpance");
const Balance = document.getElementById("Balance");

const SavingAmount = document.getElementById("SavingAmount");
const RemainingBalance = document.getElementById("RemainingBalance");


CalculateBtn.addEventListener('click', ()=>{
    TotalExpance.innerText = calculateExpence();

    calculateBalance()>=0 ? Balance.innerText = calculateBalance(): Balance.innerHTML = "<span class='text-red-800 bg-red-300 px-5 py-1 rounded-md'> Expence is greater then Income.</span>";
})

savingBtn.addEventListener('click', ()=>{
    SavingAmount.innerText = calculateSavingAmount();
    RemainingBalance.innerText = calculateRemainingBalance();
})



const calculateExpence = () => {
    const food = parseInt(document.getElementById("Food").value);
    const rent = parseInt(document.getElementById("Rent").value);
    const clothes = parseInt(document.getElementById("Clothes").value);

    return (food + rent + clothes)
}

const calculateBalance = () => {
    const income = parseInt(document.getElementById("Income").value);
    return (income - calculateExpence());
}


const calculateSavingAmount = () => {
    const percentage = parseInt(document.getElementById("percentage").value);
    return ((calculateBalance() * percentage)/100); 
}

const calculateRemainingBalance = () => {
    return (calculateBalance() - calculateSavingAmount()); 
}