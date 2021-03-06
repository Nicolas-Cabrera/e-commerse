import React from 'react';
import { Link } from 'react-router-dom';
import store from '../Images/shop.png';
import cart from '../Images/cart.png';


export default function Navbar() {

	return (
		<nav className='navbar navbar-expands-sm bg-primary  navbar-dark px-sm-5'>
			<Link to='/'>
				<img src={store} alt='store' className='navbar-brand' />
			</Link>					
			<ul className='navbar-nav align-items-center'>
				<li className='nav-item ml-5'>
					<Link to='/' className='nav-link'>Products </Link>
				</li>
			</ul>
			<Link to='/cart' className='ml-auto'>
				<button>
					<i className='fas fa-cart-plus' />
					<img src={cart} alt='cart' />
					My Cart
				</button>
			</Link>
		</nav>
	)
}