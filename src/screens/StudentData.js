import { View, Text, Button, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { SearchBar } from "react-native-elements";
//import * as fs from "fs/promises";
//import studentsData from './studentsData.txt';
//import raw from 'raw.macro';


const StudentData = () => {

    const [data, setData] = useState("");
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState("");

    const renderHeader = (text) => {
        return (
            <SearchBar
                placeholder="Search Text Data"
                darkTheme
                round
                editable={true}
                value={text}
                ChangeText={() => setText(text)}
            />
        )
    }
    /* const textdata = require("../api/StudentsData.txt");

    const searchData = (textdata) => {
        textdata.filter((item) => {
            if (searchText === "") {
                return console.log(textdata)
            } else if (item.id.includes(searchStu) || item.name.toLowerCase().includes(searchStu.toLowerCase()) || item.courseenroll.toLowerCase().includes(searchStu.toLowerCase())) {
                return console.log(item)
            } */

    /*  RNFS.readFileAssets(path)
         .then((contents)=>{
           var contentString=contents.toString();
         } */
    /* const getText = () => { */
    /* loading
    var RNFS = require('react-native-fs');
    var path1 = '../../assets/StudentsData.txt';
    var path2 = '../../assets/StudentsData2.txt';
    const path = [path1, path2];
    RNFS.readFile().map().path((contents) => {
            var fileContent = contents.text();
            for (var i = 0; i < fileContent.length(); i++) {
                var text = fileContent.IndexAt(i);
                console.log(text);
                setData(text);
                setLoading(false);
            }
        }) */


    /* if (sdata.value.length() > 0) {
        console.log(sdata);
        setData(sdata);
        setLoading(false);
    } */

    //setData(sdata);
    /* catch {
        (error => {
            console.log("error");
            console.error(error);
        })
    } */


    return (
        <FlatList
            ListHeaderComponent={renderHeader}
            data={data}
            renderItem={() => {
                return (
                    <Text>
                        {useEffect(async () => {
                            const res = await fetch('studentsData.txt');
                            const studata = await res.text();
                            for (var i = 0; i < studata.length(); i++) {
                                setData(charAt(i));
                            }
                        })}
                    </Text>
                );
            }}
            keyExtractor={item => item}
        />

    );


};
export default StudentData;
