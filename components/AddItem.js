import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from "react-native";
import axios from 'axios';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: ""
        };
    }

    onChangeText = (event) => {
        this.setState({
            newItem: event
        });
    }

    addItem = (newItem) => {
        axios.post("/api/addItem" , { "name": newItem } )
            .then(result => console.log('Added New Item: ', newItem))
            .catch(err => console.log("Failed to Add New Item: ", newItem));

        this.clearInput();
    }

    clearInput() {
        this.setState({
            newItem: ""
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    defaultValue={this.state.newItem}
                    style={styles.textInput}
                    autoCorrect={true}
                    placeholder="Add Item"
                    onChangeText={this.onChangeText}
                    clearButtonMode='while-editing'
                    blurOnSubmit={true}
                />
                <Button title="Add" onPress={ () => {this.addItem(this.state.newItem)} } />
            </View>
        );
    }
}
export default AddItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        borderColor: "gray",
        borderWidth: 1,
        width: 200,
        fontSize: 20
    }
});