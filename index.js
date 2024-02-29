

let openNav = document.getElementById('nav-open');
let navItem = document.getElementById('nav-items');
let bavClose = document.getElementById('nav-close');

cliked = 1;
openNav.addEventListener('click', () => {
    if(cliked === 1){
        navItem.classList.remove('hidden');
        cliked += 1;
    }else{
        navItem.classList.add('hidden');
        cliked = 1 ;
    }

});

bavClose.addEventListener('click', () => {
    navItem.classList.add('hidden');
});

let productContainer = document.getElementById('container');
let lestestProduct = document.getElementById('LETEST');
let itemList = [];

addData = (containerId) => {
  if (itemList.length > 0) {
    itemList.forEach(element => {
      let item = document.createElement(`div`);
      item.innerHTML = `
        <img src=${element.image} alt="product">
        <h5 id="title" class="title">
          ${element.model} <br>
          ${element['one-liner']}<br> <!-- Use square brackets for property name with special characters -->
          ${element.type}
        </h5>
      `;
      containerId.appendChild(item);
    });
  }
}

productsData = (product) => {
  fetch("/files/product.json")
    .then(response => response.json())
    .then(data => {
      itemList = data; // Assign fetched data to itemList
      addData(product); // Call addData after fetching the data
    });
}

productsData(productContainer);
productsData(lestestProduct);

