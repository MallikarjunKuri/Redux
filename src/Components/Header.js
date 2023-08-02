import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={{ alignItems: "flex-end", backgroundColor: "gold" }}>
            <Text style={{ fontSize: 25, marginTop: 40, paddingRight: 20,marginBottom:10 }}>0</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {

    },
})