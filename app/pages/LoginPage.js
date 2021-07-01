import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function LoginPage() {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')} />
            <Text style={styles.text}>What's up, native?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00ffff',
    },
    icon: {
        width: '64px',
        height: '64px',
        top: -225,
    },
    text: {
        color: '#fff',
    },
})
