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
import NavigationBar from '../common/navigationBar'

export default class Mine extends Component{
  render() {
    return (
        <View style={styles.container}>
            <NavigationBar
                  title = 'mine'
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
  }
});
