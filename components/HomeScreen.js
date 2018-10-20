import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to the Backend Challenge.</Text>
                <Text>Please click below to navigate to TodoList</Text>
                <Button title="Navigate to TodoList"/>
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
    }
});