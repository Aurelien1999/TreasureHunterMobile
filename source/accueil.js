
import React, { useState } from "react"
import { Text, View, Image, TouchableOpacity, StyleSheet, Modal, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import MoneyAndPseudo from "./MoneyAndPseudo";

export default function Accueil() {
    const [Energy, setEnergy] = useState(30);
    const [mod, setmod] = useState(false);
    const {height, width} = Dimensions.get("window");
    const onPress = () => setEnergy(prevEnergy => prevEnergy - 1); 
    return (
      <View style={{flex: 1}}>
        <View style = {{height : "100%", width: "100%"}}>
        <Image 
         source= {{uri : "https://i.pinimg.com/originals/15/7e/75/157e75e0ccfcdcde520a77a16af77315.jpg"}}
         style = {{height : "100%", width : "100%", resizeMode: 'stretch'}}
         />
         </View>
          <MoneyAndPseudo />
          <TouchableOpacity>
            <View style = {styles.ViewButtonEnergy}>
                <FontAwesome5 name={'bolt'} size = {20} color={'gold'} style={{marginTop: 15, left: 20}}/>
                <Text style = {{textAlign : 'center', fontWeight: '900', marginTop : 15, color : 'white', left :30}}> {Energy}/30 </Text>
                {/* OPEN MODAL  */}
            </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={()=>setmod(true)}>
            <View style = {styles.ViewButtonFind}>
                <Text style = {{textAlign : 'center', fontWeight: '900', marginTop : 15, color : 'black'}}> GO FIND </Text>
                <Modal
                animationType = {"fade"}
                transparent={true}
                visible={mod}
                onRequestClose={() => {
                    setmod(!mod)
                }}>
                <View style= {{height :height/1.6, width: width/1.4, backgroundColor: 'white', alignSelf : 'center', top : height/6, borderRadius: 10}}>
                <TouchableOpacity onPress={()=>setmod(false)}>
                    <Text style = {{textAlign: "center"}}>zaeaze</Text>
                </TouchableOpacity>
                </View>
                </Modal>
            </View>
            </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
    ViewButtonFind: {
        position: 'absolute',
        bottom : 10,
        left : 60,
        height : 50, 
        width: 118,
        backgroundColor : 'tomato',
        borderTopEndRadius: 22, 
        borderBottomStartRadius: 22,
        borderWidth :0.3,
    },
    ViewButtonEnergy: {
        position: 'absolute',
        flexDirection: 'row',
        bottom : 10,
        right : 60,
        height : 50, 
        width: 118,
        backgroundColor : 'black',
        borderTopStartRadius: 22, 
        borderBottomEndRadius: 22,
        borderWidth :0.3,
    }
});