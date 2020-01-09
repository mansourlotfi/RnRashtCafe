import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoryScreen from '../screens/CategoryScreen';
import CategoryItemScreen from '../screens/categoryItemsScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';

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

export default createAppContainer(ItemsNavigator);
