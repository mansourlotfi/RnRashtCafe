import React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';

const CategoryScreen = (props) => {
    console.log(props)
	return (
        <>
		<View style={style.Screen}>
			<Text>Category Screen</Text>
        <Button title='go to categori item' onPress={()=>{props.navigation.navigate({routeName: 'CategoryItem'})}}  />
		</View>
        </>
	);
};

const style = StyleSheet.create({
	Screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
export default CategoryScreen;
