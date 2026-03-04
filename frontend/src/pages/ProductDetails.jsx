import {useParams} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';

export default function ProductDetails(){

	const {id} = useParams();
	const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL;
	const [product,setProduct] = useState(null);
	const [loading,setLoading] = useState(true);
	const [error,setError] = useState(null);

	console.log(id);

	async function fetchProducts(){

		try{

	const response = await axios.get(`${BASE_URL}/api/product/${id}`);

		console.log("fetch product data is", response);
		setProduct(response.data);
			setLoading(false);
		}catch(error){
			setError(error);
			console.log("error is", error);
		}
	}

	useEffect(()=>{

		fetchProducts()
	},[id,BASE_URL])


	return (
		<div>
		{loading ? (<h1> loading..</h1>):(

			<div>
				<img src={`${product.image}`} alt={product.name}/>
			<h1>{product.name}</h1>
			<p>{product.price}</p>
			<p>{product.description}</p>
			<button className='border-2 p-2 bg-green-400'> add to cart </button>
				<a href='/' className='text-blue-600 hover:underline ml-4'>back to home</a>
			</div>
		)}
		
		</div>
	)


}
