import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

/********************** Screens **********************/
import HomeScreen from './components/HomeScreen';
import TodoList from './components/TodoListScreen';

const StackNav = createStackNavigator( {
	Home: {
		screen: HomeScreen
	},
	TodoList: {
		screen: TodoList,
	}
} , {
	initialRouteName: "Home",
	navigationOptions: {
		gesturesEnabled: false,
		header: null
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
