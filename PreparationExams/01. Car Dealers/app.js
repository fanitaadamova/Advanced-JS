window.addEventListener("load", solve);
function solve() {

  const makeElement = document.getElementById("make");
  const modelElement = document.getElementById("model");
  const yearElement = document.getElementById("year");
  const fuelElement = document.getElementById("fuel");
  const originalCostElement = document.getElementById("original-cost");
  const sellingPriceElement = document.getElementById("selling-price");

  const publishButton = document.getElementById('publish')
  const tableElement = document.getElementById('table-body')
  const carsListElement = document.getElementById('cars-list')
  const profitElement = document.getElementById('profit')


  publishButton.addEventListener("click", (e) => {
    //ВАЖНО - за да не се презарежда страницата при клик на бутона
    e.preventDefault();

    const make = makeElement.value;
    const model = modelElement.value;
    const year = yearElement.value;
    const fuel = fuelElement.value;
    const originalCost = Number(originalCostElement.value);
    const sellingPrice = Number(sellingPriceElement.value);

    if (make != "" && model != "" && year !== "" && fuel != "" && originalCost != ""
      && sellingPrice != "" && sellingPrice > originalCost) {

      //clear input fields
      makeElement.value = '';
      modelElement.value = '';
      yearElement.value = '';
      fuelElement.value = '';
      originalCostElement.value = '';
      sellingPriceElement.value = '';

      let rowElement = document.createElement('tr');
      rowElement.classList.add('row');
      //create 3 elements td append tr
      let tdMake = document.createElement("td");
      tdMake.textContent = make;
      let tdModel = document.createElement("td");
      tdModel.textContent = model;
      let tdYear = document.createElement("td");
      tdYear.textContent = year;
      let tdFuel = document.createElement("td");
      tdFuel.textContent = fuel;
      let tdOriginalCost = document.createElement("td");
      tdOriginalCost.textContent = originalCost;
      let tdSellPrice = document.createElement("td");
      tdSellPrice.textContent = sellingPrice;
      let tdButtons = document.createElement("td");

      //create 2 buttons
      let editButtonElement = document.createElement("button");
      let sellButtonElement = document.createElement("button");
      editButtonElement.textContent = "Edit"
      sellButtonElement.textContent = "Sell"

      editButtonElement.className = 'action-btn edit';
      sellButtonElement.className = 'action-btn sell';

      //append all new elements
      tableElement.appendChild(rowElement);
      rowElement.appendChild(tdMake);
      rowElement.appendChild(tdModel);
      rowElement.appendChild(tdYear);
      rowElement.appendChild(tdFuel);
      rowElement.appendChild(tdOriginalCost);
      rowElement.appendChild(tdSellPrice);
      rowElement.appendChild(tdButtons);
      tdButtons.appendChild(editButtonElement);
      tdButtons.appendChild(sellButtonElement);
      

      //editButtonElement click
      editButtonElement.addEventListener("click", (e) => {
        makeElement.value = make;
        modelElement.value = model;
        yearElement.value = year;
        fuelElement.value = fuel;
        originalCostElement.value = originalCost;
        sellingPriceElement.value = sellingPrice;

        editButtonElement.parentElement.parentElement.remove();

      })
      //sellButtonElement click
      sellButtonElement.addEventListener("click", (e) => {

        // Тъй като всички тези функции са вложени имаш достъп до closure - тоест висчки променливи от по-горе са достъпни
        // Това ти спестява търсене и допълнителни манипулации и съответно тези редове остават излишни и Judge е Happy

        // Само този ред е необходим за да бъде изчислена печалбата
        const difference = Number(sellingPrice) - Number(originalCost);

        //delete all information
        sellButtonElement.parentElement.parentElement.remove();
        //append parent carsListElement
        let liElement = document.createElement('li');
        liElement.className = 'each-list';

        let spanMakeModel = document.createElement('span');
        spanMakeModel.textContent = `${make} ${model}`;
        let spanYear = document.createElement('span');
        spanYear.textContent = year;
        let spanDifference = document.createElement('span');
        spanDifference.textContent = difference;

        carsListElement.appendChild(liElement);
        liElement.appendChild(spanMakeModel);
        liElement.appendChild(spanYear);
        liElement.appendChild(spanDifference);

        profitElement.textContent = (Number(profitElement.textContent) + difference).toFixed(2);
      })
    }
  })
}