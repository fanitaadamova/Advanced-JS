function solve() {

  const input = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  const finalResult = document.getElementById("result");

  //тук директно присвояваме резултата на променлива
  const toPascal = (text) =>
    text
      .split(" ")
      .map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase())
      .join("")


  //когато е във ф-я да има return
  const toCamel = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);

  }


  if (convention === "Pascal Case") {
    finalResult.textContent = toPascal(input)
  } else if (convention === "Camel Case") {
    finalResult.textContent = toCamel(input)
  } else {
    finalResult.textContent = "Error!"
  }

}

