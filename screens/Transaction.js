import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Transaction extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "teal", alignItems: "center", justifyContent: "center" }}>
                <Text> transaction screen </Text>
            </View>
        )
    }
}
