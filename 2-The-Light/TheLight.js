import React, { useState } from 'react'
import { Dimensions, Image, Platform, SafeAreaView, StyleSheet, Switch } from 'react-native'
import Constants from "expo-constants"
import bulbOn from "../assets/The-Light-images/bulb-on.jpg"
import bulbOff from "../assets/The-Light-images/bulb-off.jpg"
import { StatusBar } from 'expo-status-bar'

const screenHeight = Dimensions.get("window").height;


export default function TheLight() {
    const[isEnabled, setIsEnabled] = useState(false);
    const toogleSwitch = () => setIsEnabled((previousState) => !previousState);
  
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style = "light" />
        
        <Image
            fadeDuration={0}
            source={isEnabled ? bulbOn : bulbOff}
            style = {styles.image}/>

        <Switch
            trackColor = {{false:"#fff",true:"52d9"}}
            thumbColor={isEnabled ? "#fff": "#fff"}
            onValueChange = {toogleSwitch}
            value = {isEnabled}
            style = {styles.switch}/>
        </SafeAreaView>
  )
}  

const styles = StyleSheet.create({
    container:{
        backfaceVisibility: "black",
        paddingTop: Constants.statusBarHeight
    },
    
    image:{
        maxWidth: "100%",
        maxHeight: screenHeight - 180,
        resizeMode:'contain',
        marginBottom: 20, 
    },
    switch:{
        alignSelf:"center",
        transform: Platform.OS == 'ios' ? [] : [{scale: 1.5}]
    }
})