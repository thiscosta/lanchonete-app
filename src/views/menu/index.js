import React from 'react'

import { useSelector } from 'react-redux'

import {StyleSheet, Text, View} from 'react-native';

export default Menu = () => {

    const burgers = useSelector(state => state.burgers.burgers)

    return (
        <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        {
          burgers.map(burger => (
            <View key={burger._id}>
              <Text>{burger.name}</Text>
            </View>
          ))
        }
      </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });