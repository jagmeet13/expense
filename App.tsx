import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Src/Home.js';
import AddExpense from './Src/AddExpense';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddExpense" component={AddExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
