function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const input = document.getElementById('searchField');
   const rows = document.querySelectorAll('tbody tr')

   function onClick() {
      //first step is to remove css class from previus clicked
      for (const row of rows) {
         row.classList.remove('select');
         if (input.value !== '' && row.innerHTML.includes(input.value)) {           
            row.className = 'select'
         }

      }
      //clear input field from current type
      input.value = ''
    
   }
}