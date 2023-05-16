async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:3000');
    const products = await response.json();

    displayProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function displayProducts(products: any[]) {
  const productList = document.createElement('ul');
  products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - ${product.price}`;
    productList.appendChild(listItem);
  });

  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.appendChild(productList);
  }
}

fetchProducts();
