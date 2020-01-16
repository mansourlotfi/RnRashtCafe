import Category from '../models/category';
import detail from '../models/detail';

export const CATEGORIES = [
	new Category('c1', 'کافه', '#f5428d'),
	new Category('c2', 'رستوران', '#f54242'),
	new Category('c3', 'شیرینی', '#f5a442'),
	new Category('c4', 'فست فود', '#f5d142'),
	new Category('c5', 'بستنی', '#368dff')
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
	),
	new detail(
		'm2',
		[ 'c1', 'c2' ],
		'برنامه ریزی اموزشی',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
		'asd asd asd asd',
		'asd asd asdasdas ave asd',
		'989898',
		true,
		true,
		true
	)
];
