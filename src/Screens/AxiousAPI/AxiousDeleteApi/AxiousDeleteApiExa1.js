import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiousDeleteApiExa1 = () => {
    const [data, setData] = useState([]);

    // define a function that retrieves API data and sets it in state
    const getApiData = async () => {
        // const url = "http://10.0.2.2:3000/users";
        try {
            const response = await axios.get("http://10.0.2.2:3000/users");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]);
        }
    };

    const deleteData = async (id) => {
        try {
            await axios.delete(`http://10.0.2.2:3000/users/${id}`);
            console.warn("User Deleted");
            getApiData();
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    // call the function to retrieve data
    useEffect(() => {
        getApiData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "orange", margin: 5, padding: 8 }}>
                <View style={{ flex: 1 }}><Text>Name</Text></View>
                <View style={{ flex: 2 }}><Text>Age</Text></View>
                <View style={{ flex: 2 }}><Text>Operations</Text></View>
            </View>
            <ScrollView>
                {data.length > 0 ? (
                    data.map((item) => (
                        <View key={item.id} style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "orange", margin: 5, padding: 8 }}>
                            <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
                            <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
                            <View style={{ flex: 1 }}><Button title='Delete' onPress={() => deleteData(item.id)} /></View>
                            <View style={{ flex: 1 }}><Button title='Update' /></View>
                        </View>
                    ))
                ) : (
                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <Text>No Data Found!</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default AxiousDeleteApiExa1;

const styles = StyleSheet.create({});
