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

const SearchStu = (props) => {
    const [searchStud, setSearchStud] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    return (
        <View style={{
            paddingVertical: 5,
            width: 410,
            flexDirection: "row",
            justifyContent: "space-around",
            elevation: 5,
            borderRadius: 15,
            backgroundColor: "white"
        }}>

            <TextInput style={{ left: 5, position: "relative", width: 369, backgroundColor: "#e1e1e2", fontWeight: "bold", borderRadius: 10, fontSize: 18, letterSpacing: 2 }}
                placeholder="  🔍  Search Student"

                //onChangeText={(text) => setValue(text)}
                onChangeText={(text) => {
                    setSearchStud(text);
                }}
                I />

            <TouchableOpacity onPress={() => {
  /* ask */     const compareddata = Users.filter((ele) => {
                return ele.name === searchStud
            })
                console.log(compareddata)
            }}>
                <Ionicons name="md-send" style={{ width: 33, left: 5, position: "relative" }} size={32} />
            </TouchableOpacity>

        </View>
    )
}
export default SearchStu;