// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home_screen from './src/screen/home_screen';
import loginscreen from './src/screen/loginscreen';
import signup from './src/screen/signup';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name="Home" component={home_screen} />
        <Stack.Screen name={"login"} component={loginscreen} />
        <Stack.Screen name={"signup"} component={signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;