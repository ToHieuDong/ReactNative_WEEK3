import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
import App8 from './App8';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="App6">
          <Stack.Screen name="App1" component={App1}  options={{headerShown: false}} />
          <Stack.Screen name="App2" component={App2}  options={{headerShown: false}} />
          <Stack.Screen name="App3" component={App3}  options={{headerShown: false}} />
          {/* <Stack.Screen name="App4" component={App4}  options={{headerShown: false}} />
          <Stack.Screen name="App5" component={App5}  options={{headerShown: false}} /> */}
          <Stack.Screen name="App6" component={App6}  options={{headerShown: false}} />
          {/* <Stack.Screen name="App7" component={App7}  options={{headerShown: false}} />
          <Stack.Screen name="App8" component={App8}  options={{headerShown: false}} /> */}
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
};