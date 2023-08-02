import React, { useRef, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

const PostFormValidation = () => {
    //state for input feilds
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    //state for error message for input validation
    const [nameError, setNameEorror] = useState('');
    const [ageError, setAgeError] = useState('');
    const [emailError, setEmailError] = useState('');

    const onsubmit = async () => {
        console.warn(name);
        console.warn(age);
        console.warn(email);

        if (!name) {
            setNameEorror(true);
        } else {
            setNameEorror(false)
        }
        if (!age) {
            setAgeError(true);
        }
        else {
            setAgeError(false)
        }
        if (!email) {
            setEmailError(true);
        }
        else {
            setEmailError(false)
        }

        if (!name || !age || !email) {
            return false
        }

        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" }, // Corrected header key
            body: JSON.stringify({ name, age, email }) // Wrap the name in an object before converting to JSON
        });
        const data = await result.json(); // Parse the response without passing any argument
        console.log("result:", data);
        console.log("name", name);
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
            {
                nameError ? <Text style={styles.errorText}>Please enter a valid name</Text> : null
            }
            <TextInput
                placeholder='age'
                style={styles.input}
                onChangeText={(text) => {
                    setAge(text)
                }}
                value={age}
            />
            {
                ageError ? <Text style={styles.errorText}>Please enter a age</Text> : null
            }
            <TextInput
                placeholder='emailid'
                style={styles.input}
                onChangeText={(text) => {
                    setEmail(text)
                }}
                value={email}
            />
            {
                emailError ? <Text style={styles.errorText}>Please enter a valid eail</Text> : null
            }
            <View>
                <Button title='submit' style={{ width: 100, height: 100, alignItems: "center" }} onPress={onsubmit} />
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
        marginBottom: 5
    },
    errorText: {
        color: 'red',
        marginLeft: 20
    }
});

export default PostFormValidation;
