import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProduct from '../../ProductsData';

export default function Details() {

	const { productId } = useParams();
	let [ product, setProduct ] = useState([]);

	useEffect(() => {
		let product = getProduct().find((product) => {
			return product.id === productId;
		})
		setProduct(product)
	}, [productId]);

	return (
		<React.Fragment>
			<h3>Hello from Product Details</h3>
			{product.description}
			<p>Information about the product goes here</p>
		</React.Fragment>
	)
}