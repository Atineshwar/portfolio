const cart = [];

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function () {
    const productCard = this.closest('.card');
    const name = productCard.querySelector('.card-title').innerText;
    const priceText = productCard.querySelector('.price').innerText;
    const price = parseFloat(priceText.replace('$', ''));

    const product = { name, price };
    cart.push(product);
    alert(`${product.name} added to cart!`);
    localStorage.setItem('cart', JSON.stringify(cart));
  });
});



