window.addEventListener('load', solve);

function solve() {

    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const numOfPepleElement = document.getElementById('people-count');
    const fromDateElement = document.getElementById('from-date');
    const daysElement = document.getElementById('days-count');

    const nextButton = document.getElementById('next-btn');
    const ticketInfoList = document.querySelector('#info-ticket ul');
    const conformationList = document.querySelector('#confirm-ticket-section ul');


    nextButton.addEventListener('click', (e) => {
        e.preventDefault();

        const firstName = firstNameElement.value;
        const lastName = lastNameElement.value;
        const numOfPeple = numOfPepleElement.value;
        const days = daysElement.value;
        const fromDate = new Date(fromDateElement.value);
        //заради форматирането
        const fromDateInValue = fromDateElement.value;


        if (firstName === '' || lastName === '' || numOfPeple === '' ||
            fromDateInValue === '' || days === '') {
            return;
        }

        let liElement = document.createElement("li");
        liElement.className = 'ticket';
        let article = document.createElement("article");

        let h3Name = document.createElement("h3");
        h3Name.textContent = `Name: ${firstName} ${lastName}`;
        let p1 = document.createElement("p");
        p1.textContent = `From date: ${fromDateInValue}`
        let p2 = document.createElement("p");
        p2.textContent = `For ${days} days`
        let p3 = document.createElement("p");
        p3.textContent = `For ${numOfPeple} people`

        let editButtonElement = document.createElement("button");
        let continueButtonElement = document.createElement("button");
        editButtonElement.textContent = "Edit"
        continueButtonElement.textContent = "Continue"
        editButtonElement.className = 'edit-btn';
        continueButtonElement.className = 'continue-btn';

        //Append new elements
        ticketInfoList.appendChild(liElement);
        liElement.appendChild(article);
        article.appendChild(h3Name);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        liElement.appendChild(editButtonElement);
        liElement.appendChild(continueButtonElement);

        //delete all input fields info
        firstNameElement.value = '';
        lastNameElement.value = '';
        numOfPepleElement.value = '';
        fromDateElement.value = '';
        daysElement.value = '';
        //desable next button
        nextButton.disabled = true;

        editButtonElement.addEventListener('click', (e) => {
            nextButton.disabled = false;

            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            fromDateElement.value = fromDateInValue;
            daysElement.value = days;
            numOfPepleElement.value = numOfPeple;

            editButtonElement.parentElement.remove();
        })


        continueButtonElement.addEventListener('click', (e) => {
            //така премествам цялата колекция
            ///ВАЖНООООООООООООООООООООООООООООООО
            conformationList.appendChild(liElement);

            editButtonElement.remove()
            continueButtonElement.remove()

            let confirmButtonElement = document.createElement("button");
            let cancelButtonElement = document.createElement("button");
            liElement.appendChild(confirmButtonElement);
            liElement.appendChild(cancelButtonElement);

            confirmButtonElement.textContent = "Confirm"
            cancelButtonElement.textContent = "Cancel"
            confirmButtonElement.className = 'confirm-btn';
            cancelButtonElement.className = 'cancel-btn';
            liElement.className = 'ticket-content';
            //Confirm Button
            confirmButtonElement.addEventListener('click', (e) => {

                document.getElementById('main').remove();
                let body = document.getElementById('body')
                let h1Element = document.createElement("h1");
                h1Element.setAttribute('id', 'thank-you');
                h1Element.textContent = "Thank you, have a nice day!"

                let backButtonElement = document.createElement("button");
                backButtonElement.textContent = "Back ";
                backButtonElement.setAttribute('id', 'back-btn');

                body.appendChild(h1Element);
                body.appendChild(backButtonElement);

                backButtonElement.addEventListener('click', (e) => {
                    location.reload()
                })

            })

            //Cancel Button
            cancelButtonElement.addEventListener('click', (e) => {
                cancelButtonElement.parentElement.remove();

                nextButton.disabled = false;

            })

        })

    })

}




