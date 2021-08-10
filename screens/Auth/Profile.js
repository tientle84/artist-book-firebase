import React from "react";
import { View, Text, Button } from "react-native";
import { Avatar } from "react-native-elements";
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
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Avatar
                size={120}
                rounded
                source={require("../../assets/default_user.png")}
                containerStyle={{ margin: 10 }}
            />
            <Text>{props.user.email}</Text>
            <View style={{ marginTop: 50 }}>
                <Button title="Sign Out" onPress={handleSignOut} />
            </View>
        </View>
    );
}
