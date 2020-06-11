import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";

const LandingScreen = () => {

    return (
        <View style={styles.screen}>
            <Header headerText={'What would you like to do?'}/>
            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.card} onPress={null}>
                    <Text style={styles.primaryText}> Create a new entry </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={null}>
                    <Text style={styles.cardText}> View past entries </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LandingScreen;