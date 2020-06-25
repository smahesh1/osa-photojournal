import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
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

    const cameraRef = React.createRef();

    const snap = async (cameraRef) => {
        if (cameraRef) {
            let photoPromise = await cameraRef.current.takePictureAsync();
            setPhoto(await photoPromise)
            setCameraOn(false)
        }
    };

    const pushPhoto = async (photo, uid, rightNow) => {
        if (photo) {
            const storageRef = firebase.storage().ref()
            const uidRef = storageRef.child(uid)
            const imageRef = storageRef.child(uid + '/' + rightNow.getTime().toString())
            // const orderedPhotoData = [photo.uri, photo.width, photo.height, photo.exif, photo.base64]
            // const photoFile = new File(orderedPhotoData, rightNow.getTime().toString())
            const photoRes = await fetch(photo.uri)
            const photoBlob = await photoRes.blob()
            imageRef.put(photoBlob)
            console.log('HERENHEREN')
        }
    }

    const submitHandlerHelper = async (longitude, latitude) => {
        const rightNow = new Date()
        const uid = firebase.auth().currentUser["uid"]
        const dbObject = (await db.ref('datahold/' + uid + '/timetree').once('value')).val()
        const year = rightNow.getFullYear().toString()
        const month = rightNow.getMonth().toString()

        if (await Object.keys(await dbObject).includes(year)) {
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
        
        let stringHasPhoto = '"t"'
        
        if (photo === null) {
            stringHasPhoto = '"f"'
        }

        const dataString = '{' +
            '"title":"' + titleText + '",' +
            '"description":"' + descriptionText + '",' +
            '"location":{' +
            '"longitude":' + longitude.toString() + ',' +
            '"latitude":' + latitude.toString() +
            '},' +
            '"hasPhoto":' + stringHasPhoto +
            // '"photo":' + '{ ' +
            // '"uri":"' + photo.uri.toString() + '",' +
            // '"width":"' + photo.width.toString() + '",' +
            // '"height":"' + photo.height.toString() + '",' +
            // '"exif":"' + photo.exif.toString() + '",' +
            // '"base64":"' + photo.base64.toString() + '"}' +
            '}'

        console.log(dataString)

        const dataObject = JSON.parse(dataString)

        await db.ref('datahold/' + uid + '/actualdata/' + rightNow.getTime()).set(dataObject).then(
            async () => pushPhoto(photo, uid, rightNow)).then(() => {
                Alert.alert('Journal Entry Captured', 'Your most recent entry has been ' +
                'stored for posterity.')

                props.goBackHandler()
            }
        )
    }

    const submitHandler = async () => {

        await navigator.geolocation.getCurrentPosition(position => {
                submitHandlerHelper(position.coords.longitude, position.coords.latitude)
            },
            () => {
            Alert.alert('Location Error', 'Could not find your location. Please make' +
            'sure you have location settings turned on.')
            submitHandlerHelper(0.0, 0.0)
        })
    }

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