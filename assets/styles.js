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
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    inputContainer: {
        paddingTop: '10%',
        width: '80%',
        flex: .7,
    },
    transparentInputContainer: {
        paddingTop: '10%',
        width: '80%',
        flex: .7,
        backgroundColor: 'rgba(0, 0, 0, 0.0)'
    },
    titleInput: {
        flex: 1,
        backgroundColor: green,
        fontSize: 30,
        paddingLeft: '3%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        opacity: 1
    },
    descriptionInput: {
        flex: 3,
        backgroundColor: green,
        fontSize: 20,
        paddingLeft: '3%',
        justifyContent: 'flex-start',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        opacity: 1
    },
    addPhotoContainer: {
        paddingTop: '5%',
        width: '60%',
        flex: .2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: '15%'
    },
    transparentAddPhotoContainer: {
        paddingTop: '5%',
        width: '60%',
        flex: .2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: '15%',
        backgroundColor: 'rgba(0, 0, 0, 0.0)'
    },
    addPhotoTouchable: {
        borderRadius: 10,
        backgroundColor: yellow,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1
    },
    addPhotoText: {
        color: 'black',
        fontSize: 25,
        opacity: 1
    },
    cameraContainer: {
        flex: 7
    },
    camera: {
        flex: 1
    },
    backgroundImage: {
        flex: 7,
        alignItems: 'center'
    },
    textEntryPaneWrapper: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    loginScreenContainer: {
        paddingTop: '10%',
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginInputsContainer: {
        flex: 2,
        width: '90%',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: blue,
        height: '35%',
        alignItems: 'center',
    },
    loginInput1: {
        flexDirection: 'row',
        flex: 1,
        padding: '5%',
        alignItems: 'center',
        // backgroundColor: 45458
    },
    loginInput2: {
        flexDirection: 'row',
        flex: 1,
        paddingLeft: '5%',
        paddingBottom: '10%',
        paddingTop: '0%',
        paddingRight: '5%',
        alignItems: 'center',
        justifyContent: 'space-between'
        // backgroundColor: yellow
    },
    emailInput: {
        flex: 1,
        backgroundColor: pink,
        fontSize: 30,
        paddingLeft: '3%',
        borderRadius: 10,
        opacity: 1
    },
    passwordInput: {
        flex: 3,
        backgroundColor: pink,
        fontSize: 30,
        paddingLeft: '3%',
        borderRadius: 10,
        opacity: 1
    },
    goButton: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: pink,
        alignItems: 'center',
        justifyContent: 'center',
    },
    goButtonText: {
        fontSize: 30,
        color: 'black',
        paddingTop: '17.5%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    momentContainer: {
        flex: 7,
        alignItems: 'center'
    },
    textContainer: {
        paddingTop: '10%',
        width: '80%',
        flex: .5,
        alignItems: 'center',
        flexDirection: 'column'
    },
    titleText: {
        height: '30%',
        width: '100%',
        backgroundColor: 789,
        fontSize: 30,
        paddingLeft: '5%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    descriptionText: {
        height: '70%',
        width: '100%',
        backgroundColor: 456456,
        fontSize: 20,
        paddingLeft: '5%',
        paddingRight: '5%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    photoContainer: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%'
    },
    thumbnail: {
        flex: 1,
        width: 100,
        height: 100,
        // resizeMode: 'contain'
    }
})

export default styles;