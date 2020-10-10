import React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

const HeaderComponent = ({ navigation,title }) => {
   
  return (
    <View style={{flexDirection:'row'}}>
      <Entypo
        name="menu"
        size={24}
        color="black"
        onPress={() => navigation.openDrawer()}
      />
     <View style={{left:20}}>
  <Text style={{fontSize:19,color:'#3256a8'}}>{title}</Text>
  </View>
    </View>
  );
};

export default HeaderComponent;
