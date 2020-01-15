import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';

const FiltersScreen = (props) => {
	return (
		<View style={style.Screen}>
			<Text>filter Screen</Text>
		</View>
	);
};

const IoniconsHeaderButton = (passMeFurther) => (
	// the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
	// and it is important to pass those props to `HeaderButton`
	// then you may add some information like icon size or color (if you use icons)
	<HeaderButton {...passMeFurther} IconComponent={Icon} iconSize={25} color="white" />
);
FiltersScreen.navigationOptions = (navData) => {
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

const style = StyleSheet.create({
	Screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
export default FiltersScreen;
