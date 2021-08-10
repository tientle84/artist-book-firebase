import React, { Component } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { db } from "../../components/Firebase/firebase";

const singersRef = db.collection("singers");

class FeaturedSingerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singers: [],
        };
    }

    componentDidMount() {
        let singerList = [];
        singersRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                singerList.push({ ...doc.data(), id: doc.id }); // add id prop (=doc id) for each singer
            });

            this.setState({ singers: singerList });
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderSingerItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ alignItems: "center" }}
                    onPress={() => navigate("SingerInfo", { singer: item })}
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
                        Featured Singers
                    </Text>
                    <TouchableOpacity onPress={() => navigate("Singer")}>
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
                    data={this.state.singers}
                    renderItem={renderSingerItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}

export default FeaturedSingerList;
