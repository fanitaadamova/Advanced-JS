function solve() {

  let inputElement = document.getElementById('input');
  let textArray = inputElement.value.split('.').filter(sentance => sentance !== '');
  let outputDiv = document.getElementById('output');
  //console.log(textArray);

  while (textArray.length > 0) {
    let text = textArray.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = text;
    outputDiv.appendChild(p)
  }

}