import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DETAILS } from '../data/dummy-data';

const ItemDetailScreen = (props) => {
	const detailId = props.navigation.getParam('detailId');
	const selectedDetail = DETAILS.find((item) => item.id === detailId);
	return (
		<View style={style.Screen}>
			<Text>{selectedDetail.title}</Text>
		</View>
	);
};

ItemDetailScreen.navigationOptions = (navigationData) => {
	const detailId = navigationData.navigation.getParam('detailId');
	const selectedDetail = DETAILS.find((item) => item.id === detailId);
	return {
		headerTitle: selectedDetail.title
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
