import React from 'react';
import Product from './Product';
import './Products.css'

import protein from '../../Images/Products/protein.png';
import flapjack from '../../Images/Products/flapjack.png';
import peanutbutter from '../../Images/Products/peanutbutter.png';

export default function ProductList() {

	return (
		<React.Fragment>
			<div>
				<div className='container'>
					<h1>Our Products</h1>
					<div className='product-list'>
						<Product id='protein' description='RAW ORGANIC PROTEIN' price='£19.99' image={protein} />
						<Product id='flap' description='PROTEIN FLAP JACK' price='£1.59' image={flapjack} />
						<Product id='peanut' description='PEANUT BUTTER' price='£10.99' image={peanutbutter} />
						<Product id='protein' description='RAW ORGANIC PROTEIN' price='£19.99' image={protein} />
						<Product id='flap' description='PROTEIN FLAP JACK' price='£1.59' image={flapjack} />
						<Product id='peanut' description='PEANUT BUTTER' price='£10.99' image={peanutbutter} />
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}