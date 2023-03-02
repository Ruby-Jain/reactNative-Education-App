import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Courses from "../api/Courseapi";
/* import ShoppingCartIcon from "./ShoppingCartIcon";
import FlashMessage from "react-native-flash-message"; */
/* import { color } from "react-native-elements/dist/helpers"; */
/* import { Provider, useDispatch } from "react-redux";
import store from "../redux/store"; */
/* import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/actions/action"; */

//import Add from "../redux/actions/action";

const CourseDetails = ({ navigation, route }) => {
    //const dispatch = useDispatch()
    //const { Add } = bindActionCreators(actionCreators, dispatch)
    const id = route.params.courseId;
    console.log(id);

    const selectedCourse = Courses.find((element) => {
        return id === element.id;
    });

    return (
       
            <View style={styles.mainContainer}>
                <View style={styles.courseContainer}>
                    <View>
                        <Image
                            style={styles.cardImage}
                            source={selectedCourse.image}

                        />
                    </View>

                    <Text style={styles.mainHeader}>{selectedCourse.title}</Text>

                    <Text style={styles.description}>{selectedCourse.description}</Text>

                    <Text style={[styles.description, styles.subCourse]}>
                        {selectedCourse.course1}
                    </Text>

                    <Text style={[styles.description, styles.subCourse]}>
                        {selectedCourse.course2}
                    </Text>

                    <Text style={[styles.description, styles.subCourse]}>
                        {selectedCourse.course3}
                    </Text>

                    <View style={styles.buttonContainer}>
                        <Text style={styles.price}> {selectedCourse.price} </Text>
                        <TouchableOpacity
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonText}> Join Now </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
       
    );
};

// !todo style the course1 and make it uppercase

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "yellow",
    },
    courseContainer: {
        // height: "50%",
        // display: "flex",
        borderRadius: 50,
        backgroundColor: "#FFFF00",
        textAlign: "center",
        borderRadius: 30,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 8,
        paddingBottom: 18,
        margin: 25,
    },
    cardImage: {
        width: 200,
        display: "flex",
        borderRadius: 30,
        alignSelf: "center",
        height: 325,
        aspectRatio: 1,
    },
    mainHeader: {
        fontSize: 25,
        color: "#344055",
        textTransform: "uppercase",
        marginVertical: 10,
        fontWeight: "bold",

        textAlign: "center",
    },
    subHeader: {
        fontSize: 20,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "bold",

        textAlign: "justify",
        marginTop: 20,
    },
    description: {
        textAlign: "center",
        fontSize: 16,
        color: "#7d7d7d",
        paddingBottom: 10,

        lineHeight: 15,
    },
    subCourse: {
        textTransform: "uppercase",
        color: "#344055",
        fontWeight: "bold",
    },
    buttonContainer: {
        display: "flex",
        fontWeight: "bold",
        flexDirection: "row",
        justifyContent: "center",
    },
    price: {
        backgroundColor: "#344055",
        fontWeight: "bold",
        color: "#eee",
        paddingVertical: 5,
        paddingHorizontal: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 1,
        borderTopLeftRadius: 1,
        fontSize: 20,
        borderRadius: 50,
        textAlign: "center",
    },
    buttonStyle: {
        backgroundColor: "#809fff",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        paddingVertical: 7,
        fontWeight: "bold",
        paddingHorizontal: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",

    },
});

export default CourseDetails;
