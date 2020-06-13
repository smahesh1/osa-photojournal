import React from 'react';
import CameraPane from "./CameraPane";
import TextEntryPane from "./TextEntryPane";

const CreationPane = props => {

    return props.cameraOn ? <CameraPane /> : <TextEntryPane turnOnCamera={props.turnOnCamera} />

}

export default CreationPane;