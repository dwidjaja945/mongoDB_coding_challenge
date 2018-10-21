import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

/********************** Screens **********************/
import HomeScreen from './components/HomeScreen';
import TodoList from './components/TodoListScreen';
import TodoListItem from './components/TodoListItem';

const StackNav = createStackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			header: null
		}
	},
	TodoList: {
		screen: TodoList,
		navigationOptions: {
			header: null
		}
	},
	TodoListItem: {
		screen: TodoListItem,
		navigationOptions: {
			gesturesEnabled: true,
		}
	}
}, {
		initialRouteName: "Home",
		navigationOptions: {
			gesturesEnabled: false,
		}
	});

export default class App extends React.Component {
	render() {
		return (
			<StackNav />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
