import React, { useState, useEffect } from 'react';
import {View, TouchableOpacity, Text, TextInput, Keyboard, ImageBackground } from 'react-native';
import styles from "../assets/styles";

const firstDate = Date();

const TextEntryPane = props => {

    console.log(props.photo)

    const [date, setDate] = useState(firstDate);
    const [latitude, setLatitude] = useState(0.0)
    const [longitude, setLongitude] = useState(0.0)

    useEffect(() => {
        const interval = setInterval(() => setDate(Date()), 20);
        navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        });
        return () => {
            clearInterval(interval);
        };
    }, []);

    const content =
        <View style={styles.textEntryPaneWrapper} >
            <View style={styles.ubicationContainer}>
                <Text style={styles.ubicationText}>
                    {date.toString().slice(0, 24)}
                </Text>
            </View>
            <View style={styles.ubicationContainer}>
                <Text style={styles.ubicationText}>
                    {latitude.toFixed(4)}, {longitude.toFixed(4)}
                </Text>
            </View>
            <View style={props.photo ? styles.transparentInputContainer : styles.inputContainer}>
                <TextInput style={styles.titleInput}
                           onChangeText={text => props.setTitleText(text)}
                           placeholder={'Title'}
                           value={props.titleText} />
                <TextInput style={styles.descriptionInput}
                           onChangeText={text => props.setDescriptionText(text)}
                           placeholder={'Description'}
                           value={props.descriptionText} multiline={true} />
            </View>
            <View style={props.photo ? styles.transparentAddPhotoContainer : styles.addPhotoContainer}>
                <TouchableOpacity style={styles.addPhotoTouchable}
                                  onPress={() => {
                                      Keyboard.dismiss()
                                      props.turnOnCamera()
                                  }}>
                    <Text style={styles.addPhotoText}>{props.photo ? 'Retake' : 'Add photo'}</Text>
                </TouchableOpacity>
            </View>
        </View>

    return props.photo ?

        <ImageBackground source={props.photo} style={styles.backgroundImage}>
            {content}
        </ImageBackground>

        :

        <View style={styles.creationContainer}>
            {content}
        </View>

}

export default TextEntryPane;