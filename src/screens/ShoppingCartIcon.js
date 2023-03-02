import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
//import {useSelector } from "react-redux";


const myIcon = <Icon name="cart" size={36} />

const ShoppingCartIcon = () => {
    /* const cart = useSelector(state => state.cart) */
    return (
        <>
            <View style={styles.container}>
                <View style={styles.cartno}>
                    {myIcon}

                </View>

            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        left: 15,
        position: "relative",
        textAlign: "right"
    }
});

export default ShoppingCartIcon;