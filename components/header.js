import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{props.headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 20,
        height: 40,
        backgroundColor: '#228B22',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: 'white'
    }
})

export default Header;