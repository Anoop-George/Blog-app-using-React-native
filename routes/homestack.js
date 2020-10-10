import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderComponent from "../shared/header";
import Details from '../screens/details';
import Home from '../screens/home';

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerTitle: () => <HeaderComponent navigation={navigation} title='Home' />,
      }}
      name="Home"
      component={Home}
    />

    <Stack.Screen
      options={{ title: "new details" }}
      name="Details"
      component={Details}
    />
   
  </Stack.Navigator>
);

export default HomeStack;
