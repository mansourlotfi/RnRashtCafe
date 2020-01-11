import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserInputScreen = (props) => {
	return (
		<View style={style.Screen}>
			<Text>register a place</Text>
		</View>
	);
};

// ItemDetailScreen.navigationOptions = (navigationData) => {
// 	const detailId = navigationData.navigation.getParam('detailId');
// 	const selectedDetail = DETAILS.find((item) => item.id === detailId);
// 	return {
// 		headerTitle: selectedDetail.title
// 	};
//};
const style = StyleSheet.create({
	Screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
export default UserInputScreen;
