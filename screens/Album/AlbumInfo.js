import React, { Component } from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    ImageBackground,
} from "react-native";
import { Card } from "react-native-elements";
import AudioPlayer from "./Player/AudioPlayer";
import { LinearGradient } from "expo-linear-gradient";

function RenderAlbum({ album }) {
    if (album) {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.card}
                    imageStyle={styles.imageStyle}
                    source={
                        album.image
                            ? { uri: album.image }
                            : require("../../assets/default_album.png")
                    }
                    resizeMode="cover"
                >
                    <LinearGradient
                        style={styles.overlay}
                        colors={["rgba(0, 0, 0, 1)", "transparent"]}
                        start={[0, 0]}
                        end={[1, 0]}
                    />
                    <View>
                        <Text style={styles.title}>{album.title}</Text>
                        <Text style={styles.subtitle}>{album.by}</Text>
                        <Text style={styles.subtitle}>
                            {album.genre} • {album.date}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
            // <Card title={album.title}>
            //     {/* <Image
            //         source={{ uri: album.image }}
            //         style={{
            //             height: 135,
            //             width: 155,
            //         }}
            //     /> */}
            //     <Text style={{ margin: 10 }}>{album.by}</Text>
            //     <Text style={{ margin: 10 }}>{album.date}</Text>
            // </Card>
        );
    }
    return <View />;
}

class AlbumInfo extends Component {
    static navigationOptions = {
        title: "Album Information",
    };

    render() {
        const { album } = this.props.route.params;
        return (
            <ScrollView>
                <RenderAlbum album={album} />
                <Card>
                    <AudioPlayer tracks={album.tracks} />
                </Card>
            </ScrollView>
        );
    }
}

export default AlbumInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        margin: 10,
    },
    card: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderRadius: 8,
        paddingBottom: 10,
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
    },
    overlay: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: null,
        height: 150,
        borderRadius: 8,
    },
    imageStyle: {
        borderRadius: 8,
    },
    title: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Roboto",
    },
    subtitle: {
        color: "#FFF",
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
    },
});
