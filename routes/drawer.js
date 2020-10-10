import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homestack";
import AccountStack from './accountstack';
import AddStack from "./addstack";

const Drawer = createDrawerNavigator();

export default function Appdrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="Accounts" component={AccountStack} />
        <Drawer.Screen name="AddStack" component={AddStack} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
