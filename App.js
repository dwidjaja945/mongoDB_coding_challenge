import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

/********************** Screens **********************/
import HomeScreen from './components/HomeScreen';

const StackNav = createStackNavigator( {
	Home: {
		screen: HomeScreen
	}
} );

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
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
