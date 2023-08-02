import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';

const DeteleApiExa1 = () => {
    const [data, setData] = useState();
    // define a function that retrieves API data and sets it in state
    const getApiData = async () => {
        const url = "http://10.0.2.2:3000/users"
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result)
        }

    }

    const deleteData = async (id) => {
        const url = "http://10.0.2.2:3000/users"
        console.warn(`${url}/${id}`);
        let result = await fetch(`${url}/${id}`,
            {
                method: "delete"
            });
        result = await result.json();
        if (result) {
            // setData(result)
            console.warn("user Deleted");
            getApiData();
        }

    }
    // call the function to retrieve data
    useEffect(() => {
        getApiData();
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "orange", margin: 5, padding: 8 }}>
                <View style={{ flex: 1 }}><Text>Name</Text></View>
                <View style={{ flex: 2 }}><Text>Age</Text></View>
                <View style={{ flex: 2 }}><Text>Operations</Text></View>
            </View>
            <ScrollView>
                {
                    data ?
                        data.map((item) => <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "orange", margin: 5, padding: 8 }}>
                            <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
                            <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
                            <View style={{ flex: 1 }}><Button title='Delete' onPress={() => deleteData(item.id)} /></View>
                            <View style={{ flex: 1 }}><Button title='Update' /></View>
                        </View>) : null

                }
            </ScrollView>
        </View>
    )
}

export default DeteleApiExa1

const styles = StyleSheet.create({})