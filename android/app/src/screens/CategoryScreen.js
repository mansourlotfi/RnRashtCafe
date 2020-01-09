import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoriGridTile from '../components/CategoryGridTile';
import axios from 'axios';
import { CATEGORIES } from '../data/dummy-data';

const CategoryScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoriGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryItems',
						params: {
							categoryId: itemData.item.id
						}
					});
				}}
			/>
		);
	};

	return <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />;
};

const styles = StyleSheet.create({
	Screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	gridItems: {
		flex: 1,
		margin: 15,
		height: 150
	}
});
export default CategoryScreen;
