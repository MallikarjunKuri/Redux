// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// // import { getApiDataMethod } from '../../Redux/actions/GetApiAction'
// import * as actions from '../../Redux/actions';
// import { FlatList } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const APIexample = () => {
//     const [data, setData] = useState()
//     const dispatch = useDispatch()
//     const DataFromApi = useSelector(state => state.apiData)
//     console.log("DatafromAPI" + DataFromApi);
//     useEffect(() => {
//         getApi()
//     }, [])
//     const navigation = useNavigation();
//     const getDetail = (item) => {
//         const getData = [
//             {
//                 dataId: item.id,
//             },
//             {
//                 dataBrand: item.brand
//             }
//         ]
//         navigation.navigate('getDataModel', [{ dataId: item.id, dataBrand: item.brand }])
//         // console.log("details" + getData);
//     }

//     const getApi = async () => {
//         const result = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
//         const data = await result.json();
//         console.log(data)
//         dispatch(actions.getApiDataMethod(data))
//         // setData(data)
//     }
//     return (
//         <View>
//             <FlatList
//                 data={DataFromApi}
//                 renderItem={
//                     ({ item }) => {
//                         return (
//                             <TouchableOpacity onPress={() => getDetail(item)} >
//                                 <View style={styles.item_style}>
//                                     <View style={{ marginRight: 5 }}>
//                                         <Text>
//                                             id :{item.id}
//                                         </Text>
//                                     </View>
//                                     <View >
//                                         <Image style={{ width: 100, height: 100 }} source={{ uri: item.image_link }} />
//                                     </View>
//                                 </View>
//                             </TouchableOpacity>
//                         )
//                     }}
//             />
//         </View>
//     )
// }

// export default APIexample

// const styles = StyleSheet.create({
//     item_style: {
//         backgroundColor: 'skyblue',
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//         marginTop: 10,
//         alignItems: "center"
//     },
// })




import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../Redux/actions';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const APIexample = () => {
    const [data, setData] = useState()
    const dispatch = useDispatch()

    const DataFromApi = useSelector(state => state.apiData)

    console.log("DatafromAPI" + DataFromApi);

    useEffect(() => {
        getApi()
    }, [])

    const navigation = useNavigation();

    const getDetail = () => {
        navigation.navigate('getDataModel')
    }

    const getApi = async () => {
        const result = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        const data = await result.json();
        console.log(data)
        dispatch(actions.getApiDataMethod(data))
        // setData(data)
    }
    return (
        <View>
            <FlatList
                data={DataFromApi}
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

export default APIexample

const styles = StyleSheet.create({
    item_style: {
        backgroundColor: 'skyblue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 10,
        alignItems: "center"
    },
})





