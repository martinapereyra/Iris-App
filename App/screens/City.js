import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { Header } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default function City(){
    return (
        <>
        <Header
            placement="center"
            backgroundColor= "lightsalmon"
            centerComponent={{ text: 'Ciudad Actual', style: { color: '#fff', fontSize:20 } }}
            />
        <View style = {styles.container}>
            <Text style = {styles.text }> Ciudad actual </Text>
        </View>
        <StatusBar style="dark" backgroundColor= "#FFF" />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: "bold",
    },
})