function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalaSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      let output = {};


      for (const line of input) {
         let restorantInfo = line.split(' - ');
         let restorantName = restorantInfo.shift();
         let workerData = restorantInfo[0].split(', ');

         for (const worker of workerData) {
            let [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restorantName)) {
               output[restorantName] = {};
            }

            if (output.hasOwnProperty(restorantName)) {
               output[restorantName][name] = Number(salary);
            }
         }
      }

      let entries = Object.entries(output);

      for (let entry of entries) {
         //['Pix', {...}]
         let key = entry[0];
         let values = Object.entries(entry[1]);
         //console.log(values);
         for (let [name, salary] of values) {
            totalaSalary += salary
         }
         avgSalary = totalaSalary / values.length;
         if (avgSalary > currAvgSalary) {
            currAvgSalary = avgSalary;
            bestName = key;
            totalaSalary = 0;
         }
      }

      let relult = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);
      let print = '';
      relult.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${(relult[0][1]).toFixed(2)}`
      document.querySelector('#workers p').textContent = print;


   }
}