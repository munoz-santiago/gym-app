import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/ui/screens/login_screen';
import Routes from './src/ui/routes';
import HomeScreen from './src/ui/screens/home_screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.LOGIN}>
        <Stack.Screen name={Routes.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
