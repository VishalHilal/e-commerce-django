import ProductList from "./pages/ProductList.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

export default function App(){

	return (
		<div>
		<Router>
			<Routes>
				<Route path='/' element={<ProductList/>}/>
		<Route path='/product/:id' element={<ProductDetails/>}/>
			</Routes>
		</Router>
		</div>
	)

}
