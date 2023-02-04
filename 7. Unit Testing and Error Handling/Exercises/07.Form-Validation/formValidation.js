function validate() {

    const companyField = document.getElementById('companyInfo');
    const companyCheck = document.getElementById('company');
    const form = document.getElementById('registerForm');

    companyCheck.addEventListener('change', () => {
        if (companyCheck.checked) {
            companyField.style.display = 'block'
        } else {
            companyField.style.display = 'none'
        }
    })

    form.addEventListener('submit', (e) => {
        //за да не се рефрешва страницата
        e.preventDefault()

        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const conformPassInput = document.getElementById('confirm-password');
        const companyNumberInput = document.getElementById('companyNumber');
        const validField = document.getElementById('valid');


        //The username needs to be between 3 and 20 symbols inclusively and only letters and numbers are allowed.
        const usernamePattern = /^[a-zA-Z0-9]+$/
        //The password and confirm-password must be between 5 and 15 inclusively symbols and only word characters are allowed (letters, numbers, and _).
        const passwordPattern = /^[\w]+$/
        //The email must contain the “@” symbol and at least one "."(dot) after it.
        const emailPattern = /.*@.*\..*/


        let usernameIsValid = false;
        let passIsValid = false;
        let conformPassIsValid = false;
        let emailIsvalid = false;
        let companyNumberIsValid = false;

        if (usernamePattern.test(usernameInput.value)
            && usernameInput.value.length >= 3
            && usernameInput.value.length <= 20) {
            usernameIsValid = true;
        }

        if (emailPattern.test(emailInput.value)) {
            emailIsvalid = true;
        }

        if (passwordPattern.test(passwordInput.value)
            && passwordInput.value.length >= 5
            && passwordInput.value.length <= 15
            && passwordInput.value === conformPassInput.value) {
            passIsValid = true;
            conformPassIsValid = true;
        }

        if (companyCheck.checked) {
            if (companyNumberInput.value >= 1000 && companyNumberInput.value <= 9999) {
                companyNumberIsValid = true;
            } 

        }else {
            companyNumberIsValid = true;
        }

        if (usernameIsValid && passIsValid && conformPassInput && emailIsvalid
            && companyNumberIsValid) {
            validField.style.display = 'block'
        }


        if (!usernameIsValid) {
            usernameInput.style.borderColor = 'red';
        }

        if (!passIsValid) {
            passwordInput.style.borderColor = 'red';
        }

        if (!conformPassIsValid) {
            conformPassInput.style.borderColor = 'red';
        }

        if(!emailIsvalid){
           emailInput.style.borderColor = 'red';
        }

        if (!companyNumberIsValid) {
            companyNumberInput.style.borderColor = 'red';
        }

    })
}
