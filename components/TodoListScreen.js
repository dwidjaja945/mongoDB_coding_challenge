import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class TodoList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TodoList</Text>
            </View>
        );
    }
}
export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});