function create(input) {

   let parentElement = document.getElementById('content');
   let elements = input;

   for (const element of elements) {
      let div = document.createElement("div");
      let p = document.createElement("p");   
      p.textContent = element;
      p.style.display = "none"

      div.appendChild(p);     
      div.addEventListener("click", (event) => {
        event.target.querySelector('p').style.display = "block"
      })

      parentElement.appendChild(div);
   }


}