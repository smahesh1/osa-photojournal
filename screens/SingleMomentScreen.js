import React, { useState } from 'react';
import {View, TouchableOpacity, Text, ScrollView, Image, Alert} from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";
import parseTimestamp from "../assets/parseTimestamp";
import db from "../dummyDatabase/database";
import firebase from "firebase";
import * as FileSystem from 'expo-file-system';


const SingleMomentScreen = props => {

    const [noDataYet, setNoDataYet] = useState(true)
    const [title, setTitle] = useState('null')
    const [description, setDescription] = useState('null')
    const [latitude, setLatitude] = useState(0.0)
    const [longitude, setLongitude] = useState(0.0)
    const [photo, setPhoto] = useState(null)
    const uid = firebase.auth().currentUser["uid"]

    if (noDataYet) {
        db.ref('datahold/' + uid + '/actualdata/' + props.thisMoment).once(
            'value',snapshot => {
            const momentData = snapshot.val()
            setTitle(momentData['title'])
            setDescription(momentData['description'])
            setLatitude(momentData['location']['latitude'])
            setLongitude(momentData['location']['longitude'])
            setNoDataYet(false)
                //FIXME: code below does not work to get a photo from firebase
            console.log('abced', momentData['hasPhoto'])
            if (momentData['hasPhoto'] === 't') {
                const path = uid + '/' + props.thisMoment
                const storage = firebase.storage()
                const imageRef = storage.ref(path)
                imageRef.getDownloadURL().then(url => {
                    const targetLocation = FileSystem.cacheDirectory + uid + props.thisMoment
                    FileSystem.downloadAsync(url, targetLocation).then(dowloadedFileObject => {
                        setPhoto({ uri: dowloadedFileObject.uri })
                    })
                    }).catch(error => {
                    Alert.alert(error.code, error.message)
                });
            }
        })
    }

    console.log(photo)

    let photoPane = null

    if (photo !== null) {
        console.log(photo)
        photoPane =
            <View style={styles.photoContainer}>
                <Image style={styles.thumbnail} source={photo} />
            </View>
    }

    return (
        <View style={styles.screen}>
            <Header headerText={parseTimestamp(props.thisMoment)}/>
            <View style={styles.momentContainer}>
                <View style={styles.ubicationContainer}>
                    <Text style={styles.ubicationText}>
                        {latitude.toFixed(4)}, {longitude.toFixed(4)}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <ScrollView horizontal={true} style={styles.titleText}
                    contentContainerStyle={{alignItems: 'center'}} >
                        <Text style={styles.addPhotoText}>{title}</Text>
                    </ScrollView>
                    <ScrollView style={styles.descriptionText}>
                        <Text>{description}</Text>
                    </ScrollView>
                </View>
                {photoPane}
            </View>
            <View style={styles.bottomTouchableContainer}>
                <TouchableOpacity style={styles.bottomTouchable} onPress={props.goBackHandler}>
                    <Text style={styles.primaryText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SingleMomentScreen