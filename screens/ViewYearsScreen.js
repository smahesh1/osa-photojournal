import React from 'react';
import { View } from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";

const ViewYearsScreen = () => {

    return (
        <View style={styles.screen}>
            <Header headerText={'View Entries Screen'}/>
        </View>
    )
}

export default ViewYearsScreen;