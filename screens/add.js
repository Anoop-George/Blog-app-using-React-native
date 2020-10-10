import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import React,{useState,useEffect} from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";

const modelschema = yup.object({
    name: yup.string().required().min(6),
    content: yup.string().required().min(7),
});


const Add = () => {
const [response,setResponse] = useState('');
// const disptach = useDispatch();
const token = useSelector(state=>state.token);
const handlesubmit=(values)=>{
    axios.post('https://edwardmacron.pythonanywhere.com/poem/',{name:values.name,content:values.content},{
        headers: { Authorization: `Token ${token}` },
      })
    .then((result)=>{
       if (result.status==201){
           setResponse('Successfully added')
       }
       else{
        setResponse('Error adding document')
       }
    })
    .catch(()=>{setResponse('Error adding document')})
}

useEffect(()=>{
    if(token==null){setResponse('Please login prior to adding post')}else{setResponse('')}
},[token]);
  return (
    <View style={{ margin: 49 }}>
        <View style={{margin:9}}>
      <Text style={{fontWeight:'bold'}}>{response}</Text>
      </View>
      {console.log(token)}
      <Formik
        initialValues={{ name: "", content: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={modelschema}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder="name"
              onChangeText={props.handleChange("name")}
              values={props.values.name}
            />
            <Text>{props.errors.name}</Text>
            <TextInput
              placeholder="content"
              onChangeText={props.handleChange("content")}
              values={props.values.content}
            />
            <Text>{props.errors.content}</Text>

            <Button
              title="Add"
              color="blue"
              onPress={() => handlesubmit(props.values)}
            />

          </View>
        )}
      </Formik>
      
        
    </View>
  );
};

export default Add;
