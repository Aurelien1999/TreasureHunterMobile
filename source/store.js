import * as React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';

export default function Store() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', 
                     alignItems: 'center' }}>
        <Image 
         source= {{uri : "https://originalmap.fr/wp-content/uploads/2018/07/Carte-France-affiche_Original-Map-510x510.jpg"}}
         style = {{height : 650, width : 400, resizeMode: 'stretch'}}
        />
      </View>
    );
  }