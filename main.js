
getCalculationOfTickets('plus-btn-first', 'input-value-first', true)

getCalculationOfTickets('minus-btn-first', 'input-value-first', false)

getCalculationOfTickets('plus-btn-economy', 'input-value-economy', true)

getCalculationOfTickets('minus-btn-economy', 'input-value-economy', false)



function getCalculationOfTickets(button, input, isIncrease) {
    document.getElementById(button).addEventListener("click", function () {
        const inputValueNumber = getInputNumber(input);
        if (isIncrease == true) {
            const increaseNumber = inputValueNumber + 1;
            document.getElementById(input).value = increaseNumber;
            moneyCalculation();
        }
        else if (isIncrease == false && inputValueNumber > 0) {
            const decreaseNumber = inputValueNumber - 1;
            document.getElementById(input).value = decreaseNumber;
            moneyCalculation();
        }
    })
}



function moneyCalculation() {
    const inputFirstTotal = getInputNumber('input-value-first') * 150;
    const inputEconomyTotal = getInputNumber('input-value-economy') * 100;
    const subtotal = inputFirstTotal + inputEconomyTotal;
    document.getElementById('subtotal').innerText = subtotal;
    const vat = subtotal * .10;
    document.getElementById('vat').innerText = vat;
    const total = subtotal + vat;
    document.getElementById('total').innerText = total;
}



function getInputNumber(input) {
    const inputNumber = parseInt(document.getElementById(input).value);
    return inputNumber;
}