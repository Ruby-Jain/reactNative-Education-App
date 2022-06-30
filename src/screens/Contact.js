import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = ({ navigation }) => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert("Plzz fill all the fields");
    } else {
      Alert.alert(`Thank You For Contacting Us ${name}! We will get back to you soon! `);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Please fill the given form to contact our counsellors</Text>

      <Text style={styles.description}>
        You can contact us anytime via jainruby89@gmail.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your name </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Ruby Jain"}
          value={name}
          onChangeText={(userdata) => setName(userdata)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Email </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"jainruby89@gmail.com"}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your mobile </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Ruby Jain"}
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> How can we help you? </Text>
        <TextInput 
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder={"Tell us about your self"}
          value={message}
          onChangeText={(msg) => setMessage(msg)}
          numberOfLines={7}
          multiline={true}
        />
      </View>

      {/* checkbox  */}

      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      {/* submit button  */}

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#008000" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={submit}>
        <Text style={styles.buttonText}> Contact Us </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    color:"black",
    paddingHorizontal: 30,
    backgroundColor: "#ffe44d",
    fontWeight:"bold",
  },
  mainHeader: {
    textAlign:"center",
    fontSize: 23,
    color: "black",
    fontWeight: "bold",
    paddingBottom:10,
    
    textTransform: "capitalize",
  },
  description: {
    textAlign:"center",
    fontSize: 16,
    color:"black",
    fontWeight:"bold",
    
    lineHeight: 20,
  },
  inputContainer: {
    marginTop: 18,
    color:"black",
    fontWeight:"bold",
  },
  labels: {
    // fontWeight: "bold",
    fontSize: 15,
    color:"black",
    fontWeight:"500",
    paddingBottom: 5,
    
    lineHeight: 25,
  },
  inputStyle: {
    fontWeight:"bold",
    height:50,
    color:"black",
    borderWidth: 1,
    borderWidth:2,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 2,
  },
  multilineStyle: {
    color:"black",
    paddingVertical: 2,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 22,
  },
  buttonText: {
    color: "black",
    justifyContent:"center",
    textAlign:"center",
    fontSize:22,
    alignItems:"center",
    height:30,
    fontWeight:"bold",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    fontWeight:"bold",
  
  },
  wrapperText: {
    marginLeft: 10,
    color: "black",
    fontWeight:"bold",
  
  },
});

export default Contact;
