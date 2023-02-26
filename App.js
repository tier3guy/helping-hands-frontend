// Internal Libraries
import { StyleSheet, View } from 'react-native';
import { useContext } from 'react';

// External Libraries
import { useFonts } from 'expo-font';

// Components
import { StatusBar } from './components';
import AuthProvider from './context/authContext';
import Routes from './navigation/routes';


const App = () => {

  const [fontsLoaded] = useFonts({

    // Inter
    'Inter-Black': require('./assets/fonts/Inter/static/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter/static/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter/static/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter/static/Inter-ExtraLight.ttf'),
    'Inter-Light': require('./assets/fonts/Inter/static/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter/static/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter/static/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter/static/Inter-SemiBold.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter/static/Inter-Thin.ttf'),

    // Gloock
    'Gloock': require('./assets/fonts/Gloock/Gloock-Regular.ttf'),
  });
  if(!fontsLoaded) return null;

  return (
    <AuthProvider>
      <>
        <StatusBar/>
        <Routes />
      </>
    </AuthProvider>
  );
}


export default App;