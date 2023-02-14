function solve() {

    const firstNameElement = document.getElementById('fname');
    const lastNameElement = document.getElementById('lname');
    const emailElement = document.getElementById('email');
    const birthElement = document.getElementById('birth');
    const positionElement = document.getElementById('position');
    const salaryElement = document.getElementById('salary');
    const tbodyElement = document.getElementById('tbody');
    const addWorkerButton = document.getElementById('add-worker')
    const totalSumElement = document.getElementById('sum');

    addWorkerButton.addEventListener('click', (e) => {
        e.preventDefault();

        const firstName = firstNameElement.value;
        const lastName = lastNameElement.value;
        const email = emailElement.value;
        const birthDay = birthElement.value;
        const position = positionElement.value;
        const salary = salaryElement.value;
        if (firstName && lastName && email && birthDay && position && salary) {

            let rowElement = document.createElement("tr");
            //create elements td append tr
            let tdFirst = document.createElement("td");
            tdFirst.textContent = firstName;
            let tdLast = document.createElement("td");
            tdLast.textContent = lastName;
            let tdEmail = document.createElement("td");
            tdEmail.textContent = email;
            let tdBirhday = document.createElement("td");
            tdBirhday.textContent = birthDay;
            let tdPosition = document.createElement("td");
            tdPosition.textContent = position;
            let tdSalary = document.createElement("td");
            tdSalary.textContent = salary;
            let tdButtons = document.createElement("td");
            //create 2 buttons
            let firedButtonElement = document.createElement("button");
            let editButtonElement = document.createElement("button");
            firedButtonElement.textContent = "Fired"
            editButtonElement.textContent = "Edit"
            firedButtonElement.className = 'fired';
            editButtonElement.className = 'edit';
            //append all new elements
            tbodyElement.appendChild(rowElement);
            rowElement.appendChild(tdFirst);
            rowElement.appendChild(tdLast);
            rowElement.appendChild(tdEmail);
            rowElement.appendChild(tdBirhday);
            rowElement.appendChild(tdPosition);
            rowElement.appendChild(tdSalary);
            rowElement.appendChild(tdButtons);
            tdButtons.appendChild(firedButtonElement);
            tdButtons.appendChild(editButtonElement);

            totalSumElement.textContent = (Number(totalSumElement.textContent) + Number(salary)).toFixed(2);
            //delete input fieldsvalue
            firstNameElement.value = '';
            lastNameElement.value = '';
            emailElement.value = '';
            birthElement.value = '';
            positionElement.value = '';
            salaryElement.value = '';

            editButtonElement.addEventListener('click', (e) => {
                firstNameElement.value = firstName;
                lastNameElement.value = lastName;
                emailElement.value = email;
                birthElement.value = birthDay;
                positionElement.value = position;
                salaryElement.value = salary;
                totalSumElement.textContent = (Number(totalSumElement.textContent) - Number(salary)).toFixed(2);
                e.target.parentElement.parentElement.remove();
            })

             firedButtonElement.addEventListener('click', (e)=>{
                totalSumElement.textContent = (Number(totalSumElement.textContent) - Number(salary)).toFixed(2);
                e.target.parentElement.parentElement.remove();

             })
        }


    })
}
solve()