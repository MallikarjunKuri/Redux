import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ApiCallingWithFeatch() {

    const [data, setData] = useState();

    const getAPIData = async () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=IN&apiKey=aa6a097fb9fb4509958fdabd1942e6d1'
        let result = await fetch(url)
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getAPIData();
    }, [])

    return (
        <View>
            <FlatList
                data={data}
                renderItem={
                    ({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => getDetail(item)} >
                                <View style={styles.item_style}>
                                    <View style={{ marginRight: 5 }}>
                                        <Text>
                                            id :{item.id}
                                        </Text>
                                    </View>
                                    <View >
                                        <Image style={{ width: 100, height: 100 }} source={{ uri: item.image_link }} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

