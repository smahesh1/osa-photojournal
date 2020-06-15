import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "../assets/styles";
import Header from "../components/header";
import CreationPane from "../components/CreationPane";

const CreateEntryScreen = props => {

    const [cameraOn, setCameraOn] = useState(false)
    const [titleText, setTitleText] = useState('')
    const [descriptionText, setDescriptionText] = useState('')

    const cameraRef = React.createRef();

    const snap = async (cameraRef) => {if (cameraRef) {
        let photo = await cameraRef.current.takePictureAsync();
        console.log(await photo);

            }
    };

    console.log("HI PLEASE SHOW");

    const test = () => {
        if (cameraRef) {
            console.log("testing yes");
        }
        else {
            console.log("testing no");
        }
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
                                  descriptionText={descriptionText} setDescriptionText={setDescriptionText} />

                    <View style={styles.bottomTouchablesContainer}>
                        <TouchableOpacity style={styles.bottomTouchableOfTwo} onPress={
                            cameraOn ? () => {setCameraOn(false)} : props.goBackHandler}>
                            <Text style={styles.primaryText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomTouchableOfTwo}
                                          onPress={snap.bind(this, cameraRef)}>
                            <Text style={styles.primaryText}>{cameraOn ? 'Capture' : 'Submit'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    )
}

export default CreateEntryScreen;