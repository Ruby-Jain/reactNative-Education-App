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
import { Ionicons } from '@expo/vector-icons';

const SearchStu = ({ item }) => {
     const [searchStud, setSearchStud] = useState("");
     const [filterData, setFilterData] = useState([]);
    return (
        <View style={{
            paddingVertical: 5,
            width: 410,
            right: 7,
            position: "relative",
            flexDirection: "row",
            justifyContent: "space-around",
            elevation: 5,
            borderRadius: 15,
            backgroundColor: "white"
        }}>

            <TextInput style={{ width: 365, backgroundColor: "#e1e1e2", fontWeight: "bold", borderRadius: 10, fontSize: 18, letterSpacing: 2 }}
                placeholder="  🔍  Search Student"

                //onChangeText={(text) => setValue(text)}
                onChangeText={(text) => {
                    setSearchStud(text);
                }}
                I />

            <TouchableOpacity onPress={() => {
  /* ask */     Users.filter((item) => {
                if (searchStud === "") {
                    return console.log(item)
                } else if (item.id.includes(searchStud) || item.name.toLowerCase().includes(searchStud.toLowerCase()) || item.courseenroll.toLowerCase().includes(searchStud.toLowerCase())) {
                    return console.log(item)
                }
            })
            }}>
                <Ionicons name="md-send" size={32} />
            </TouchableOpacity>

        </View>
    )
}
export default SearchStu;