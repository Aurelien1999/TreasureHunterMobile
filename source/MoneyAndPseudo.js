
import React, { useState } from "react"
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function MoneyAndPseudo() {
    return (
        <View style = {{height : 100, width: "100%", position: 'absolute' , flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', direction: 'rtl', flexWrap: 'wrap', top: 12}}>
        <View style= {{flexDirection : 'row', justifyContent: 'space-evenly',height: 32, width: 176, marginLeft: 10}}>
          <View style = {{justifyContent: 'center', alignItems: 'center', flexDirection : 'row', backgroundColor: '#f4e0c7', height : 30, width: 85, borderRadius: 10, left: 3}}>
            <Text style= {{textAlign: 'center'}}>0</Text>
            <Text style={{fontWeight: '900', fontSize: 17, color: '#8877aa'}}>€</Text>
          </View>
          <View style = {{justifyContent: 'center', alignItems: 'center', flexDirection : 'row', backgroundColor: '#f4e0c7', height : 30, width: 85, marginLeft: 10, borderRadius: 10, right: 3}}>
            <Text style= {{textAlign: 'center'}}>0</Text>
            <FontAwesome5 name={"gem"} size={15} color={"#185aef"} />
          </View>
        </View>
        <View style = {styles.ViewPseudoPlusIcon}>
            <Image 
            source={{uri: "https://cdn.thecollector.com/wp-content/uploads/2022/02/gold-roman-coin-hadrian.jpg?width=1400&quality=55"}}
            style={styles.ImageIcon}
            />
            <View style = {styles.Pseudo}>
              <Text style = {{textAlign: 'center', fontWeight: '900'}}>AURELIUS</Text>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    ViewPseudoPlusIcon: {
        justifyContent: 'center',
        height : 50,
        width: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    ImageIcon : {
        height: "100%",
        width: "100%",
        resizeMode: 'stretch',
        borderRadius: 50,
        top :15,
    },
    Pseudo : {
        position : 'relative',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        right: 46 ,
        backgroundColor: '#f4e0c7',
        bottom:25,
        height: 30,
        width: 100,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25
    }
});