import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/Products/ProductList';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound';
// import homeIcon from './Images/home.png';

function App() {
  return (
	  <Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={ProductList} />
				<Route path='/Not-found' component={NotFound} />
				<Route path='/cart' component={Cart} />
				<Route path='/:productId' component={Details} />
			</Switch>
	  </Router>
  );
}

export default App;
