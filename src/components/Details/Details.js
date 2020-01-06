import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import getProduct from '../../ProductsData';
import './Details.css';

export default function Details() {

	const { productId } = useParams();
	const [ product, setProduct ] = useState([]);
	const [ quantity, setQuantity] = useState(1);

	useEffect(() => {
		let product = getProduct().find((product) => {
			return product.id === productId;
		})
		setProduct(product)
	}, [productId]);

	function takeAwayQuantity(less) {
		if(quantity >= 2) {
			setQuantity(quantity - 1);
		}
	}

	function addQuantity(less) {
		setQuantity(quantity + 1);
	}

	if(product !== undefined) {
		return (
			<React.Fragment>
				<div className='container'>
					<h2 className='text-center'>Product</h2>
					<div className='product-detail-section'>
						<div className=''>
							<img className='detail-image' src={product.image} alt={product.id} />
						</div>
						<div className='details-right-side'>
							<h3 className='text-center'>{product.description}</h3>
							<h4>{product.price}</h4>
							<p>QTY</p>
							<div className='adding-product'>
								<button onClick={(less) => takeAwayQuantity(less)}>-</button>
								<p>{quantity}</p>
								<button onClick={(add) => addQuantity(add)}>+</button>
							</div>
							<button>ADD TO BASKET</button>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	} else {
		return <Redirect to='/Not-found' />
	}
}