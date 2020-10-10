import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import React,{useState,useEffect} from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import useraction from '../actions/useractions';

const modelschema = yup.object({
    username: yup.string().required().min(6),
    password: yup.string().required().min(7),
});


const Logout = () => {
const [response,setResponse] = useState('');
// const disptach = useDispatch();

const handlesubmit=(values)=>{
    axios.post('https://edwardmacron.pythonanywhere.com/token/logout/',{username:values.username,password:values.password})
    .then(()=>{
      
        setResponse('Loggedout')
       
    })
    .catch(()=>{setResponse('Error')})
}

  return (
    <View style={{ margin: 49 }}>
        
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={modelschema}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder="username"
              onChangeText={props.handleChange("username")}
              values={props.values.username}
            />
            <Text>{props.errors.username}</Text>
            <TextInput
              placeholder="password"
              onChangeText={props.handleChange("password")}
              values={props.values.password}
              secureTextEntry={true}
            />
            <Text>{props.errors.password}</Text>

            <Button
              title="Register"
              color="maroon"
              onPress={() => handlesubmit(props.values)}
            />

          </View>
        )}
      </Formik>
      <View style={{margin:9}}>
      <Text style={{fontWeight:'bold'}}>{response}</Text>
      </View>
        
    </View>
  );
};

export default Logout;
