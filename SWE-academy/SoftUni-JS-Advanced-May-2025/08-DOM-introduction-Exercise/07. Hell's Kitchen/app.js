function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const inputArea = document.querySelector('#inputs > textarea');
   const bestRestaurant = document.querySelector('#bestRestaurant p');
   const bestWorker = document.querySelector('#workers p')

   function onClick() {
      let inputText = inputArea.value;
      let restaurantList = JSON.parse(inputText);

      let result = {};

      for (const el of restaurantList) {
         let [name, workers] = el.split(' - ');

         if (!result.hasOwnProperty(name)) {
            result[name] = {
               avgSalary: 0,
               bestSalary: 0,
               workers: [],
            }
         }

         let workerSalaryData = workers.split(', ');

         for (const line of workerSalaryData) {

            let [worker, salary] = line.split(' ');
            salary = Number(salary);

            result[name].workers.push({ worker, salary })

            if (result[name].bestSalary < salary) {
               result[name].bestSalary = salary;
            }
         }

         let totalSalary = 0;
         for (const workerObj of result[name].workers) {
            totalSalary += workerObj.salary;
         }
         result[name].avgSalary = totalSalary / result[name].workers.length;
      }

      let bestAvgSalary = 0;
      let best = '';

      for (const currentRestaurant in result) {
         if (result[currentRestaurant].avgSalary > bestAvgSalary) {
            bestAvgSalary = result[currentRestaurant].avgSalary
            best = currentRestaurant;
         }
      }

      bestRestaurant.textContent = `Name: ${best} Average Salary: ${result[best].avgSalary.toFixed(2)} Best Salary: ${result[best].bestSalary.toFixed(2)}`;

      let workersOutput = [];

      let sorted = result[best].workers.sort((a, b) => ((b.salary)) - (a.salary));

      for (const workerObj of sorted) {

         workersOutput.push(`Name: ${workerObj.worker} With Salary: ${workerObj.salary} `);
      }

      bestWorker.textContent = workersOutput.join('').trim();
   }
}
