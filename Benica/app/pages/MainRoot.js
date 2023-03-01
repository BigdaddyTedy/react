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
      <Tab.Navigator initialRouteName="Home">
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
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Settings" component={Settings} />
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
