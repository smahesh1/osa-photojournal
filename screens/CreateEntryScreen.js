import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "../assets/styles";
import Header from "../components/header";

const firstDate = Date();

const CreateEntryScreen = props => {

    const [date, setDate] = useState(firstDate);
    const [latitude, setLatitude] = useState(0.0)
    const [longitude, setLongitude] = useState(0.0)
    const [titleText, setTitleText] = useState('')
    const [descriptionText, setDescriptionText] = useState('')

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



    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.screen}
                                 resetScrollToCoords={{x: 0, y: 0}}
                                 scrollEnabled={false}
                                 extraHeight={90}
                                 keyboardShouldPersistTaps={'handled'} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.screen}>
                    <Header headerText={'Create an Entry'}/>
                    <View style={styles.creationContainer}>
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
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.titleInput}
                                       onChangeText={text => setTitleText(text)}
                                       placeholder={'Title'}
                                       value={titleText} />
                            <TextInput style={styles.descriptionInput}
                                       onChangeText={text => setDescriptionText(text)}
                                       placeholder={'Description'}
                                       value={descriptionText} multiline={true} />
                        </View>
                        <View style={styles.addPhotoContainer}>
                            <TouchableOpacity style={styles.addPhotoTouchable}
                                              onPress={() => {
                                                  Keyboard.dismiss()
                                                  Alert.alert('Add Photo',
                                                      'Sorry, photo-taking is not supported at this time')
                                              }}>
                                <Text style={styles.addPhotoText}>Add photo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                        <View style={styles.bottomTouchablesContainer}>
                            <TouchableOpacity style={styles.bottomTouchableOfTwo} onPress={props.goBackHandler}>
                                <Text style={styles.primaryText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bottomTouchableOfTwo}
                                              onPress={null}>
                                <Text style={styles.primaryText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    )
}

export default CreateEntryScreen;