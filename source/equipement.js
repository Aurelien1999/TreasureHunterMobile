import * as React from 'react';
import {useState} from 'react';
import { Text, View, TouchableOpacity, Image, Animated, StyleSheet } from 'react-native';
import DATA from '../data/equipementData.json';
  
export default function Equipement() {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [Equiped, setEquiped] = useState(false);
    const onPress = () => {
      setEquiped(!Equiped);
    }
    return (
      <View style = {{}}>
        <Animated.FlatList
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          onScroll={Animated.event(
            [{ nativeEvent: {contentOffset : {x: scrollX}}}],
            {useNativeDriver: true}
            )}
          renderItem={({item, index}) => {
            const inputRange = [
              -300, 0, 300 * index, 300
               * (index + 2)
            ];
            const scale = scrollX.interpolate({
              inputRange,
              outputRange : [1,1,1,0],
              extrapolate : 'clamp',
            })
            return <View style = {styles.container}>
                    <Animated.View style={{ backgroundColor: '#ffffff',
                                            height: 300,
                                            width:250,
                                            borderRadius: 12,
                                           
                                            shadowColor: '#000F',
                                            shadowOffset: {
                                              width: 0,
                                              height: 3,
                                            },
                                            shadowOpacity: 0.6,
                                            shadowRadius: 10,
                                            transform: [{scale}]
                   }}>
                      <Text style={styles.TextDetectorsNames}>{item.name}</Text>
                      <Image source={{uri: item.lien}} style={styles.ImageDetectors}/>
                      <TouchableOpacity onPress={onPress}>
                          <View style = {styles.ViewEquipedButton}>
                              <Text style = {styles.ViewEquipedButtonText}>{Equiped.toString()}</Text>
                          </View>
                      </TouchableOpacity>
                  </Animated.View>
                </View>
          }}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      height: 650,
      width: 300,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#f4e0c7'
    },
    TextDetectorsNames: {
      textAlign:'center',
      color: 'black',
      marginTop: 10,
      fontWeight: '900'
    },
    ViewEquipedButton: {
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: '#eeaaee',
      top:12,
      height: 30,
      width: 50,
      borderRadius: 12
    },
    ViewEquipedButtonText: {
      textAlign : 'center',
      fontWeight: '900',
      color : 'black'
    },
    ImageDetectors: {
      alignSelf: 'center',
      height : 180,
      width: 180,
      marginTop: 20
    }
});