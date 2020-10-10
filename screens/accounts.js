import React,{useState,useEffect} from "react";
import { View, Text,Button } from 'react-native'
import Login from './login'
import Signup from './signup'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";

const Accounts = () => {
    const [res,setResponse] = useState(null);
    const [form,setForm]=useState(true);
    const token = useSelector(state=>state.token);
    const handlelogout=()=>{
        axios.post('https://edwardmacron.pythonanywhere.com/token/logout/',{},{
            headers: { Authorization: `Token ${token}` },
          })
        .then(()=>{
            setResponse('Loggedout')

        })
        .catch(()=>{setResponse('Error logging out')})
    }
    return (
        <View >
            <View style={{flexDirection:'row'}} >

            <View style={{flexDirection:'row',margin:20,padding:5}}>
            <Button title='login' onPress={()=>setForm(true)} />
            </View>
            <View style={{flexDirection:'row',margin:20,padding:5}}>
            <Button title='logout' color='red' onPress={()=>handlelogout()} />
            </View>
            <View style={{flexDirection:'row',margin:20,padding:5}}>
            <Button title='signup' color='blue' onPress={()=>setForm(false)} />
            </View>
            </View>
            <View style={{margin:9}}>
                {(res != null) ?(<View>

                    <Text style={{fontWeight:'bold'}}>{res}</Text>
                     <Text onPress={()=>setResponse(null)}>Dismiss </Text>
                </View>):null}
                     
            </View>
            {form?(<Login/>):(<Signup/>)}
            
        </View>
    )
}

export default Accounts
