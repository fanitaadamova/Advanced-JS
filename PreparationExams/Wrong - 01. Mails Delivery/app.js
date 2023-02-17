function solve() {
    let recipientNameElement = document.getElementById("recipientName");
    let titleElement = document.getElementById("title");
    let messageElement = document.getElementById("message");
    let listElementParent = document.getElementById("list");
    let addButtonelement = document.getElementById("add");
    let resetButtonElement = document.getElementById("reset");

    addButtonelement.addEventListener("click", (e) => {
        let nameRecipient = recipientNameElement.value;
        let title = titleElement.value;
        let message = messageElement.value;
        e.preventDefault()
        if (nameRecipient !== '' && title !== '' && message !== '') {
            recipientNameElement.value = '';
            titleElement.value = '';
            messageElement.value = '';

            //create elements
            const liElement = document.createElement("li");
            liElement.innerHTML = `
            <h4>Title: ${title}</h4>
                    <h4>Recipient Name: ${nameRecipient}</h4>
                    <span>${message}</span>
                    <div id="list-action">
                        <button type="submit" id="send">Send</button>
                        <button type="submit" id="delete">Delete</button>
                    </div>`;
            //append new elements
            listElementParent.appendChild(liElement);

            let sendButtonElement = document.getElementById("send");
            let deleteButtonElement = document.getElementById("delete");

            sendButtonElement.addEventListener("click", (e) => {
                //TO DO------------------
                let ulParent = document.querySelector(".sent-list")

                //да изтрия съдържанието
                let h4TagsElement = document.querySelectorAll('h4')
                let nameBefDel = h4TagsElement[0].textContent.slice(7)
                let titleBefDel = h4TagsElement[1].textContent.slice(16)

                sendButtonElement.parentElement.parentElement.remove()
                ////////????
                let liElementSentMails = document.createElement("li");
                liElementSentMails.innerHTML = `
                <span>To: ${nameBefDel}</span>
                        <span>Title: ${titleBefDel}</span>
                        <div class="btn">
                            <button type="submit" class="delete">Delete</button>
                        </div>
                `;
                ulParent.appendChild(liElementSentMails)

            })

            deleteButtonElement.addEventListener("click", (e) => {
                //TO DO-----------------


            })


        }
    })


    resetButtonElement.addEventListener("click", (e) => {
        e.preventDefault()

        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';

    })



}
solve()