import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "../components/Firebase/firebase";
import navigationTheme from "./navigationTheme";
import AuthNav from "./AuthNav";
import { AuthUserContext } from "./AuthUserProvider";
import Spinner from "../components/Spinner";
import AppNav from "./AppNav";

export default function Routes() {
    const { user, setUser } = useContext(AuthUserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // onAuthStateChanged returns an unsubscriber
        const unsubscribeAuth = auth.onAuthStateChanged(async (authUser) => {
            try {
                await (authUser ? setUser(authUser) : setUser(null));
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        });

        // unsubscribe auth listener on unmount
        return unsubscribeAuth;
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <NavigationContainer theme={navigationTheme}>
            {user ? <AppNav user={user} /> : <AuthNav />}
        </NavigationContainer>
    );
}
