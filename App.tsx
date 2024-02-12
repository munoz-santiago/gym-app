import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from './src/ui/screens/login_screen';
import Routes from './src/ui/routes';
import HomeScreen from './src/ui/screens/home_screen';
import UseCasesRegister from './src/use_cases_register';
import { GlobalContextWrapper } from './src/ui/GlobalContext';
// import privateRouteWrapper from './src/ui/private_route_wrapper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalContextWrapper>
      <SafeAreaProvider>
        <NavigationContainer>
          <UseCasesRegister />

          <Stack.Navigator initialRouteName={Routes.LOGIN}>
            <Stack.Screen name={Routes.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.HOME} component={HomeScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GlobalContextWrapper>
  );
}
