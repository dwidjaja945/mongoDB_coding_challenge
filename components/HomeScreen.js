import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class HomeScreen extends Component {

    navigate_to_todoList = () => {
        this.props.navigation.navigate("TodoList");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to the Backend Challenge.</Text>
                <Text style={styles.instructions} >Please click below to navigate to TodoList</Text>
                <Button onPress={this.navigate_to_todoList} title="Navigate to TodoList"/>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20
    },
    instructions: {
        fontSize: 15
    }
});