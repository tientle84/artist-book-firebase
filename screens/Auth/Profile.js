import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import AppButton from "../../components/AppButton";
import { logout } from "../../components/Firebase/firebase";

async function handleSignOut() {
    try {
        await logout();
    } catch (error) {
        console.log(error);
    }
}

export default function Profile(props) {
    return (
        <View style={styles.container}>
            <Avatar
                size={120}
                rounded
                source={require("../../assets/default_user.png")}
                containerStyle={{ margin: 10 }}
            />
            <Text>{props.user.email}</Text>
            <AppButton
                title="Sign Out"
                color="secondary"
                onPress={handleSignOut}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
});
