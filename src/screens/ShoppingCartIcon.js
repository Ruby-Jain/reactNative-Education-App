import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = <Icon name="cart" size={36} />

const ShoppingCartIcon = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cartno}>
                <Text style={{color:"white",fontWeight:"bold",fontSize:18}}>0</Text>
            </View>
            {myIcon}
        </View>
    )
}
const styles = StyleSheet.create({
    cartno: {
        backgroundColor: "green",
        opacity:0.6,
        borderStyle:"solid",
        borderWidth:1,
        borderRadius:300,
        textAlign:"center",
        top:10,
        right:12,
        position:"relative",
        alignItems:"center"

      
    },
    container: {
        left: 15,
        position: "relative",
        textAlign: "right"
    }
});

export default ShoppingCartIcon;