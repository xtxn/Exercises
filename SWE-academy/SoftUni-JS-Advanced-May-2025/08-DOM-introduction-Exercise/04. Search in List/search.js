function search() {
   const list = document.getElementById('towns');
   let search = document.getElementById('searchText');
   let output = document.getElementById('result');

   let matches = 0;
   for (const town of list.children) {
      if (town.style.fontWeight == 'bold') {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }

      let text = town.textContent;
      if (text.includes(search.value)) {
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }
   output.textContent = `${matches} matches found`
}
