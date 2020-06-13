import React from 'react';
import { View } from 'react-native';
import styles from "../assets/styles";
import { Camera } from "expo-camera";

const CameraPane = () => {
    const type = Camera.Constants.Type.back

    return (
        <View style={styles.cameraContainer}>
            <Camera style={styles.camera} type={type} />
        </View>
    )


}

export default CameraPane;