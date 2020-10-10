import React,{useEffect,useState} from 'react'
import { View, Text,FlatList,TouchableOpacity } from 'react-native'
import axios from 'axios';

const Home = ({navigation}) => {
const [poems,setPoems]=useState([]);
    useEffect(()=>{
axios.get('https://edwardmacron.pythonanywhere.com/poem/').then((res)=>setPoems(res.data))
    },[]);
    return (
        <View>
           <FlatList data={poems}
           keyExtractor={item => item.id.toString()} 
           renderItem={({item})=>{
               return(<View>
                   <TouchableOpacity
                    onPress={()=>{navigation.navigate('Details',{item:item})}}>
                    <View style={{backgroundColor:'#ede8e9',margin:3,padding:2}}>
                        <View style={{padding:5}}>
               <Text style={{color:'#0815c9'}}>{item.name}</Text>
                        </View>
                    </View>
                   </TouchableOpacity>
               </View>)
           }}
           />
        </View>
    )
}

export default Home
