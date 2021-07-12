import { fillCardsIndex } from './index.js';
import { fillCardsEmail } from './email.js';

/**         
 * This script have the following responsabilities:
 * 1_ Consumer and Handling the API data 
 * 2_ Fill out the data inside the cards of index
 * 3_ MORE-PRODUCTS button event
 */


/**
 * 1_ Consumer and Handling the API data
 * @let {number} pages - define the number of the page to get
 * @function getData - consume and handle the data.
 */


export async function getData() {
   let pages = 1
   
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
                  'value': product.installments.value
               }
               return object;
         })
            
         fillCardsIndex(products)
         fillCardsEmail(products)
      })
      .catch(e => console.log(e))
}


