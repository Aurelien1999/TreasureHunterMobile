import * as React from 'react';
import { Text, View} from 'react-native';

export default function Equipelist(props, index){
    return (
        <View style=  {{position : 'absolute', height: 123,width:123 , backgroundColor: 'red'}}>
            <Text>{props[index].id}</Text>
            <Text>azeaze</Text>
        </View>
    )
}