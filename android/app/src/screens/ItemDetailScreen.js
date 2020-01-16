import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const ItemDetailScreen = (props) => {
	const availableDetails = useSelector((state) => state.places.places);
	const detaileId = props.navigation.getParam('detaileId');
	const selectedDetail = availableDetails.find((item) => item.id === detaileId);

	// useEffect(
	// 	() => {
	// 		props.navigation.setParams({ detailTitle: selectedDetail.title });
	// 	},
	// 	[ selectedDetail ]
	// );
	return (
		<View style={style.Screen}>
			<Text>{selectedDetail.title}</Text>
		</View>
	);
};

ItemDetailScreen.navigationOptions = (navigationData) => {
	const detailId = navigationData.navigation.getParam('detaileId');
	const detaileTitle = navigationData.navigation.getParam('detaileTitle');
	//const selectedDetail = DETAILS.find((item) => item.id === detailId);
	return {
		headerTitle: detaileTitle
	};
};
const style = StyleSheet.create({
	Screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
export default ItemDetailScreen;
