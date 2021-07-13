/**
 * This script have the following responsabilities:
 * FILL IN THE DATA ON INDEX
 */

import { getData } from './data.js';


/**
 *
 * @function getData - function called from DATA.JS
 * @then pass the response data as a params
 * @function fillCardsIndex(params) - receives the data as parameter and dynamically creates each product card  
 */

getData().then(data => fillCardsIndex(data))



/**
 *
 * @constant card - takes the div that receives the products container
 * @function fillCardsIndex(params) - receives the data as parameter and dynamically creates each product card
 * @param {object} data - object returned as response from API.
 */

const card = document.querySelector('#products');

export function fillCardsIndex(data) {
	card.innerHTML += data
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
		})
		.join('');
}


/**
 * @let {number} pages - page control variable
 * @constant btnMoreProducts - take the button that calls for more products * @event onclick increment the number of pages by 1
 * @function getData(params) - call the function passing the page number as parameter
 * @function fillCardsIndex - receives the data and creates the news products
 */

let pages = 1;
const btnMoreProducts = document.getElementById('more-products');
btnMoreProducts.addEventListener('click', () => {
   pages++;

	getData(pages).then(data => fillCardsIndex(data))
});

