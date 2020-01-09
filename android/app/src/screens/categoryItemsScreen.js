import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategorYItemScreen = (props) => {
	return (
		<View style={style.Screen}>
			<Text>Category Screen</Text>
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
export default CategorYItemScreen;
