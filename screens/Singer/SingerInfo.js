import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

function RenderSinger({ singer }) {
    if (singer) {
        return (
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Avatar
                        size={120}
                        rounded
                        source={{
                            uri: singer.image,
                        }}
                        containerStyle={{ margin: 10 }}
                    />
                    <Text style={styles.nameText}>{singer.name}</Text>
                    <Text style={styles.infoText}>{singer.birthDate}</Text>
                    <Text style={styles.infoText}>{singer.birthPlace}</Text>
                    <View style={styles.bio}>
                        <Text style={styles.bioText}>{singer.bio}</Text>
                    </View>
                </View>
            </View>
        );
    }
    return <View />;
}

class SingerInfo extends Component {
    static navigationOptions = {
        title: "Singer Information",
    };

    render() {
        const { singer } = this.props.route.params;
        return <RenderSinger singer={singer} />;
    }
}

export default SingerInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 15,
    },
    nameText: {
        fontSize: 36,
        fontWeight: "200",
    },
    infoText: {
        fontSize: 15,
        color: "#AEB5BC",
    },
    bio: {
        margin: 20,
    },
    bioText: {
        margin: 15,
        fontSize: 18,
        fontWeight: "200",
        textAlign: "justify",
    },
});
