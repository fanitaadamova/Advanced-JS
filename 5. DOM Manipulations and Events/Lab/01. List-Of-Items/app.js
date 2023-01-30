function addItem() {
    const input = document.getElementById("newItemText").value;
    const parent = document.getElementById('items')

    let li = document.createElement("li");
    parent.appendChild(li)

    li.textContent = input
}