import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#00FFF2', '#0002FF']}
                start={[1, 0]}
                style={styles.background}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
});
