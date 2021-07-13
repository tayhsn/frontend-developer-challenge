/**
 * This script have the following responsabilities:
 * Request to API and return the response
 */

/**
 * Request to API and return the response
 * @function getData(params) - requests the data passing the pages as a parameter
 * @type {array} products - container that receives the response and returns as a result of the function
 */

export async function getData(pages) {
	let products = [];

	await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${pages}`)
		.then((response) => response.json())
		.then((data) => {
			products = data.products.map((product) => {
				const object = {
					id: product.id,
					name: product.name,
					image: product.image,
					oldPrice: product.oldPrice,
					price: product.price,
					description: product.description,
					count: product.installments.count,
					value: product.installments.value,
				};
				return object;
			});
		})
		.catch((e) => console.log(e));

	return products;
}
