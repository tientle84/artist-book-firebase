import React, { Component } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { db } from "../../components/Firebase/firebase";

const musiciansRef = db.collection("musicians");

class FeaturedMusicianList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musicians: [],
        };
    }

    componentDidMount() {
        let musicianList = [];
        musiciansRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                musicianList.push({ ...doc.data(), id: doc.id }); // add id prop (=doc id) for each musician
            });

            this.setState({ musicians: musicianList });
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderMusicianItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ alignItems: "center" }}
                    onPress={() => navigate("MusicianInfo", { musician: item })}
                >
                    <Avatar
                        size={120}
                        rounded
                        source={{
                            uri: item.image,
                        }}
                        containerStyle={{ margin: 10 }}
                    />
                    <Text style={{ margin: 10 }}>{item.name}</Text>
                </TouchableOpacity>
            );
        };

        return (
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{ fontSize: 17, fontWeight: "bold", margin: 10 }}
                    >
                        Featured Musicians
                    </Text>
                    <TouchableOpacity onPress={() => navigate("Musician")}>
                        <Text
                            style={{
                                fontSize: 17,
                                fontWeight: "bold",
                                margin: 10,
                            }}
                        >
                            SEE ALL
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    centerContent={true}
                    horizontal={true}
                    data={this.state.musicians}
                    renderItem={renderMusicianItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}

export default FeaturedMusicianList;
