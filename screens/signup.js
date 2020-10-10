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


const Signup = () => {
const [response,setResponse] = useState('');
// const disptach = useDispatch();

const handlesubmit=(values)=>{
    axios.post('https://edwardmacron.pythonanywhere.com/users/',{username:values.username,password:values.password})
    .then((result)=>{
       if (result.status==201){
           setResponse('User is created')
       }
       else{
        setResponse('Error, try different username and password')
       }
    })
    .catch(()=>{setResponse('Error, try different username and password')})
}

  return (
    <View style={{ margin: 49 }}>
        <View style={{margin:9}}>
      <Text style={{fontWeight:'bold'}}>{response}</Text>
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
              title="Signup"
              color="blue"
              onPress={() => handlesubmit(props.values)}
            />

          </View>
        )}
      </Formik>
      
        
    </View>
  );
};

export default Signup;
