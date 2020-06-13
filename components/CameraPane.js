import React, { useState, useEffect } from 'react';
import {View, Text } from 'react-native';
import styles from "../assets/styles";
import { Camera } from "expo-camera";

const CameraPane = () => {
    const [hasPermission, setHasPermission] = useState(null)
    const type = Camera.Constants.Type.back

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, [])

    if (hasPermission === null) {
        return <View />
    } else if (hasPermission === false) {
        return <Text>Cannot access camera</Text>
    } else {
        return (
            <View style={styles.cameraContainer}>
                <Camera style={styles.camera} type={type} />
            </View>
        )
    }
    
}

export default CameraPane;