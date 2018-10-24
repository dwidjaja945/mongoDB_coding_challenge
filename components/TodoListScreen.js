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
            listData: []
        }
    }

    componentDidMount() {
        this.getListData();
    }

    async getListData() {
        const listData = await axios.get("/api/get_list_data");

        this.setState({
            listData: listData.data.data
        });
    }

    deleteItem = async (item) => {
        await axios.delete( "/api/delete_item" , { item } );
        console.log("Item deleted:", item);
        
        this.getListData();
    }

    render() {
        const { listData } = this.state;
        const { navigate } = this.props.navigation

        console.log(this.state.listData);

        const todoList = listData.map((item, itemIndex) => {
            return (
                <View style={styles.list_item} key={itemIndex}>
                    <Text onPress={ () => { navigate( "TodoListItem" , {item} ) } } style={styles.item} >{item.item}</Text>
                    <Text onPress={ () => {this.deleteItem(item.item)} } > X </Text>
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