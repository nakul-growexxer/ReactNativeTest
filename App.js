import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import RegFormScreen from './src/screen/RegFormScreen';
import CounterScreen from './src/screen/CounterScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RegForm" component={RegFormScreen} />
        <Stack.Screen name="count" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

