import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderComponent from "../shared/header";
import Add from "../screens/add";


const Stack = createStackNavigator();

const AddStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerTitle: () => <HeaderComponent navigation={navigation} title='Add' />,
      }}
      name="Home"
      component={Add}
    />

   
  </Stack.Navigator>
);

export default AddStack;
