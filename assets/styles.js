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
    yearCard: {
        borderRadius: 50,
        backgroundColor: blue,
        height: 200,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    monthCard: {
        borderRadius: 30,
        backgroundColor: blue,
        height: 100,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    momentCard: {
        borderRadius: 10,
        backgroundColor: blue,
        height: 50,
        width: 275,
        alignItems: 'center',
        justifyContent: 'center',
    },
    yearCardContianer: {
        paddingBottom: 40
    },
    monthCardContianer: {
        paddingBottom: 40
    },
    momentCardContianer: {
        paddingBottom: 15
    },
    flatlistContainer: {
        backgroundColor: green,
        flex: 7,
        alignItems: 'center'
    },
    flatlist: {
        paddingTop: '10%',
        backgroundColor: green,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    creationContainer: {
        backgroundColor: pink,
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
        paddingLeft: '5%'
    },
    inputContainer: {
        paddingTop: '10%',
        width: '80%',
        flex: .6,
    },
    titleInput: {
        flex: 1,
        backgroundColor: green,
        fontSize: 30,
        paddingLeft: '3%',
    },
    descriptionInput: {
        flex: 3,
        backgroundColor: green,
        fontSize: 20,
        paddingLeft: '3%',
        justifyContent: 'flex-start'
    },
    addPhotoContainer: {
        paddingTop: '10%',
        width: '60%',
        flex: .2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: '10%'
    },
    addPhotoTouchable: {
        borderRadius: 10,
        backgroundColor: yellow,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addPhotoText: {
        color: 'black',
        fontSize: 25    }
})

export default styles;