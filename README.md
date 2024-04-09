# Hello and welcome to my currency calculator
Link to my [Currency calculator](https://maxfadet.github.io/currency_calculator/)

And also my  [git hub page](https://github.com/maxFadet/currency_calculator)

---

This converter converts **PLN to EUR and USD**, **USD to PLN and USD**, **EUR to PLN and USD**.

The code is written in accordance with the BEM convention.

---

## How does it work

1. Basic actions performed on the page:

![Basic actions performed on the page](https://github.com/maxFadet/currency_calculator/blob/main/image/Converter.gif "Converter")

2. This demonstrates the limited number of digits allowed for input in the **_Wymieniam_*** field:

![Limitation of input characters](https://github.com/maxFadet/currency_calculator/blob/main/image/ConverterActionNr1.gif "Action Number 1")

This result was achieved using this part of the code in JavaScript:
```javascript
// Limit input to 13 characters
    
    let maxLength = 13;
    let inputValue = moneyElement.value;
    if (inputValue.length > maxLength) {
        moneyElement.value = inputValue.slice(0, maxLength);
    }
```

3. Responsiveness of the page is demonstrated here:

![Responsiveness of the page](https://github.com/maxFadet/currency_calculator/blob/main/image/ConverterActionNr2.gif "Action Number 2")

