
import React, { useState } from "react"
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import MoneyAndPseudo from "./MoneyAndPseudo";

export default function EnergyManager() {
    return(
        <TouchableOpacity>
            <View style = {styles.ViewButtonEnergy}>
                <FontAwesome5 name={'bolt'} size = {20} color={'gold'} style={{marginTop: 15, left: 20}}/>
                <Text style = {{textAlign : 'center', fontWeight: '900', marginTop : 15, color : 'white', left :30}}> {count}/30 </Text>
                {/* OPEN MODAL  */}
            </View>
        </TouchableOpacity>
    )
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