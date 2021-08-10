import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import Home from "../screens/Home/Home";
import { MusicianList, MusicianInfo } from "../screens/Musician";
import { SingerList, SingerInfo } from "../screens/Singer";
import { AlbumList, AlbumInfo } from "../screens/Album";
import Profile from "../screens/Auth/Profile";

const Tab = createBottomTabNavigator();

export default function AppNav(props) {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={AppStack}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Musician"
                component={MusicianStack}
                options={{
                    tabBarLabel: "Musician",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="user-edit"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Singer"
                component={SingerStack}
                options={{
                    tabBarLabel: "Singer",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="user-tie"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Album"
                component={AlbumStack}
                options={{
                    tabBarLabel: "Album",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="album"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                //component={Profile}
                children={() => <Profile user={props.user} />}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Musician" component={MusicianList} />
            <Stack.Screen name="MusicianInfo" component={MusicianInfo} />
            <Stack.Screen name="Singer" component={SingerList} />
            <Stack.Screen name="SingerInfo" component={SingerInfo} />
            <Stack.Screen name="Album" component={AlbumList} />
            <Stack.Screen name="AlbumInfo" component={AlbumInfo} />
        </Stack.Navigator>
    );
}

function MusicianStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Musician" component={MusicianList} />
            <Stack.Screen name="MusicianInfo" component={MusicianInfo} />
        </Stack.Navigator>
    );
}

function SingerStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Singer" component={SingerList} />
            <Stack.Screen name="SingerInfo" component={SingerInfo} />
        </Stack.Navigator>
    );
}

function AlbumStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Album" component={AlbumList} />
            <Stack.Screen name="AlbumInfo" component={AlbumInfo} />
        </Stack.Navigator>
    );
}
