import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, DETAILS } from '../data/dummy-data';
import CategoryItem from '../components/CategoryItem';

const CategoryItemScreen = (props) => {
	const renderCategoryItems = (itemData) => {
		return (
			<CategoryItem
				title={itemData.item.title}
				description={itemData.item.description}
				address={itemData.item.address}
				imageUrl={itemData.item.imageUrl}
				onSelect={() => {}}
			/>
		);
	};
	const catId = props.navigation.getParam('categoryId');
	const displayedDetail = DETAILS.filter((item) => item.categoryId.indexOf(catId) >= 0);
	return (
		<View style={style.Screen}>
			<FlatList data={displayedDetail} renderItem={renderCategoryItems} style={{ width: '100%' }} />
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
