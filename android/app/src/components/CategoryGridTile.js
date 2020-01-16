import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const CategoriGridTile = (props) => {
	return (
		<View style={styles.gridItems}>
			<TouchableNativeFeedback style={{ flex: 1 }} onPress={props.onSelect}>
				<View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
					<Text style={styles.title}>{props.title}</Text>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItems: {
		flex: 1,
		margin: 15,
		height: 150
	},
	container: {
		flex: 1,
		borderRadius: 10,
		elevation: 3,
		padding: 15,
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	title: {
		fontSize: 22,
		textAlign: 'right'
	}
});
export default CategoriGridTile;
