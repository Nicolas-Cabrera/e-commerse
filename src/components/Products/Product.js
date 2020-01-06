import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {

	return (
		<Link to={`/${props.id}`}>
			<div className='product'>
				<img className='product-images' src={props.image} alt='Protein' />
				<h5 className='product-description'>{props.description}</h5>
				<h5 className='price'>{props.price}</h5>
				<button className=''>Button</button>
			</div>
		</Link>
	)
}