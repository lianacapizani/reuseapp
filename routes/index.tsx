import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
      <Tabs.Screen name="Login" component={Login}   options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
