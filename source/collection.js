import * as React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';

export default function Collection() {
    return (
      <View style = {{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', direction: 'rtl', flexWrap: 'nowrap', top: 12}}>
        <View style = {{ backgroundColor: 'red', height : 50, width: 50}}>

        </View>
        <View style = {{justifyContent: 'center' ,  backgroundColor: 'red', height : 50, width: 50}}>
           <View style = {{ alignSelf: 'center' , backgroundColor: 'blue', height: 10, width: 10}}></View>
        </View>
        <View style = {{ backgroundColor: 'red', height : 50, width: 50}}>
          
        </View>
      </View>
    );
  }