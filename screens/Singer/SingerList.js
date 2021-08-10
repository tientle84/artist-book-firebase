import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { db } from "../../components/Firebase/firebase";

const singersRef = db.collection("singers");

class SingerList extends Component {
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

    static navigationOptions = {
        title: "Singer",
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderSingerItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.birthDate}
                    onPress={() => navigate("SingerInfo", { singer: item })}
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
                data={this.state.singers}
                renderItem={renderSingerItem}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}

export default SingerList;
