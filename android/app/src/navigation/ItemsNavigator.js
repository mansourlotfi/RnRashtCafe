import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Button, Icon, ThemeProvider } from 'react-native-elements';
import CategoryScreen from '../screens/CategoryScreen';
import CategoryItemScreen from '../screens/categoryItemsScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import UserInputScreen from '../screens/userInpuScreen';
import FilterScreen from '../screens/FiltersScreen';

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

const FilterNavigator = createStackNavigator({
	filters: {
		screen: FilterScreen,
		navigationOptions: {
			headerTitle: 'فیلتر ها',
			headerStyle: {
				backgroundColor: '#4a148c'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
});

const MainNavigator = createDrawerNavigator(
	{
		خانه: {
			screen: TabNavigator,
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
		فیلتر: {
			screen: FilterNavigator,
			navigationOptions: {
				headerStyle: {
					backgroundColor: '#4a148c'
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			}
		}
	},
	{
		contentOptions: {
			activeTintColor: 'blue'
		}
	}
);
export default createAppContainer(MainNavigator);
