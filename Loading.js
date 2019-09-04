import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import SplashScreen from 'react-native-splash-screen';



export default function Loading() {
    return (
         <LinearGradient
        colors={['#8E2DE2', '#4A00E0']}
        style={styles.container}
      >
                <StatusBar barStyle="dark-content"></StatusBar>
            <Text style={styles.text}>
                오늘의 날씨는?
            </Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "white",
        fontSize: 32,
        fontWeight: "800"
    }
});