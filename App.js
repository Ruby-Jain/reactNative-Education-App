import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import UserData2 from "./src/screens/UserData2";
import CourseDetails from "./src/screens/CourseDetails";
import StudentData from "./src/screens/StudentData";
import ShoppingCartIcon from "./src/screens/ShoppingCartIcon";
import SearchStu from "./src/screens/SearchStu";
/* import { Provider } from "react-redux";
import store from "./src/store";
import Add from "./src/redux/actions/action";
import rootreducer from "./src/redux/reducers/rootreducer"; */


export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    {/* home screen  */}
                    <Stack.Screen
                        name="Home"
                        options={{
                            headerShown: false,
                        }}>
                        {(props) => <Home {...props} Name={"SHIKSHA ENTERPRISE"} />}
                    </Stack.Screen>

                    {/* Course Screen  */}
                    <Stack.Screen
                        name="Our Courses"
                        component={Course}

                        options={{
                            headerTitleStyle: {
                                fontSize: 25,
                            },
                            headerRight: () => (<ShoppingCartIcon />),
                            headerTitleAlign: "center",
                        }}
                    />
                    {/* UserData2 Screen  */}
                    <Stack.Screen

                        name="Student"
                        component={UserData2}
                        options={{
                            headerTitleStyle: {
                                fontSize: 25,
                            },
                            headerTitle: "About Our Students",
                            headerTitleAlign: "center",
                        }}
                    />

                    {/* About Screen  */}
                    <Stack.Screen
                        name="About Owner"
                        component={About}
                        options={{
                            headerTitleStyle: {
                                fontSize: 25,

                            },
                            headerTitleAlign: "center",
                        }}
                    />

                    {/* Contact Screen  */}
                    <Stack.Screen
                        name="Contact Us"
                        component={Contact}
                        options={{
                            headerTitleStyle: {
                                fontSize: 25,

                            },
                            headerTitleAlign: "center",
                        }}
                    />

                    {/* CourseDetails Screen  */}
                    <Stack.Screen
                        name="CourseDetails"
                        component={CourseDetails}

                        options={{
                            headerTitleStyle: {
                                fontSize: 25,

                            },
                            headerRight: () => (<ShoppingCartIcon />),
                            headerTitleAlign: "center",
                        }}
                    />
                    <Stack.Screen
                        name="Text Data"
                        component={StudentData}
                        options={{
                            headerTitleStyle: {
                                fontSize: 25,

                            },
                            headerTitleAlign: "center",
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
      

    );
}
