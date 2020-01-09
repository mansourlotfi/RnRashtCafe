import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryScreen = (props) => {
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
export default CategoryScreen;
