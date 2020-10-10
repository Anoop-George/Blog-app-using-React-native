import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import React,{useState,useEffect} from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import useraction from '../actions/useractions';

const modelschema = yup.object({
    username: yup.string().required().min(4),
    password: yup.string().required().min(7),
});


const Login = () => {
// const [token,setToken] = useState('');
const [res,setRes] = useState('');
const disptach = useDispatch();
// const state = useSelector(state=>state.token)
const handlesubmit=(values)=>{
    axios.post('https://edwardmacron.pythonanywhere.com/token/login/',{username:values.username,password:values.password})
    .then((result)=>{
        disptach(useraction.userloggedin(result.data.auth_token))
        setRes('logged in')
    })
    .catch((e)=>{console.log(e)
    setRes('error logging in ')
    })
}

  return (
    <View style={{ margin: 49 }}>
        <View style={{margin:9}}>
        <Text style={{fontWeight:'bold'}}>{res}</Text>
      </View>
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
              title="Login"
              color="#345fa3"
              onPress={() => handlesubmit(props.values)}
            />
          </View>
        )}
      </Formik>
      
    </View>
  );
};

export default Login;
