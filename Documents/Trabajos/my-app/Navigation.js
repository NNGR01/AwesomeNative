import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//screens
import Bar from "./Views/Bar";
import Profile from "./Views/Profile";
import Stats from "./Views/Stats";

//icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="Pokemons">
      <HomeStackNavigator.Screen
        name="Pokemons"
        component={Bar}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen name="Card" component={Stats} />
    </HomeStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Pokemons"
      screenOptions={{
        tabBarActiveTintColor: "darkred",
      }}
    >
      <Tab.Screen
        name="Pokemons"
        component={MyStack}
        options={{
          tabBarLabel: "Pokemons",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pokeball" size={size} color="black" />
          ),
          tabBarBadge: 6,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Trainer",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
