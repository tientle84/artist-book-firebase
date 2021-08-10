import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { db } from "../../components/Firebase/firebase";

const albumsRef = db.collection("albums");

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
        };
    }

    componentDidMount() {
        let albumList = [];
        albumsRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                albumList.push({ ...doc.data(), id: doc.id }); // add id prop (=doc id) for each album
            });

            this.setState({ albums: albumList });
        });
    }

    static navigationOptions = {
        title: "Album",
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderAlbumItem = ({ item }) => {
            return (
                <ListItem
                    title={item.title}
                    subtitle={item.by}
                    onPress={() => navigate("AlbumInfo", { album: item })}
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
                data={this.state.albums}
                renderItem={renderAlbumItem}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}

export default AlbumList;
