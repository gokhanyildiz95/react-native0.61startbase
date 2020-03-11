import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text>Hello, gokhan!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" , 
    backgroundColor:"#7a7a7a"
  }
});