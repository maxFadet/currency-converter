{
    const сharacterLimit = (moneyElement) => {
        const maxLength = 13;
        moneyElement.value = moneyElement.value > maxLength ? moneyElement.value.slice(0, maxLength) : moneyElement.value;
    };

    const attachCharacterLimitListener = () => {
    const moneyElement = document.querySelector(".js-amount");
        moneyElement.addEventListener("input", () => {
            сharacterLimit(moneyElement);
        });
    };

    attachCharacterLimitListener();

    const updateCurrencyConversionResult = () => {
    const moneyElement = document.querySelector(".js-amount");
        const currencyElementFrom = document.querySelector(".js-currencyFrom");
        const currencyElementTo = document.querySelector(".js-currencyTo");
        const answerElement = document.querySelector(".js-result");
        const resultCurrency = document.querySelector(".js-resultCurrency");
        const money = moneyElement.value;
        const currencyFrom = currencyElementFrom.value;
        const currencyTo = currencyElementTo.value;
        const result = (money * currencyFrom) / currencyTo;
        answerElement.innerText = result.toFixed(2);
        const selectedCurrency = currencyElementTo.selectedOptions[0].textContent;
        resultCurrency.innerText = selectedCurrency;
    };

    const initializeApp = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", updateCurrencyConversionResult);
    };
    
initializeApp();
};
