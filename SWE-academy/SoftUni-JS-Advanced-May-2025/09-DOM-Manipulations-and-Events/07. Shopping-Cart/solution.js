function solve() {
   const eventTarget = document.getElementsByClassName('product');
   let textArea = document.querySelector('textarea');
   const checkoutBtn = document.querySelector('.checkout');

   let totalPrice = 0;
   let finalProducts = [];
   let allBtn = [...document.getElementsByTagName('button')];

   for (const product of eventTarget) {
      product.addEventListener('click', (e) => {
         if (e.target.classList.contains('add-product')) {
            let productName = product.querySelector('.product-title');
            let productPrice = product.querySelector('.product-line-price');

            totalPrice += Number(productPrice.textContent);
            if (!finalProducts.includes(productName.textContent)) {
               finalProducts.push(productName.textContent);
            }
            textArea.textContent += `Added ${productName.textContent} for ${productPrice.textContent} to the cart.\n`;
         }
      });
   }

   checkoutBtn.addEventListener('click', () => {
      textArea.textContent += `You bought ${finalProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;

      allBtn.forEach((button, i) => {
         button.disabled = true;
      });
   });
}