import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = (itemData) => {
	return (
		<View style={styles.gridItems}>
			<Text>{itemData.item.title}</Text>
		</View>
	);
};

const CategoryScreen = (props) => {
	console.log(props);
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
