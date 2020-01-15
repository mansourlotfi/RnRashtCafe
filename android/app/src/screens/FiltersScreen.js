import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FiltersScreen = (props) => {
	return (
		<View style={style.Screen}>
			<Text>filter Screen</Text>
		</View>
	);
};

FiltersScreen.navigationOptions = {
	headerTitle: 'فیلترها'
};

const style = StyleSheet.create({
	Screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
export default FiltersScreen;
