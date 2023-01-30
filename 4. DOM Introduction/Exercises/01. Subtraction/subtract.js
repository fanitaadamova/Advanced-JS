function subtract() {
    const firstInput = document.getElementById('firstNumber').value;
    const secondInput = document.getElementById('secondNumber').value;

    const result = document.getElementById('result');

    const finalResult = Number(firstInput) - Number(secondInput);
    result.textContent = finalResult;

}