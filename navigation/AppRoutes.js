// Screens
import { 
  HomeScreen, 
  SettingsScreen, 
  UpdateProfileScreen,
  EmailAuthenticationScreen,
} from '../screens';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Global
import ScreenOptions from '../globals/StackScreenOptions';


/**
 * 
 * @returns {JSX.Element} - Returns the routes for the app after Login
 */
const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen} 
      />
      <Stack.Screen 
        name="UpdateProfile" 
        component={UpdateProfileScreen} 
      />
      <Stack.Screen 
        name="UpdateEmail" 
        component={EmailAuthenticationScreen} 
      />
    </Stack.Navigator>
  )
}

export default AppRoutes;