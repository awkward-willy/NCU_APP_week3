import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, LoginSuccess } from "./Pages";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginSuccess" component={LoginSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
