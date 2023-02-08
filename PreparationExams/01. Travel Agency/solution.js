window.addEventListener('load', solution);

function solution() {
  const fullNameElement = document.getElementById('fname');
  const emailElement = document.getElementById('email');
  const phoneElement = document.getElementById('phone');
  const addressElement = document.getElementById('address');
  const codeElement = document.getElementById('code');

  const submitButton = document.getElementById('submitBTN');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');

  const block = document.getElementById('block');
  const infoPreviewUlElement = document.getElementById('infoPreview');
  //Save current information about Reservation
  let currentName = '';
  let currentEmail = '';
  let currentPhone = '';
  let currentAdress = '';
  let currentCode = '';

  submitButton.disabled = false;
  editButton.disabled = true;
  continueButton.disabled = true;

  submitButton.addEventListener('click', (e) => {
    //create all li elements
    if (fullNameElement.value !== '' && emailElement.value !== '') {
      //create element
      const li1 = document.createElement("li");
      li1.textContent = `Full Name: ${fullNameElement.value}`;
      infoPreviewUlElement.appendChild(li1)

      const li2 = document.createElement("li");
      li2.textContent = `Email: ${emailElement.value}`;
      infoPreviewUlElement.appendChild(li2)

      const li3 = document.createElement("li");
      li3.textContent = `Phone Number: ${phoneElement.value}`;
      infoPreviewUlElement.appendChild(li3)

      const li4 = document.createElement("li");
      li4.textContent = `Address: ${addressElement.value}`;
      infoPreviewUlElement.appendChild(li4)

      const li5 = document.createElement("li");
      li5.textContent = `Postal Code: ${codeElement.value}`;
      infoPreviewUlElement.appendChild(li5)

      //set current data for reservation
      currentName = fullNameElement.value;
      currentEmail = emailElement.value;
      currentPhone = phoneElement.value;
      currentAdress = addressElement.value;
      currentCode = codeElement.value;

      //clear inputs fields
      fullNameElement.value = '';
      emailElement.value = '';
      phoneElement.value = '';
      addressElement.value = '';
      codeElement.value = '';

      //enable another buttons
      continueButton.disabled = false;
      editButton.disabled = false;
      //disable Submit button
      submitButton.disabled = true;

    }

    editButton.addEventListener('click', (e) => {
      //console.log(currentEmail);
      fullNameElement.value = currentName;
      emailElement.value = currentEmail;
      phoneElement.value = currentPhone;
      addressElement.value = currentAdress;
      codeElement.value = currentCode;

      //clear data from infoPreviewUlElement
      let itemsFordelete = document.querySelectorAll("#infoPreview li")
      for (const li of itemsFordelete) {
        li.remove()
      }
      //enable another buttons
      submitButton.disabled = false;
      editButton.disabled = true;
      continueButton.disabled = true;

    })


    continueButton.addEventListener('click', (e) => {
      block.innerHTML = '';
      let h3 = document.createElement('h3');
      h3.textContent = 'Thank you for your reservation!'
      block.appendChild(h3)

    })

  })
}
