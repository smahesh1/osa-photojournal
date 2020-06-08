import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View>
            <Text>{props.headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        paddingTop: 60,
        color: 'green',
    }
})

export default Header;