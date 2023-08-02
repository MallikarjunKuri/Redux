import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PostApiExa4 = () => {

    const PostApiData = async () => {
        const data = { // Move this line up to declare the 'data' variable before using it
            name: "arjun",
            age: 25,
        };
        console.log("data", data);

        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url, { // Move the 'data' object inside the fetch() options
            method: 'POST',
            headers: { "Content-Type": "application/json" }, // Fix typo in 'application'
            body: JSON.stringify(data) // Convert object to JSON format before sending it
        });
        result = await result.json();
        console.warn("result:", result);
    };

    return (
        <View>
            <Text style={{ fontSize: 30, marginBottom: 60 }}>PostDataWithTextInput</Text>
            <Button title='save data' onPress={PostApiData} />
        </View>
    );
};

export default PostApiExa4;

const styles = StyleSheet.create({

});
