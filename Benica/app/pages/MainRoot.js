import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./Home.Js";
import Favorite from "./Favorite";
import Settings from "./Settings";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

class MainRoot extends Component {
  render() {
    return (
      <Tab.Navigator
        activeColor="#e91e63"
        barStyle={{ backgroundColor: "tomato" }}
        initialRouteName="Home"
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Favorite",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26} />
            ),
          }}
          name="Favorite"
          component={Favorite}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            ),
          }}
          name="Settings"
          component={Settings}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    m,
  },
});
export default MainRoot;
