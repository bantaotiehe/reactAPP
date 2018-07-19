/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import https from '../api/api'
import NavigationBar from '../common/navigationBar'

export default class Home extends Component{
  render() {
    return (
        <View style={styles.container}>
            <NavigationBar
                title = 'home'
                style = {{
                    backgroundColor : '#2196f3'
                }}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
