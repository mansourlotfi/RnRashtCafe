import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoriGridTile from '../components/CategoryGridTile';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';
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
const IoniconsHeaderButton = (passMeFurther) => (
	// the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
	// and it is important to pass those props to `HeaderButton`
	// then you may add some information like icon size or color (if you use icons)
	<HeaderButton {...passMeFurther} IconComponent={Icon} iconSize={25} color="white" />
);
CategoryScreen.navigationOptions = (navData) => {
	return {
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
				<Item
					title="منو"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		)
	};
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
