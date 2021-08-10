import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome, Login, Register, ForgotPassword } from "../screens/Auth";

const Stack = createStackNavigator();

export default function AuthNav() {
    return (
        <Stack.Navigator initialRouteName="Welcome" headerMode="none">
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    );
}
