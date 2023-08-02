
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from "react";
import DetailModel from '../../../Components/DetailModel';

export default function APIgetMethod() {
    const [model, setModel] = useState(false)
    const [details, setDetails] = useState([])
    const [data, setData] = useState("");

    useEffect(() => {
        getApi()
    }, [])

    const getApi = async () => {
        const result = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        const data = await result.json();
        setData(data)
    }
    const getDetails = (value) => {
        setModel(!model)
        setDetails(value)
    }
    // console.log("model=====", model, details);
    return (
        <View >
            <FlatList
                data={data}
                renderItem={
                    ({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => getDetails(item)}>
                                <View style={styles.item_style}>
                                    <View style={{ marginRight: 5 }}>
                                        <Text>
                                            id :{item.id}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
            />
            <View>
                <DetailModel
                    data={details}
                    visible={model}
                    close={() => setModel(false)}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DAD6F5',
        width: "100%",
    },
    userNameStyle: {
        textAlign: 'center',
        backgroundColor: 'yellow',
        padding: 20,
        alignItems: "center",
        marginTop: 30,
        marginHorizontal: 16,
    },
    buttonStyle: {
        width: 250,
        height: 200,
        marginTop: 50,
        marginHorizontal: 60,
    },
    item_style: {
        backgroundColor: 'skyblue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 10,
        alignItems: "center"
    },
});


