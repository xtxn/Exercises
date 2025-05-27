function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      if (document.getElementById('searchField').value !== '') {
         let input = document.getElementById('searchField').value;
         input = input.toLowerCase();

         let rowList = document.querySelectorAll('.container > tbody tr');

         for (const row of rowList) {
            //row class reset
            row.setAttribute('class', '')

            for (const el of row.children) {

               let elLower = el.textContent.toLowerCase();

               if (elLower.includes(input)) {
                  row.setAttribute('class', 'select');
               }
            }
         }
         //search text reset
         document.getElementById('searchField').value = '';
      }
   }
}