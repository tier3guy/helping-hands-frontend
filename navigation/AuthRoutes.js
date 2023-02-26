// Screens
import { LoginScreen, SignupScreen } from '../screens';

// Navigation
import ScreenOptions from '../globals/StackScreenOptions';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

/**
 * 
 * @returns {JSX.Element} - Returns the routes for the app before Login
 */
const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  )
}

export default AuthRoutes;