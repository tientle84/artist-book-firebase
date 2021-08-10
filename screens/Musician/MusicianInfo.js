import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

function RenderMusician({ musician }) {
    if (musician) {
        return (
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Avatar
                        size={120}
                        rounded
                        source={{
                            uri: musician.image,
                        }}
                        containerStyle={{ margin: 10 }}
                    />
                    <Text style={styles.nameText}>{musician.name}</Text>
                    <Text style={styles.infoText}>{musician.birthDate}</Text>
                    <Text style={styles.infoText}>{musician.birthPlace}</Text>
                    <View style={styles.bio}>
                        <Text style={styles.bioText}>{musician.bio}</Text>
                    </View>
                </View>
            </View>
        );
    }
    return <View />;
}

class MusicianInfo extends Component {
    static navigationOptions = {
        title: "Musician Information",
    };

    render() {
        const { musician } = this.props.route.params;
        return <RenderMusician musician={musician} />;
    }
}

export default MusicianInfo;

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
