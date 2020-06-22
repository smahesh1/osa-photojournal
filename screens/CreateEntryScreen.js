import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "../assets/styles";
import Header from "../components/header";
import CreationPane from "../components/CreationPane";
import db from "../dummyDatabase/database";
import firebase from "firebase";

const CreateEntryScreen = props => {

    const [cameraOn, setCameraOn] = useState(false)
    const [titleText, setTitleText] = useState('')
    const [descriptionText, setDescriptionText] = useState('')
    const [photo, setPhoto] = useState(null)
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    const cameraRef = React.createRef();

    const snap = async (cameraRef) => {
        if (cameraRef) {
            let photoPromise = await cameraRef.current.takePictureAsync();
            setPhoto(await photoPromise)
            // console.log(await photoPromise);
            setCameraOn(false)
        }
    };

    const submitHandler = async () => {
        const rightNow = new Date()
        const uid = firebase.auth().currentUser["uid"]
        const dbObject = (await db.ref('datahold/' + uid + '/timetree').once('value')).val()
        const year = rightNow.getFullYear().toString()
        const month = rightNow.getMonth().toString()

        await navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        });

        // console.log(dbObject)
        // console.log(year)
        // console.log(await dbObject)
        // console.log(Object.keys(await dbObject))
        // console.log(year in Object.keys(await dbObject))
        // console.log(["2020"].includes(year))



        if (Object.keys(await dbObject).includes(year)) {
            if (Object.keys(dbObject[year]).includes(month)) {
                await db.ref('datahold/' + uid + '/timetree/' + year + '/'
                    + month + '/' + rightNow.getTime()).set(0)
            } else {
                await db.ref('datahold/' + uid + '/timetree/' + year + '/' + month).set(0)
                await db.ref('datahold/' + uid + '/timetree/' + year + '/' +
                    month + '/' + rightNow.getTime()).set(0)
            }
        } else {
            await db.ref('datahold/' + uid + '/timetree/' + year).set(0)
            await db.ref('datahold/' + uid +
                '/timetree/' + year + '/' + month).set(0)
            await db.ref('datahold/' + uid + '/timetree/' + year + '/' + month + '/' + rightNow.getTime()).set(0)
        }

        const dataString = '{' +
            '"title":"' + titleText + '",' +
            '"description":"' + descriptionText + '",' +
            '"location":{' +
                '"longitude":' + await longitude.toString() + ',' +
                '"latitude":' + await latitude.toString() +
            '},' +
            '"photo":' + JSON.stringify(photo) +
        '}'

        // console.log(dataString)

        const dataObject = JSON.parse(await dataString)

        await db.ref('datahold/' + uid + '/actualdata/' + rightNow.getTime()).set(dataObject)
    }

    // console.log("HI PLEASE SHOW");
    //
    // const test = () => {
    //     if (cameraRef) {
    //         console.log("testing yes");
    //     }
    //     else {
    //         console.log("testing no");
    //     }
    // }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.screen}
                                 resetScrollToCoords={{x: 0, y: 0}}
                                 scrollEnabled={false}
                                 extraHeight={90}
                                 keyboardShouldPersistTaps={'handled'} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.screen}>
                    <Header headerText={cameraOn ? 'Take a Photo' : 'Create an Entry'}/>

                    <CreationPane cameraOn={cameraOn}
                                  turnOnCamera={() => {
                                      setCameraOn(true)
                                  }} testCamera={cameraRef}
                                  titleText={titleText} setTitleText={setTitleText}
                                  descriptionText={descriptionText} setDescriptionText={setDescriptionText}
                                  photo={photo}/>

                    <View style={styles.bottomTouchablesContainer}>
                        <TouchableOpacity style={styles.bottomTouchableOfTwo} onPress={
                            cameraOn ? () => {setCameraOn(false)} : props.goBackHandler}>
                            <Text style={styles.primaryText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomTouchableOfTwo}
                                          onPress={cameraOn ? snap.bind(this, cameraRef) : submitHandler}>
                            <Text style={styles.primaryText}>{cameraOn ? 'Capture' : 'Submit'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    )
}

export default CreateEntryScreen;