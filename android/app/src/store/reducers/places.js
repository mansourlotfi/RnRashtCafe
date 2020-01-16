import { DETAILS } from '../../data/dummy-data';
import SET_PLACES from '../actions/places';
const initialState = {
	places: DETAILS
};
const placeReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PLACES:
			availablePlaces = action.places;
	}
	return state;
};

export default placeReducer;
