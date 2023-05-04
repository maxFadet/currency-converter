let formElement = document.querySelector(".js-form");
let moneyElement = document.querySelector(".js-amount");
let currencyElementFrom = document.querySelector(".js-currencyFrom");
let currencyElementTo = document.querySelector(".js-currencyTo");
let answerElement = document.querySelector(".js-result");
let resultCurrency = document.querySelector(".js-resultCurrency");

formElement.addEventListener("input", () => {

// Recalculation operation

    let money = moneyElement.value;
    let currencyFrom = currencyElementFrom.value;
    let currencyTo = currencyElementTo.value;
    let result = (money * currencyFrom) / currencyTo;

    answerElement.innerText = result.toFixed(2);

// Shows the exchange currency

    let selectedCurrency = currencyElementTo.selectedOptions[0].textContent;
    resultCurrency.innerText = selectedCurrency;
});
