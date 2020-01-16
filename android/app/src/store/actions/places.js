import Detail from '../../models/detail';

export const SET_PLACES = 'SET_PLACES';

export const fetchPlaces = () => {
	return async (dispatch) => {
		// any async code you want!
		const response = await fetch('https://rashtcafe.liara.run/api/places/c1');

		const resData = await response.json();
		console.log('resdata in places action', resData);
		const loadedPlaces = [];

		for (const key in resData) {
			loadedPlaces.push(
				new Detail(
					key,
					'5e14aff1ab48b0001379baaf',
					resData[key].title,
					resData[key].imageUrl,
					resData[key].description,
					resData[key].address,
					resData[key].phone,
					resData[key].parking,
					resData[key].sigaretfree,
					resData[key].wifi
				)
			);
		}

		dispatch({ type: SET_PLACES, places: loadedPlaces });
	};
};
