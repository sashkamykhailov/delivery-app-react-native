import React from "react";
import HomePage from "./screens/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from "./screens/RestaurantScreen";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PrepearingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} />
          <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} />
          <Stack.Screen name='Delivery' component={DeliveryScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
