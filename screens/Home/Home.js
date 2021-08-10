import React from "react";
import useStatusBar from "../../hooks/useStatusBar";
import { ScrollView } from "react-native";
import FeaturedMusicianList from "../Home/FeaturedMusicianList";
import FeaturedSingerList from "../Home/FeaturedSingerList";
import FeaturedAlbumList from "../Home/FeaturedAlbumList";

export default function HomeScreen({ navigation }) {
    useStatusBar("dark-content");

    return (
        <ScrollView>
            <FeaturedMusicianList navigation={navigation} />
            <FeaturedSingerList navigation={navigation} />
            <FeaturedAlbumList navigation={navigation} />
        </ScrollView>
    );
}
