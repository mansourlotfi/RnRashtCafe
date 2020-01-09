import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryItemScreen = (props) => {
	return (
		<View style={style.Screen}>
			<Text>Category item Screen</Text>
			<Button
				title="go to item detail"
				onPress={() => {
					props.navigation.navigate({ routeName: 'ItemDetail' });
				}}
			/>
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
export default CategoryItemScreen;
