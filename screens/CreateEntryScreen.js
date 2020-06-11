import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";

const firstDate = Date();

const CreateEntryScreen = props => {

    const [date, setDate] = useState(firstDate);

    useEffect(() => {
        const interval = setInterval(() => setDate(Date()), 20);
        return () => {
            clearInterval(interval);
        };
    }, []);



    return (
        <View style={styles.screen}>
            <Header headerText={'Create Entry Screen'}/>
            <View style={styles.creationContainer}>
                <View style={styles.screen}>
                    <Text>
                        {date.toString().slice(0, 24)}
                    </Text>
                </View>
            </View>
            <View style={styles.bottomTouchablesContainer}>
                <TouchableOpacity style={styles.bottomTouchableOfTwo} onPress={props.goBackHandler}>
                    <Text style={styles.primaryText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTouchableOfTwo} onPress={null}>
                    <Text style={styles.primaryText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreateEntryScreen;