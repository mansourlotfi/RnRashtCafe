import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, DETAILS } from '../data/dummy-data';

const CategoryItemScreen = (props) => {
	const renderCategoryItems = (itemData) => {
		return (
			<View>
				<Text>{itemData.item.title}</Text>
			</View>
		);
	};
	const catId = props.navigation.getParam('categoryId');
	const displayedDetail = DETAILS.filter((item) => item.categoryId.indexOf(catId) >= 0);
	return (
		<View style={style.Screen}>
			<FlatList data={displayedDetail} renderItem={renderCategoryItems} />
		</View>
	);
};

CategoryItemScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
	return {
		headerTitle: selectedCategory.title
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
