import axios from 'axios';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';

export const AxiousPostApiExa1 = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const onsubmit = async () => {
        console.log("Name:", name);
        console.log("Age:", age);
        console.log("Email:", email);

        try {
            let result = await axios.post("http://10.0.2.2:3000/users", {
                name: name,
                age: age,
                email: email,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Response:", result.data);
            if (result) {
                alert('Post Successful');
            }
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };

    return (
        <SafeAreaView>
            <TextInput
                placeholder='name'
                style={styles.input}
                onChangeText={(text) => {
                    setName(text)
                }}
                value={name}
            />
            <TextInput
                placeholder='age'
                style={styles.input}
                onChangeText={(text) => {
                    setAge(text)
                }}
                value={age}
            />
            <TextInput
                placeholder='emailid'
                style={styles.input}
                onChangeText={(text) => {
                    setEmail(text)
                }}
                value={email}
            />
            <View>
                <Button
                    title='submit'
                    style={{ width: 100, height: 100, alignItems: "center" }}
                    onPress={onsubmit}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: "center",
    },
});
