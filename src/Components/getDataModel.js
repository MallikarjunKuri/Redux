import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const getDataModel = (props) => {
    console.log("data" + props.route.params);

    const dataDetails = props.route.params
    return (
        <View style={{ flex: 1 }}>
            <Modal visible={true}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: "80%", height: "70%", backgroundColor: "white", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                        <ActivityIndicator style={{ width: 100, height: 100 }} />
                        <Text>{dataDetails.id}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default getDataModel

const styles = StyleSheet.create({
    container: {},
})