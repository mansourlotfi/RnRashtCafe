import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as placesActions from '../store/actions/places';

const CategoryItem = (props) => {
	const places = useSelector((state) => state.places.places);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(placesActions.fetchPlaces());
		},
		[ dispatch ]
	);

	return (
		<View style={styles.detailscreen}>
			<TouchableNativeFeedback onPress={props.onSelect}>
				<View>
					<View>
						<View style={styles.row}>
							<ImageBackground source={{ uri: props.imageUrl }} style={styles.bgImage}>
								<Text style={styles.title} numberOfLines={1}>
									{props.title}
								</Text>
							</ImageBackground>
							<Text>{props.description}</Text>
							<Text>{props.address}</Text>
						</View>
					</View>
					<View style={styles.row} />
				</View>
			</TouchableNativeFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
	detailscreen: {
		flex: 1,
		height: 200,
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
		borderRadius: 10,
		overflow: 'hidden'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	bgImage: {
		width: '90%',
		height: '100%',
		justifyContent: 'flex-end'
	},
	title: {
		fontSize: 20,
		color: 'white',
		alignItems: 'center',
		textAlign: 'center',
		fontWeight: 'bold',
		backgroundColor: 'black',
		paddingVertical: 5,
		paddingHorizontal: 12
	}
});

export default CategoryItem;
