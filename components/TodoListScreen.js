import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import axios from 'axios';

/******************* Components *******************/
import AddItem from './AddItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            listData: ["Default Item one", 'Default Item two', 'Default Item three', 'Default Item four']
        }
    }

    componentDidMount() {
        const listData = axios.get("/api/getListData");

        this.setState({
            listData
        })
    }

    deleteItem = (item) => {
        axios.delete( "/api/delete_item" , { item } );
        console.log("Item deleted:" , item );
    }

    render() {
        const { listData } = this.state;
        const { navigate } = this.props.navigation

        console.log(this.state.listData);

        const todoList = listData.map((item, itemIndex) => {
            return (
                <View style={styles.list_item} key={itemIndex}>
                    <Text onPress={ () => { navigate( "TodoListItem" , {item} ) } } style={styles.item} >{item}</Text>
                    <Text onPress={ () => {this.deleteItem(item)} } > X </Text>
                </View>
            )
        });

        return (
            <View style={styles.container}>
                <View style={styles.list_body}>
                    {todoList}
                </View>
                <AddItem />
            </View>
        );
    }
}

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    list_body: {
        flex: 1 ,
        alignItems: "center",
        justifyContent: "center"
    },
    list_item: {
        flexDirection: "row",
        width: 200,
        justifyContent: "space-between"
    },
    item : {
        fontSize: 15
    }
});