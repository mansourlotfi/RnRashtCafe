import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoryScreen from '../screens/CategoryScreen';
import CategoryItemScreen from '../screens/categoryItemsScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';

const ItemsNavigator = createStackNavigator({
	Category: CategoryScreen,
	CategoryItem: {
		screen: CategoryItemScreen
	},
	ItemDetail: ItemDetailScreen
});

export default createAppContainer(ItemsNavigator);
