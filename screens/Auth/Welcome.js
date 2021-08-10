import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import AppButton from "../../components/AppButton";
import Colors from "../../utils/colors";
import useStatusBar from "../../hooks/useStatusBar";

export default function WelcomeScreen({ navigation }) {
    useStatusBar("light-content");

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require("../../assets/logo.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton
                    title="Login"
                    onPress={() => navigation.navigate("Login")}
                />
                <AppButton
                    title="Register"
                    color="secondary"
                    onPress={() => navigation.navigate("Register")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: Colors.white,
    },
    logoContainer: {
        position: "absolute",
        top: 200,
        alignItems: "center",
    },
    logo: {
        width: 250,
        height: 250,
    },
    buttonContainer: {
        padding: 20,
        paddingBottom: 60,
        width: "100%",
    },
});
