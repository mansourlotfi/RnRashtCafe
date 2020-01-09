import React from 'react';
import { StyleSheet } from 'react-native';

import ItemsNavigator from './android/app/src/navigation/ItemsNavigator';
import { useScreens } from 'react-native-screens';

useScreens();

const App = () => {
	return <ItemsNavigator />;
};

const styles = StyleSheet.create({
	scrollView: {},
	engine: {
		position: 'absolute',
		right: 0
	},
	body: {},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600'
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400'
	},
	highlight: {
		fontWeight: '700'
	},
	footer: {
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right'
	}
});

export default App;
