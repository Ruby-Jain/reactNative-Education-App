import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Users from "../api/usersapi";
//import { Ionicons } from '@expo/vector-icons';
import SearchStu from "./SearchStu";

const UserData2 = ({ navigation, route }) => {

    const userCard = ({ item }) => {

        return (

            <View style={styles.mainContainer}>


                <View style={styles.userContainer}>
                    <View>
                        <Image
                            style={styles.cardImage}
                            source={item.image}
                        />
                    </View>
                    <Text style={styles.mainHeader}>NAME: {item.name}</Text>
                    <Text style={styles.biodata}>BIODATA</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.enroll}>
                        COURSE ENROLLED: {item.courseenroll}
                    </Text>
                </View>
            </View>
        );
    };
    return (

        <FlatList
            ListHeaderComponent={SearchStu}
            keyExtractor={(item) => item.id}
            data={Users}
            renderItem={userCard}
        />


    );
};



// !todo style the user1 and make it uppercase

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#FFD700",
        paddingHorizontal: 10,
        color: "black",
    },
    userContainer: {
        // height: "50%",
        // display: "flex",
        backgroundColor: "#F0E68C",
        textAlign: "center",
        borderRadius: 50,
        borderColor: "black",
        borderWidth: 5,
    },
    cardImage: {
        width: 345,
        padding: 5,
        alignSelf: "center",
        borderRadius: 50,
        height: 390,
        borderColor: "black",
        borderBottomWidth: 4,
    },

    mainHeader: {
        paddingTop: 10,
        fontSize: 25,
        color: "black",
        textTransform: "uppercase",
        fontWeight: "bold",

        textAlign: "center",
    },
    subHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        paddingTop: 20,
        textAlign: "center",
    },
    biodata: {
        fontSize: 22,
        color: "black",
        fontWeight: "bold",
        paddingTop: 20,
        textAlign: "center",
    },

    enroll: {
        fontWeight: "bold",
        color: "black",
        fontSize: 18,
        textAlign: "center",
        paddingBottom: 30,
    },

    description: {
        textAlign: "center",
        fontSize: 16,
        color: "#7d7d7d",
        paddingTop: 20,
        paddingBottom: 30,

        lineHeight: 15,
    },
});

export default UserData2;
