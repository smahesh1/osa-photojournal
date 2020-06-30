import React from 'react';
import { View } from 'react-native';
import styles from "../assets/styles";
import { Camera } from "expo-camera";
import { useState, useEffect} from 'react';

const CameraPane = props => {

    const [hasPermission, setHasPermission] = useState(null);
    const type = Camera.Constants.Type.back

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View style={styles.cameraContainer} />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }




    return (
        <View style={styles.cameraContainer}>
            <Camera style={styles.camera} type={type} ref={props.testCamera}/>
        </View>
    )


}

export default CameraPane;