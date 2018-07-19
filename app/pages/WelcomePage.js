import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import NavigationBar from '../common/navigationBar'

export default class WelcomePage extends Component {
    componentDidMount() {
        this.timer = setTimeout(()=>{
            this.props.navigation.navigate('tabNav');
        },2000)
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    render() {
        //const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar
                    title = '欢迎'
                    style = {{
                        backgroundColor : '#2196f3'
                    }}
                />
                <Text style={styles.welcome}>
                    欢迎
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color : 'red'
    }
  });
  