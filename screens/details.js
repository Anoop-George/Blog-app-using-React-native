import React from 'react'
import { View, Text } from 'react-native'

const Details = ({navigation,route}) => {
    const {item} = route.params
    return (
        <View style={{margin:10,padding:10}}>
           <Text>{item.name}</Text>
    <Text>{item.content}</Text>
    <Text>id: {item.id}</Text>
    <Text>date: {item.created}</Text>

        </View>
    )
}

export default Details
