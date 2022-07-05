import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Courses from "../api/Courseapi";
import ShoppingCartIcon from "./ShoppingCartIcon";


const Course = ({ navigation }) => {

  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
            />
          </View>

          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("CourseDetails", {
                  courseId: item.id,
                })
              }>
              <Text style={styles.buttonText}> Course Details </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
      
    />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderColor:"black",
    borderWidth:3,
    borderRadius: 50,
  },
  mainContainer: {
    paddingHorizontal: 20,
    backgroundColor: "#FFD500",
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "#FFFF00",
    textAlign: "center",
    borderRadius: 70,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 26,
    marginTop:10,
    color: "#344055",
    textTransform: "uppercase",
    // fontWeight: 500,
    paddingBottom: 15,
    fontWeight:"bold",
    textAlign: "center",
   
  },
  description: {
    textAlign: "center",
  
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "black",
    borderRadius: 30,
    fontWeight:"bold",
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight:"bold",
    color: "white",
    textTransform: "capitalize",
  },
});

export default Course;
