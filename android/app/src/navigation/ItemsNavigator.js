import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Button, Icon, ThemeProvider } from 'react-native-elements';
import CategoryScreen from '../screens/CategoryScreen';
import CategoryItemScreen from '../screens/categoryItemsScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import UserInputScreen from '../screens/userInpuScreen';

const ItemsNavigator = createStackNavigator(
	{
		Category: {
			screen: CategoryScreen,
			navigationOptions: {
				headerTitle: 'گروه ها'
			}
		},
		CategoryItems: {
			screen: CategoryItemScreen,
			navigationOptions: {
				headerStyle: {
					backgroundColor: '#4a148c'
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			}
		},
		ItemDetail: { screen: ItemDetailScreen }
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#4a148c'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);

const TabNavigator = createBottomTabNavigator(
	{
		خانه: {
			screen: ItemsNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return <Icon reverse name="ios-home" type="ionicon" size={25} color={tabInfo.tintColor} />;
				}
			}
		},
		ثبت: {
			screen: UserInputScreen,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return <Icon reverse name="add-circle" size={25} color={tabInfo.tintColor} />;
				}
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray'
		}
	}
);

export default createAppContainer(TabNavigator);
