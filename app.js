import "./components/product-card.js";

window.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('product-card');

  setTimeout(() => {
    card.setAttribute('title', 'Zapatos Deportivos');
    card.setAttribute('price', '$89.99');
    card.setAttribute('img', './img/nike.png');  
    card.setAttribute('description', 'Cómodos zapatos para correr y caminar');
  }, 3000);
});
