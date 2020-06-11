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
    },
    bottomTouchable: {
        borderRadius: 50,
        backgroundColor: '#5ba8ff',
        flex: .75,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomTouchableOfTwo: {
        borderRadius: 50,
        backgroundColor: '#5ba8ff',
        flex: .4,
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomTouchableContainer: {
        backgroundColor: '#9e62ff',
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    bottomTouchablesContainer: {
        flexDirection: 'row',
        backgroundColor: '#9e62ff',
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around'
    },
    listedCard: {
        borderRadius: 50,
        backgroundColor: '#5ba8ff',
        height: 200,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listedCardContianer: {
        paddingBottom: 40
    },
    flatlistContainer: {
        backgroundColor: '#39ffbe',
        flex: 7,
        alignItems: 'center'
    },
    flatlist: {
        paddingTop: 40,
        backgroundColor: '#39ffbe',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    creationContainer: {
        backgroundColor: '#39ffbe',
        flex: 7,
        alignItems: 'center'
    },
})

export default styles;