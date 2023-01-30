function addItem() {

    const itemsElemet = document.getElementById("items")
    const inputElement = document.getElementById("newItemText");

    let liElement = document.createElement("li");
    liElement.textContent = inputElement.value;
    inputElement.value = ''
    //create a [Delete] link after each list item. You have to add href="#" to the link element.
    let deleteElement = document.createElement("a")
    deleteElement.href = "#"
    deleteElement.textContent = "[Delete]"

    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    })

    itemsElemet.appendChild(liElement);
    liElement.appendChild(deleteElement);
}