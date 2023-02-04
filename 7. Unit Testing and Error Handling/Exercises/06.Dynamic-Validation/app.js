function validate() {

    const emailElement = document.querySelector('#email');

    const pattern = /^[a-z]+@[a-z]+.[a-z]+/
    //при change събитие сетва error class
    emailElement.addEventListener('change', (event) => {

        const emailtype = emailElement.value;
        if (pattern.test(emailtype)) {
            event.target.className = '';

        } else {
            event.target.className = 'error';
        }

    })

}