function create(words) {
   let appentTo = document.getElementById('content')

   for (const word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      appentTo.appendChild(div);
   }

   appentTo.addEventListener('click', (e) => {
      let target = e.target.children[0];
      target.style.display = target.style.display == 'none' ? '' : 'none';
   });
}