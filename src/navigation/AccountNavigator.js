import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Account } from "../screens/Account";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);
