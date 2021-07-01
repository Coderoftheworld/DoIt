import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export default function ListPage() {
    const [listItem, setListItem] = useState('')
    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00ffff',
    },
})
