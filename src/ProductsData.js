import protein from './Images/Products/protein.png';
import flapjack from './Images/Products/flapjack.png';
import peanutbutter from './Images/Products/peanutbutter.png';


export default function ProductsData() {
	return [
		{ id: 'protein', description: 'RAW ORGANIC PROTEIN', price: '£19.99', image: protein },
		{ id: 'flap', description: 'PROTEIN FLAP JACK', price: '£1.59', image: flapjack },
		{ id: 'peanut', description: 'PEANUT BUTTER', price: '£10.99', image: peanutbutter },
		{ id: 'protein1', description: 'RAW ORGANIC PROTEIN', price: '£19.99', image: protein },
		{ id: 'flap1', description: 'PROTEIN FLAP JACK', price: '£1.59', image: flapjack },
		{ id: 'peanut1', description: 'PEANUT BUTTER', price: '£10.99', image: peanutbutter },
	]
}