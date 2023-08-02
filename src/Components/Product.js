import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/actions';

const Product = (props) => {
    const item = props.item
    const dispatch =useDispatch()

    const ooHandleAddToCart = (item) => {
        console.warn(item);
        dispatch(addToCart(item))
    }

    return (
        <View style={{ alignItems: "center", borderBottomColor: "red", borderBottomWidth: 2, padding: 10 }}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            <Text style={{ fontSize: 24 }}>{item.prise}</Text>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
            <Button title='add to cart' onPress={() => ooHandleAddToCart(item)} />
        </View>
    )
}

export default Product

const styles = StyleSheet.create({})