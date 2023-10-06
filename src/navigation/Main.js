import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Reclame } from "../screens/Reclame";
import { Menu } from "../screens/Menu";
import { Map } from "../screens/Map";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const Order = () => {
  return <Map />;
};

const TAB_ICON = {
  "Tela principal": "home",
  "Seu reclame": "note",
  Buscar: "search",
  Perfil: "person",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialIcons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#0086ff",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const Main = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Tela principal" component={Menu} />
      <Tab.Screen name="Seu reclame" component={Reclame} />
      <Tab.Screen name="Buscar" component={Order} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
};
