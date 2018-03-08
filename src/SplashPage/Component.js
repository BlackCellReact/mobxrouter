import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import styles from './StyleSheet'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const SplashComponent = props =>{
 
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Spinner />
                <Button onclick={props.store.constructor}/>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    
}
module.exports = SplashComponent;