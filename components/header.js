import React from 'react';
import { View, Text, } from 'react-native';
import styles from "../assets/styles";

const Header = props => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.primaryText}>{props.headerText}</Text>
        </View>
    )
}

export default Header;