import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryItemScreen = (props) => {
	const catId = props.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
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

CategoryItemScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
	return {
		headerTitle: selectedCategory.title,
		headerStyle: {
			backgroundColor: '#4a148c'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	};
};
const style = StyleSheet.create({
	Screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
export default CategoryItemScreen;
