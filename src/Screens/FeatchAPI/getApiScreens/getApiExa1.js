import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const GetApiExa1 = () => {
    const [data, setData] = useState();
    // define a function that retrieves API data and sets it in state
    const getApiData = async () => {
        const url = "http://10.0.2.2:3000/users"
        let result = await fetch(url);
        result = await result.json();
        console.warn("result:", result);
        setData(result)
    }
    // call the function to retrieve data
    useEffect(() => {
        getApiData();
    }, [])
    return (
        <View>
            <Text>getApiExa1</Text>
            {
                data ?
                    data.map((item) => <View>
                        <Text>{item.name}</Text>
                        <Text>{item.id}</Text>
                        <Text>{item.age}</Text>
                    </View>) : <View>
                        <Text>
                            No Data Found!
                        </Text>
                    </View>

            }
        </View>
    )
}

export default GetApiExa1

const styles = StyleSheet.create({})