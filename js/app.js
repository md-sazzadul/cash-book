document.getElementById('calculate-btn').addEventListener('click', function(){
    // getting value of expenses
    const foodExpense = document.getElementById('food-field').value;
    const rentExpense = document.getElementById('rent-field').value;
    const clothesExpense = document.getElementById('clothes-field').value;

    // show the total expenses
    const expenseOutput = parseInt(foodExpense) + parseInt(rentExpense) + parseInt(clothesExpense);
    document.getElementById('total-expense').innerText = expenseOutput;

    // getting value of income
    const income = document.getElementById('income-field').value;
    
    // show the total balance 
    const totalBalanceField = document.getElementById('total-balance');
    totalBalanceField.innerText = parseInt(income) - expenseOutput;

    document.getElementById('save-btn').addEventListener('click', function(){
        // getting value of saving percentage
        const savingsPercent = document.getElementById('savings-field').value;
        
        // show the savings amount
        const savingField = document.getElementById('saving-amount');
        savingField.innerText = income * parseInt(savingsPercent)/100;

        // show the remaining balance 
        document.getElementById('remaining-balance').innerText = totalBalanceField.innerText - savingField.innerText;
    })
});