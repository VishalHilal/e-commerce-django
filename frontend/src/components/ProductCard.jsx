export default function ProductCard({product}){


		const BASE_URL= import.meta.env.VITE_DJANGO_BASE_URL;

	return (

		
		<div>


			<img src={`${BASE_URL}${product.image}`} alt={product.name}/>
			<h2>Name: {product.name}</h2>
			<p>Price: {Number(product.price).toFixed(2)}</p>

		</div>
	)
}
