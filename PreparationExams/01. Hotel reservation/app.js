//64 % judge

window.addEventListener('load', solve);
function solve() {
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const checkInElement = document.getElementById('date-in');
    const outCheckElement = document.getElementById('date-out');
    const numOfGuestsElement = document.getElementById('people-count');
    const nextButton = document.getElementById('next-btn');

    const reservationInfo = document.querySelector('#info-reservations ul');
    const conformationList = document.querySelector('#confirm-reservations ul');
    const completeReservation = document.querySelector('#complete-reservation #verification')

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        const firstName = firstNameElement.value;
        const lastName = lastNameElement.value;
        const dateIn = new Date(checkInElement.value);
        const dateOut = new Date(outCheckElement.value);
        const dataInValue = checkInElement.value;
        const dateOutValue = outCheckElement.value;
        const numOfGuest = numOfGuestsElement.value;

        if (firstName === '' || lastName === '' || numOfGuest === '' ||
            dateIn == 'Invalid Date' || dateOut == 'Invalid Date' || (dateIn < dateOut) == false) {
            return;
        }

        let liElement = document.createElement("li");
        liElement.className = 'reservation-content';
        let article = document.createElement("article");

        let h3Name = document.createElement("h3");
        h3Name.textContent = `Name: ${firstName} ${lastName}`;
        let p1 = document.createElement("p");
        p1.textContent = `From date: ${dataInValue}`
        let p2 = document.createElement("p");
        p2.textContent = `To date: ${dateOutValue}`
        let p3 = document.createElement("p");
        p3.textContent = `For ${numOfGuest} people`


        let editButtonElement = document.createElement("button");
        let continueButtonElement = document.createElement("button");
        editButtonElement.textContent = "Edit"
        continueButtonElement.textContent = "Continue"
        editButtonElement.className = 'edit-btn';
        continueButtonElement.className = 'continue-btn';

        //Append new elements
        reservationInfo.appendChild(liElement);
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
        checkInElement.value = '';
        outCheckElement.value = '';
        numOfGuestsElement.value = '';

        nextButton.disabled = true;


        editButtonElement.addEventListener('click', (e) => {
            nextButton.disabled = false;

            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            checkInElement.value = dataInValue;
            outCheckElement.value = dateOutValue;
            numOfGuestsElement.value = numOfGuest;

            editButtonElement.parentElement.remove();
        })

        continueButtonElement.addEventListener('click', (e) => {
            //така премествам цялата колекция
            conformationList.append(editButtonElement.parentElement);

            editButtonElement.remove()
            continueButtonElement.remove()

            let confirmButtonElement = document.createElement("button");
            let cancelButtonElement = document.createElement("button");

            liElement.appendChild(confirmButtonElement);
            liElement.appendChild(cancelButtonElement);

            //liElement.appendChild(editButtonElement);
            //liElement.appendChild(continueButtonElement);

            confirmButtonElement.textContent = "Confirm"
            cancelButtonElement.textContent = "Cancel"
            confirmButtonElement.className = 'confirm-btn';
            cancelButtonElement.className = 'cancel-btn';
            //Confirm Button
            confirmButtonElement.addEventListener('click', (e) => {
                confirmButtonElement.parentElement.remove();
                completeReservation.className = 'reservation-confirmed';
                completeReservation.textContent = 'Confirmed.';

                nextButton.disabled = false;

            })

            //Cancel Button
            cancelButtonElement.addEventListener('click', (e) => {
                cancelButtonElement.parentElement.remove();
                completeReservation.className = 'reservation-cancelled';
                completeReservation.textContent = 'Cancelled.';

                nextButton.disabled = false;

            })

        })
    })

}





