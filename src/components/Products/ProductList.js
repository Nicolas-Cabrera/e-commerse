import React from 'react';
import Product from './Product';
import './Products.css'
import ProductsData from '../../ProductsData';

export default function ProductList() {

	return (
		<React.Fragment>
			<div>
				<div className='container'>
					<h1 className='title'>Our Products</h1>
					<div className='product-list'>
						{
							ProductsData().map(product => (
								<Product 
									key={product.id} 
									id={product.id} 
									description={product.description} 
									price={product.price} 
									image={product.image} />
							))
						}
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}