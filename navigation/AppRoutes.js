// Screens
import { HomeScreen } from '../screens';


// Navigation
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


/**
 * 
 * @returns {JSX.Element} - Returns the routes for the app after Login
 */
const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default AppRoutes;