import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import SplashComponent from './Component'
import { Action } from 'react-native-mobx'

export default class App extends Component {
    handleBack(){

        Action.back({param:{data:[1,2,3,4]}})
    }
    handleNext(){

        Action.go('MainPage')
    }
    render() {
        return (
            <SplashComponent >
                <Button onclick={this.handleBack} />
                <Button onclick={this.handleNext} />
                </SplashComponent>
        );
    }
}
