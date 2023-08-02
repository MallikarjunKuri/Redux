import { ActivityIndicator, Modal, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const DetailModel = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Modal visible={props.visible}>
                <View style={{ flex: 1, backgroundColor: '#000000aa', justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity onPress={props.close}>
                        <View>
                            <Image source={require("../../assets/close.png")} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: "80%", height: "70%", backgroundColor: "white", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: props.data.image_link }} />
                    </View>

                </View>
            </Modal>
        </View>
    )
}

export default DetailModel

const styles = StyleSheet.create({
    container: {},
})