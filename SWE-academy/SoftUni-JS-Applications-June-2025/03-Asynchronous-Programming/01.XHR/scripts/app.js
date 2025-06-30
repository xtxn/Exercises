function loadRepos() {
   const output = document.getElementById('res');
   let url = 'https://api.github.com/users/testnakov/repos';
   const httpRequest = new XMLHttpRequest();
   httpRequest.addEventListener('readystatechange', () => {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
         output.textContent = httpRequest.responseText;
      }
   });
   httpRequest.open("GET", url);
   httpRequest.send();

}