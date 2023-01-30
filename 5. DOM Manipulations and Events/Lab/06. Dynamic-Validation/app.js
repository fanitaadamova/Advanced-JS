function validate() {

    let patern = /[a-z]+@[a-z]+\.[a-z]+/g
    let inputElement = document.getElementById('email');


    inputElement.addEventListener('change', checkEmail);

    function checkEmail(event) {
        //patern.test(string) return boolen true or false match ot do not match
        if (patern.test(event.target.value)) {
            event.target.className = ""
        } else {
            event.target.className = 'error';
        }


    }
}

