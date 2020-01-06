import React from 'react';
import './Cart.css';

export default function Cart() {

	return (
		<React.Fragment>
			<div className='container'>
				<h1 className='text-center'>Shopping Cart</h1>
				<div className='cart-section'>
					<div className='cart-product-section'>
						<div>
							<h4>PRODUCT</h4>
						</div>
					</div>
					<div className='summary-section'>
						<h3>Summary</h3>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}