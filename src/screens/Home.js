import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../component/Menu";
/* import { Provider } from "react-redux";
import store from "../redux/store";
import { connect } from "react-redux"; */

const Home = (props) => {
    const description =
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";

    return (
       
            <View style={styles.mainContainer}>
                <View style={styles.homeTop}>
                    <Image
                        style={styles.headerImage}
                        resizeMode="contain"
                        source={require("../../assets/shiksha.jpeg")}
                    />

                    <Text style={styles.mainHeader}>Welcome to</Text>
                    <Text
                        style={[
                            styles.mainHeader,
                            {
                                fontSize: 28,
                                color: "#4c5dab",
                                marginTop: 0,
                                marginBottom: 12,
                            },
                        ]}>
                        {props.Name}
                    </Text>

                    <Text style={styles.paraStyle}>{description} </Text>
                </View>

                <View style={styles.menuStyle}>
                    <View style={styles.lineStyle}></View>
                    <Menu />
                    <View
                        style={[
                            styles.lineStyle,
                            {
                                marginVertical: 7,
                            },
                        ]}></View>
                </View>
            </View>
        
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#ffe033",
        textAlign: "center",
    },

    homeTop: {
        // height: "100%",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,

    },

    headerImage: {
        height: 250,
        width: 200,
        aspectRatio: 2,
        display: "flex",
        marginTop: 20,
        marginBottom: 20,
        alignItems: "stretch",

    },

    mainHeader: {
        borderColor: "black",
        borderTopWidth: 4,
        fontSize: 27,
        color: "#344055",
        fontWeight: "bold",
        textTransform: "uppercase",
    },

    paraStyle: {
        textAlign: "justify",
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
        marginTop: 10,
        alignItems: "center",
        lineHeight: 27,

    },

    lineStyle: {
        marginBottom: 5,
        borderWidth: 0.5,
        borderColor: "grey",
    },
});
/* const mapStateToProps = () => {
    return {
        cartVal: state
    }
} */
export default (Home);
