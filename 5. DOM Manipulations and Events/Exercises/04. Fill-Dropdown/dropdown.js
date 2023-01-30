function addItem() {
    let newText = document.getElementById('newItemText')
    let newValue = document.getElementById('newItemValue')
    let parent = document.getElementById('menu');

    let option = document.createElement('option')
    option.text = newText.value;
    option.value = newValue.value;

    if (newText.value !== '' && newValue.value !== '') {
        parent.appendChild(option);
    }

    newText.value = ''
    newValue.value = ''

}