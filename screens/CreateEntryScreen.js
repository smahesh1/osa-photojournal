import React from 'react';
import { View } from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";

const CreateEntryScreen = () => {

    return (
        <View style={styles.screen}>
            <Header headerText={'Create Entry Screen'}/>
        </View>
    )
}

export default CreateEntryScreen;