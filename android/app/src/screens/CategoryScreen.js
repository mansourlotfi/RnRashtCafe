import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { CATEGORIES } from '../data/dummy-data';

const CategoryScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<TouchableOpacity
				style={styles.gridItems}
				onPress={() => {
					props.navigation.navigate({
						routeName: 'CategoryItems',
						params: {
							categoryId: itemData.item.id
						}
					});
				}}
			>
				<View>
					<Text>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />;
};

CategoryScreen.navigationOptions = {
	headerTitle: 'گروه ها',
	headerStyle: {
		backgroundColor: '#4a148c'
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold'
	}
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
