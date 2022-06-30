import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> RUBY JAIN</Text>
      <Text style={styles.paraStyle}> Hi Everyone !!! 😀 </Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={require("../../assets/course/Ruby.jpg")}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor.
        </Text>
      </View>

      <Text style={[styles.aboutSubHeader,styles.paracolor]}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/xquisite_coder/")
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UCbZm-wHSXemuWY9SPagJCFQ"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UCbZm-wHSXemuWY9SPagJCFQ"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffe033",
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 30,
    color: "black",
    textTransform: "uppercase",
    fontWeight: "bold",
    // marginTop: 50,
    marginTop: 10,
    marginBottom: 18,
    
  },
  paraStyle: {
    fontSize: 18,
    color: "black",
    paddingBottom: 19,
    
  },
  aboutLayout: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    marginTop: 20,
    padding:0,
    borderRadius: 50,
  },
  aboutSubHeader: {
    fontSize: 19,
    textAlign:"center",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginVertical: 16,
    
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    fontSize: 15,
    
    lineHeight: 30,
    textAlign:"center",
    alignItems:"center",
    borderRadius:20,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom:30,
    marginTop:9,
    justifyContent: "space-evenly",
  },
  paracolor: {
    color:"black",
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About;
