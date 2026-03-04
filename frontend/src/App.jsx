import {useState,useEffect} from 'react'
import axios from 'axios';

export default function App(){

	const [data,setData] = useState([]);

	async function fetchData(){

		const res = await axios.get("http://localhost:8000/api/products");

		console.log("response data is",res.data);
	}
	useEffect(()=>{

fetchData();
	},[])

	return (

		<div>
		<h1 className="bg-red-500">test app</h1>
		</div>
	)
}
