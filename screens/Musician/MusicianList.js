import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { db } from "../../components/Firebase/firebase";

const musiciansRef = db.collection("musicians");

class MusicianList extends Component {
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

    static navigationOptions = {
        title: "Musician",
    };

    render() {
        const { navigate } = this.props.navigation;
        //console.log(this.state.musicians);
        const renderMusicianItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.birthDate}
                    onPress={() => navigate("MusicianInfo", { musician: item })}
                    leftAvatar={{
                        source: { uri: item.image },
                        rounded: true,
                        size: "large",
                    }}
                />
            );
        };

        return (
            <FlatList
                centerContent={true}
                data={this.state.musicians}
                renderItem={renderMusicianItem}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}

export default MusicianList;
