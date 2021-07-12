/**         
 * This script have the following responsabilities about DATA:
 * 1_ Consumer and Handling the API data 
 * 2_ Fill out the data on the card pages
 * 3_ MORE-PRODUCTS button events
 */


/**
 * 1_ Consumer and Handling the API data
 * @let {string} url - endpoint as params
 * @function getData - consume and handle the data.
 */

let pages = 1

async function getData() {
   
   await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${pages}`)
      .then(response => response.json())
      .then(data => {
         let products = data.products.map(product => {
               let object = {
                  'id': product.id,
                  'name': product.name,
                  'image': product.image,
                  'oldPrice': product.oldPrice,
                  'price': product.price,
                  'description': product.description,
                  'count': product.installments.count,
                  'value': product.installments.value,
                  'nextPage': product.nextPage
               }
               return object;
         })
            
         fillCard(products)
      })
      .catch(e => console.log(e))
}

getData() /** INVOKE THE FUNCTION TO GET THE INFORMATIONS */


/**
 * 2_ Fill out the data on the card pages
 * @constant {string} card - div who receive the cards.
 * @param {object} products - object returned from the getData function.
 */
const card = document.querySelector('#products');

function fillCard(products) {

   card.innerHTML += products.map((product) => {

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
               <button class="buy">Comprar</button>
            </div>
      </div>
      ` 
      return card;
   }).join('')
}

/**
 * 3_ MORE-PRODUCTS button events
 * @constant {string} btnMoreProducts - button for more products
 * @function - invoke the getData function passing params
 */
const btnMoreProducts = document.getElementById('more-products');

btnMoreProducts.addEventListener('click', () => {
   pages++;

   getData();
})
