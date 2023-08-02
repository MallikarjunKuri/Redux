import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export const AxiousGetApiExa2 = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const result = await axios.get("http://10.0.2.2:3000/users");
            console.log(result);
            setData(result.data); // Assuming the API response is an array of data
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]); // Set empty array in case of an error to prevent map errors
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View>
            <Text>AxiousGetApiExa2</Text>
            {data.length > 0 ? (
                data.map((item) => (
                    <View key={item.id} style={styles.boxdata}>
                        <View><Text>{item.name}</Text></View>
                        <Text>{item.email}</Text>
                        <Text>{item.age}</Text>
                    </View>
                ))
            ) : (
                <View>
                    <Text>No Data Found!</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    boxdata: {
        backgroundColor: '#f5c742',
    }
});




