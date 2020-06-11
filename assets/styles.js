import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#39ffbe',
        flex: 1
    },
    cardContainer: {
        backgroundColor: '#39ffbe',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    card: {
        borderRadius: 50,
        backgroundColor: '#5ba8ff',
        height: '35%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        marginTop: 20,
        height: 60,
        backgroundColor: '#9e62ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryText: {
        color: 'white',
        fontSize: 20
    },
    cardText: {
        color: 'white',
        fontSize: 20
    }
})

export default styles;