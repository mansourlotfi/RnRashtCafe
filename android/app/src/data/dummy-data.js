import Category from '../models/category';
import detail from '../models/detail';

export const CATEGORIES = [
	new Category('c1', 'Italian', '#f5428d'),
	new Category('c2', 'Quick & Easy', '#f54242'),
	new Category('c3', 'Hamburgers', '#f5a442'),
	new Category('c4', 'German', '#f5d142'),
	new Category('c5', 'Light & Lovely', '#368dff'),
	new Category('c6', 'Exotic', '#41d95d'),
	new Category('c7', 'Breakfast', '#9eecff'),
	new Category('c8', 'Asian', '#b9ffb0'),
	new Category('c9', 'French', '#ffc7ff'),
	new Category('c10', 'Summer', '#47fced')
];

export const DETAILS = [
	new detail(
		'm1',
		[ 'c1', 'c2' ],
		'Spaghetti with Tomato Sauce',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
		'asd asd asd asd',
		'asd asd asdasdas ave asd',
		'989898',
		true,
		true,
		true
	)
];
