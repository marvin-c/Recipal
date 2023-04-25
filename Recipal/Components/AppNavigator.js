import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RecipePage from '../screens/RecipePage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RecipePage" component={RecipePage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
