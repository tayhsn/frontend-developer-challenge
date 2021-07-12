/**
 * FILL OUT THE DATA IN INDEX
 */

import { getData } from './data.js';

const data = getData();

/**
 *
 * @constant card - div who receive the cards.
 * @param {object} products - object returned from the getData function.
 */
const card = document.querySelector('#products');

export function fillCardsIndex(products) {
	card.innerHTML += products
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
 * 3_ MORE-PRODUCTS button events
 * @constant btnMoreProducts - button of more products
 * @function - invoke the getData function adding +1 to pages
 */
const btnMoreProducts = document.querySelector('#more-products');
console.log(btnMoreProducts)
btnMoreProducts.addEventListener('click', () => {
   pages++;

	data.getData()
});

/**  3_ BUTTON BUY in MAIN PRODUCTS */
var btnBuy = document.querySelectorAll('#buy');
btnBuy.forEach((button) => {
	console.log(button);
	button.addEventListener('click', () => {
		alert('Obrigada pelo interesse nesse produto!');
	});
});
