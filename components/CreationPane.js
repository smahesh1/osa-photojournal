import React from 'react';
import CameraPane from "./CameraPane";
import TextEntryPane from "./TextEntryPane";

const CreationPane = props => {

    return props.cameraOn ?
        <CameraPane testCamera={props.testCamera} /> :
        <TextEntryPane photo={props.photo}
                       turnOnCamera={props.turnOnCamera}
                       titleText = {props.titleText} setTitleText={props.setTitleText}
                       descriptionText={props.descriptionText} setDescriptionText={props.setDescriptionText} />
}

export default CreationPane;