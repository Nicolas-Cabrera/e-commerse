import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/Products/ProductList';
import Details from './components/Details/Details';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
// import homeIcon from './Images/home.png';

function App() {
  return (
	  <Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={ProductList} />
				<Route path='/:productId' component={Details} />
				<Route path='/cart' component={Cart} />
				<Route component={NotFound} />
			</Switch>
	  </Router>
  );
}

export default App;
