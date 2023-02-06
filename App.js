import React from 'react';
import HomePage from './screens/HomePage';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from './screens/RestaurantScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
  );
}
