import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";

const firstDate = Date();

const CreateEntryScreen = props => {

    const [date, setDate] = useState(firstDate);
    const [latitude, setLatitude] = useState(0.0)
    const [longitude, setLongitude] = useState(0.0)

    useEffect(() => {
        const interval = setInterval(() => setDate(Date()), 20);
        navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        });
        return () => {
            clearInterval(interval);
        };
    }, []);



    return (
        <View style={styles.screen}>
            <Header headerText={'Create an Entry'}/>
            <View style={styles.creationContainer}>
                <View style={styles.ubicationContainer}>
                    <Text style={styles.ubicationText}>
                        {date.toString().slice(0, 24)}
                    </Text>
                </View>
                <View style={styles.ubicationContainer}>
                    <Text style={styles.ubicationText}>
                        {latitude.toFixed(4)}, {longitude.toFixed(4)}
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