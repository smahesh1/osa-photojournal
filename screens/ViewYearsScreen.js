import React from 'react';
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";
import database from "../dummyDatabase/testData";

const ViewYearsScreen = () => {

    let years = null;

    if (database['entriesByTime'] === null) {
        //Give message saying no entries, allow user to go back
    } else {
        years = Object.keys(database['entriesByTime']);
        console.log(Object.keys(database['entriesByTime']))
    }

    return (
        <View style={styles.screen}>
            <Header headerText={'Select a year'}/>
            <View style={styles.centeringScreen}>
                <FlatList contentContainerStyle={styles.flatlist} data={years}
                          renderItem={({item}) => (
                              <TouchableOpacity style={styles.listedCard} onPress={console.log(item)}>
                                  <Text style={styles.primaryText}>{item}</Text>
                              </TouchableOpacity> )}
                          keyExtractor={item => item}/>
            </View>
            <TouchableOpacity style={styles.bottomTouchable}>
                <Text style={styles.primaryText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ViewYearsScreen;