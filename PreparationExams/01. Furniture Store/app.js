window.addEventListener('load', solve);

function solve() {

    const modelElement = document.getElementById("model");
    const yearElement = document.getElementById("year");
    const descriptionElement = document.getElementById("description");
    const priceElement = document.getElementById("price");
    const addButtonElement = document.getElementById("add");

    const tableBodyParent = document.getElementById('furniture-list')
    //Take the element with class "total-price"
    let totalPriceElement = document.querySelector(".total-price")

    addButtonElement.addEventListener('click', (e) => {
        //ВАЖНО - за да не се презарежда страницата при клик на бутона
        e.preventDefault()

        if (modelElement.value !== '' && descriptionElement.value !== '' && Number(yearElement.value) > 0 && Number(priceElement.value) > 0) {
            let modelValue = modelElement.value;
            let descritpionValue = descriptionElement.value;
            let year = yearElement.value
            let price = Number(priceElement.value).toFixed(2)
            //delete all input values
            modelElement.value = '';
            descriptionElement.value = '';
            yearElement.value = '';
            priceElement.value = '';
            //create elements 1 tr append tableBodyParent
            const tr = document.createElement("tr");
            //create 3 elements td append tr
            const td1 = document.createElement("td");
            td1.textContent = modelValue;
            const td2 = document.createElement("td");
            td2.textContent = price;
            const td3 = document.createElement("td")
            //create 2 buttons
            const moreInfoButtonElement = document.createElement("button");
            const buyButtonElement = document.createElement("button");
            moreInfoButtonElement.textContent = "More Info"
            buyButtonElement.textContent = "Buy it"
            td3.appendChild(moreInfoButtonElement);
            td3.appendChild(buyButtonElement);
            //add name of some class element
            tr.classList.add('info');
            moreInfoButtonElement.classList.add('moreBtn');
            buyButtonElement.classList.add('buyBtn');

            tableBodyParent.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);



            //Create hiden elements
            let hideRow = document.createElement("tr");
            hideRow.classList.add('hide');
            hideRow.style.display = 'none';
            let yearTd = document.createElement("td");
            let descriptionContentTd = document.createElement("td");
            yearTd.textContent = `Year: ${year}`
            descriptionContentTd.textContent = `Description: ${descritpionValue}`

            //The second <td> must-have attribute colspan with value 3.
            descriptionContentTd.setAttribute('colspan', 3);
            hideRow.appendChild(yearTd)
            hideRow.appendChild(descriptionContentTd)
            tableBodyParent.appendChild(hideRow);

            moreInfoButtonElement.addEventListener("click", (e) => {
                if (e.currentTarget.textContent == "More Info") {
                    hideRow.style.display = 'contents';
                    e.currentTarget.textContent = "Less Info"
                } else {
                    e.currentTarget.textContent = "More Info"
                    hideRow.style.display = 'none';
                }
            })

        
            buyButtonElement.addEventListener("click", (e) => {

                let currentPrice =  Number(totalPriceElement.textContent)
                totalPriceElement.textContent = (currentPrice + Number(price)).toFixed(2)
                tr.remove()
                hideRow.remove()
                

            })

        }

    })



}

