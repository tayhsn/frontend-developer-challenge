/**
 * This script have the following responsabilities:
 * FILL IN THE DATA ON EMAIL
 */

import { getData } from './data.js';


/**
 * @let {number} numItems - control variable that receives the size of the object
 * @function getData - function called from DATA.JS
 * @then - pass the response data as a params
 * @function fillCardsIndex(params) - receives the data as parameter and dynamically creates each product card  
 */

let numItems;

getData().then(data => {
   numItems = data.length
   fillCardsEmail(data)
})

/**
 * @let {number} items - control variable that defines the number of items that will be created on the page
 * @constant card - takes the div that receives the products container
 * @function fillCardsIndex(params) - receives the data as parameter and dynamically creates each product card
 * @param {object} data - object returned as response from API.
 */

let items = 0;

const card = document.querySelector('#email-products');

export function fillCardsEmail(data) {
	card.innerHTML += data
                     .slice(items, items + 2)
                     .map((product) => {
                        const card = `
                     <div class="product">
                           <div class="image">
                              <img src="${product.image}" alt="Foto do produto">
                           </div>
               
                           <div class="info">
                              <h2 class="name">${product.name}</h2>
                              <p class="overlay description">${product.description}</p>
                              <h3>De: R$${product.oldPrice}</h3>
                              <h1>Por: R$${product.price}</h1>
                              <h3>ou ${product.count}x de R$${product.value}</h3>
                              <button id="buy">Comprar</button>
                           </div>
                     </div>
                     `;
                        return card;
                     }).join('');
}



/**
 * @let {number} pages - page control variable
 * @constant btnMoreProducts - take the button that calls for more products 
 * @event onclick - increment the number of items by 2
 * @if - the number of items are equals the object size, increment pages by 1 & set items = 0
 * @function getData(params) - call the function passing the page number as parameter
 * @function fillCardsIndex - receives the data and creates the news products
 */

let pages = 1
const btnMoreProducts = document.getElementById("email-more-products");
btnMoreProducts.addEventListener('click', () => {
   items += 2;

   if(items == numItems) {
      pages++;
      items = 0
   }

	getData(pages).then(data => fillCardsEmail(data))
});