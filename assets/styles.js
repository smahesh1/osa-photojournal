import React from 'react';
import { StyleSheet } from 'react-native';

const green = '#39ffbe'
const blue = '#5ba8ff'
const purple = '#9e62ff'
const yellow = '#cfff7b'
const pink = '#ff9bd3'


const styles = StyleSheet.create({
    screen: {
        backgroundColor: green,
        flex: 1
    },
    cardContainer: {
        backgroundColor: green,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    card: {
        borderRadius: 50,
        backgroundColor: blue,
        height: '35%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        marginTop: 20,
        height: 60,
        backgroundColor: purple,
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
        backgroundColor: blue,
        flex: .75,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomTouchableOfTwo: {
        borderRadius: 50,
        backgroundColor: blue,
        flex: .4,
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomTouchableContainer: {
        backgroundColor: purple,
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    bottomTouchablesContainer: {
        flexDirection: 'row',
        backgroundColor: purple,
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around'
    },
    listedCard: {
        borderRadius: 50,
        backgroundColor: blue,
        height: 200,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listedCardContianer: {
        paddingBottom: 40
    },
    flatlistContainer: {
        backgroundColor: green,
        flex: 7,
        alignItems: 'center'
    },
    flatlist: {
        paddingTop: 40,
        backgroundColor: green,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    creationContainer: {
        backgroundColor: green,
        flex: 7,
        alignItems: 'center'
    },
    ubicationContainer: {
        flex: .1,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: yellow
    },
    ubicationText: {
        color: 'black',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15
    }
})

export default styles;