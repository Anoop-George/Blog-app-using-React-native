import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderComponent from "../shared/header";
import Accounts from '../screens/accounts'

const Stack = createStackNavigator();

const AccountStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerTitle: () => <HeaderComponent navigation={navigation} title='Account' />,
      }}
      name="Home"
      component={Accounts}
    />

   
  </Stack.Navigator>
);

export default AccountStack;
