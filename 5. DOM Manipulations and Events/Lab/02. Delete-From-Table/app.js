function deleteByEmail() {
    //get input Element
    const emailInputElement = document.querySelector('input[name="email"]');
    const emailCellElemets = document.querySelectorAll('tr td:nth-of-type(2)');
    const resultDivElemet = document.getElementById('result');

    let isDeleted = false;

    let emailElements = Array.from(emailCellElemets);
    let targetElement = emailElements.find(x => x.textContent == emailInputElement.value);

    if (targetElement) isDeleted = true;
    //delete element with parent (all row(tr), not only element)

    if (isDeleted == true) {
        targetElement.parentNode.remove();
        resultDivElemet.textContent = 'Deleted.'
    } else {
        resultDivElemet.textContent = 'Not found.'
    }

}