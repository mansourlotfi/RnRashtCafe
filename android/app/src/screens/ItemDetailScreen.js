import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemDetailScreen = (props) => {
	return (
		<View style={style.Screen}>
			<Text>item detail screen Screen</Text>
		</View>
	);
};

const style = StyleSheet.create({
	Screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
export default ItemDetailScreen;
