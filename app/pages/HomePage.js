import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Button } from 'react-native-paper';

export default function HomePage() {
    let [fontsLoaded] = useFonts({ Comfortaa_700Bold, Roboto_400Regular });

    const redirect = () => {
        console.log("Hi!")
    }

    return (
        <View style={styles.full}>
            <LinearGradient
                colors={['#00FFF2', '#0002FF']}
                start={[1, 0]}
                style={styles.full}
            >
                <View style={styles.main}>
                    <Image style={styles.icon} source={require("../assets/icon.png")} />
                    <Text style={styles.name}>DoIt</Text>
                    <Text style={styles.text}>A to-do list app with features like speech-to-text, a customizable UI, reminders and so much more.</Text>
                    <Button labelStyle={{ fontSize: 30, fontFamily: "Comfortaa_700Bold" }} style={styles.button} dark={true} color="#00FFF2" mode="contained" onPress={redirect}>
                        GET STARTED
                    </Button>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: "75px",
        color: "#fff",
        fontFamily: "Comfortaa_700Bold",
    },
    full: {
        flex: 1,
    },
    icon: {
        width: "236px",
        height: "300px",
        marginTop: "2px",
    },
    main: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: "20px",
        margin: "5%",
        color: "#fff",
        fontFamily: "Roboto_400Regular"
    },
    button: {
        margin: "10%",
    },
});
