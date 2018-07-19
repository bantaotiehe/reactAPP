import React from 'react';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import WelcomePage from '../pages/WelcomePage'
import Home from '../pages/home'
import Trend from '../pages/trend'
import Star from '../pages/star'
import Mine from '../pages/mine'

export const AppTabNavigator = createBottomTabNavigator({
    Home : {
        screen : Home,
        navigationOptions : {
            tabBarLabel : '首页',
            tabBarIcon : ({focused,tintColor}) => (
                <Icon
                    name={focused?'ios-home' : 'ios-home-outline'}
                    size = {26}
                    style = {{color : tintColor}}
                />
            )
        }
    },
    Trend : {
        screen : Trend,
        navigationOptions : {
            tabBarLabel : '趋势',
            tabBarIcon : ({tintColor,focused}) => (
                <Icon
                    name={focused?'ios-trending-up' : 'ios-trending-up-outline'}
                    size = {26}
                    style = {{color : tintColor}}
                />
            )
        }
    },
    Star : {
        screen : Star,
        navigationOptions : {
            tabBarLabel : '收藏',
            tabBarIcon : ({tintColor,focused}) => (
                <Icon
                    name={focused?'ios-star' : 'ios-star-outline'}
                    size = {26}
                    style = {{color : tintColor}}
                />
            )
        }
    },
    Mine : {
        screen : Mine,
        navigationOptions : {
            tabBarLabel : '我的',
            tabBarIcon : ({tintColor,focused}) => (
                <Icon
                    name={focused?'ios-person' : 'ios-person-outline'}
                    size = {26}
                    style = {{color : tintColor}}
                />
            )
        }
    }
})

export const AppStackNavigator = createStackNavigator({
    WelcomePage : {
        screen : WelcomePage,
        navigationOptions : {
            header : null
        }
    },
    tabNav : {
        screen : AppTabNavigator,
        navigationOptions : {
            header : null
        }
    }
})