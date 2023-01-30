function solve() {

  const [generateButton, buyButton] = Array.from(
    document.querySelectorAll('button'));

  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  function generate() {
    const input = JSON.parse(document.querySelector('textarea').value);

    input.forEach((product) => {
      const tr = document.createElement("tr");
      //1 - create img
      const td1 = document.createElement("td");
      const img = document.createElement("img");
      img.src = product.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      //2 - create name
      const p1 = document.createElement("p");
      const td2 = document.createElement("td");
      p1.textContent = product.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      //3 - create price Number
      const p2 = document.createElement("p");
      const td3 = document.createElement("td");
      p2.textContent = Number(product.price);
      td3.appendChild(p2);
      tr.appendChild(td3);
      // - create decFactor Number
      const p3 = document.createElement("p");
      const td4 = document.createElement("td");
      p3.textContent = Number(product.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);
      //5 *- create  checkbox
      const td5 = document.createElement("td");
      const input = document.createElement("input");
      input.type = "checkbox"
      td5.appendChild(input);
      tr.appendChild(td5);
      //append tr
      document.querySelector('tbody').appendChild(tr);
    });

  }

  function buy() {
    const checkBoxes = Array.from(document.querySelectorAll('tbody input')).filter((x) => x.checked);
    const bought = [];
    let price = 0;
    let decoration = 0;
    checkBoxes.forEach(element => {
      //get tr
      let parent = element.parentElement.parentElement;
      const data = Array.from(parent.querySelectorAll('p'));
      bought.push(data[0].textContent);
      price += Number(data[1].textContent);
      decoration += Number(data[2].textContent);
    });

    let output = document.querySelectorAll('textarea')[1];
    output.textContent += `Bought furniture: ${bought.join(', ')}\r\n`
    output.textContent += `Total price: ${price.toFixed(2)}\r\n`
    output.textContent += `Average decoration factor: ${decoration / checkBoxes.length}`
  }

}