import React from "react";
import { View, Text, Button } from "react-native";
import { logout } from "../../components/Firebase/firebase";

async function handleSignOut() {
    try {
        await logout();
    } catch (error) {
        console.log(error);
    }
}

export default function Profile() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Profile!</Text>
            <View>
                <Button title="Sign Out" onPress={handleSignOut} />
            </View>
        </View>
    );
}
