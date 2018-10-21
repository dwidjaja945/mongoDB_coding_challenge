import React, { Component , Fragment } from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	TextInput
} from "react-native";
import axios from 'axios';

class TodoListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			itemName: props.navigation.state.params.item,
			editMode: false,
			editText: ""
		};
	}

	onChangeText = (event) => {
		this.setState({
			newItem: event
		});
	}

	addItem = (newItem) => {
		axios.post("/api/addItem", { newItem });

		this.clearInput();
	}

	clearInput() {
		this.setState({
			newItem: ""
		});
	};

	toggleEditMode = () => {
		let editMode = undefined;

		if (this.state.editMode) {
			editMode = false;
		} else {
			editMode = true;
		}

		this.setState({
			editMode
		});
	}

	updateItem = (updatedItem) => {
		axios.post( "/api/update_item" , {updatedItem} );

		this.toggleEditMode();
	}

	render() {

		const { goBack } = this.props.navigation;

		let itemDisplay = undefined;
		if (this.state.editMode) {
			itemDisplay = (
				<Fragment>
					<TextInput defaultValue={this.state.itemName} style={styles.textInput} autoCorrect={true} placeholder="Add Item" onChangeText={this.onChangeText} clearButtonMode="while-editing" blurOnSubmit={true} />
					<Button title="Update" onPress={() => { this.updateItem(this.state.editText) }} />
					<Button title="Cancel" onPress={ () => {this.toggleEditMode()} } />
				</Fragment>
			);
		} else {
			itemDisplay = (
				<Fragment>
					<Text style={styles.text} >{this.state.itemName}</Text>
					<Button title="Edit" onPress={() => { this.toggleEditMode() }} />
				</Fragment>
			);
		}

		return (
			<View style={styles.container}>
				{itemDisplay}
				<Button title="Go Back" onPress={ () => {goBack()} }/>
			</View>
		);
	}
}
export default TodoListItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 30
	},
	textInput: {
		borderColor: "gray",
		borderWidth: 1,
		width: 200,
		fontSize: 20
	}
});