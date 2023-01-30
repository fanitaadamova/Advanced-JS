function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    const gradientMouseOverHandler = (event) =>{
         let percentage  = Math.floor((event.offsetX / event.target.clientWidth) * 100);
         resultElement.textContent = `${percentage}%`;
    }

    gradientElement.addEventListener('mousemove', gradientMouseOverHandler)

}