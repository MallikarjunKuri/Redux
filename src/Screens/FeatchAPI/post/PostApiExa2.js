import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostDataWithTextInput = () => {
    const PostApiData = async () => {
        const data = {
            "userId": 11,
            "id": 101,
            "title": "at ea labore ea harum",
            "body": "cupiditate nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
        }
        console.log(data);
        // const url='https://jsonplaceholder.typicode.com/posts'
        const url = "https://jsonplaceholder.typicode.com/posts"
        let result = await fetch(url, {
            method: 'POST',
            headers: { "content-type": "appitication/json" },
            body: JSON.stringify(data) //converting object to json format before sending it as
        })
        result = await result.json();
        console.log("result:", result);
    }
    return (
        <View>
            <Text style={{ fontSize: 30, marginBottom: 60 }}>PostDataWithTextInput</Text>
            <Button title='save data' onPress={PostApiData} />
        </View>
    )
}

export default PostDataWithTextInput

const styles = StyleSheet.create({

})