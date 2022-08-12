function expenseCalculation(foodExpense, rentExpense, clothesExpense){
    const expenseOutput = parseInt(foodExpense) + parseInt(rentExpense) + parseInt(clothesExpense);
    return expenseOutput;
}

function balanceCalculation(income, expenses){
    const totalBalance = parseInt(income) - expenses;
    return totalBalance;
}

function savingAmountCalculation(income, savingsPercent){
    const savingAmount = parseInt(income) * parseInt(savingsPercent)/100;
    return savingAmount;
}

function remainingBalanceCalculation(totalBalance, savingAmount){
    const remainingBalance = totalBalance - savingAmount;
    return remainingBalance;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    // getting value of income
    const income = document.getElementById('income-field').value;

    // getting value of expenses
    const foodExpense = document.getElementById('food-field').value;
    const rentExpense = document.getElementById('rent-field').value;
    const clothesExpense = document.getElementById('clothes-field').value;

    // show the total expenses
    let totalExpenses;
    if (foodExpense > 0 && rentExpense > 0 && clothesExpense > 0){
        totalExpenses = expenseCalculation(foodExpense, rentExpense, clothesExpense);
    }
    document.getElementById('total-expense').innerText = totalExpenses;
    
    // show the total balance
    let totalBalance;
    if (income > 0){
        totalBalance = balanceCalculation(income, totalExpenses);
    }
    document.getElementById('total-balance').innerText = totalBalance;

    document.getElementById('save-btn').addEventListener('click', function(){
        // getting value of saving percentage
        const savingsPercent = document.getElementById('savings-field').value;

        // show the savings amount
        let savingAmount;
        if (savingsPercent > 0 && savingsPercent <= 100){
            savingAmount = savingAmountCalculation(income, savingsPercent);
        }
        document.getElementById('saving-amount').innerText = savingAmount;

        // show the remaining balance 
        const remainingBalance = remainingBalanceCalculation(totalBalance, savingAmount);
        document.getElementById('remaining-balance').innerText = remainingBalance;
    })
});