import React from 'react';
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";
import database from "../dummyDatabase/testData";

const parseTimestamp = timestampString => {
    const timestampDate = new Date(parseInt(timestampString))
    return timestampDate.toString()
}

const parseTimestamps = stringArray => {
    const len = stringArray.length
    let newArray = new Array(len)
    for (let i = 0; i < len; i++) {
        newArray[i] = parseTimestamp(stringArray[i]).slice(0, 24)
    }
    return newArray
}

const ViewMomentsScreen = props => {

    const moments = parseTimestamps(Object.keys(database['entriesByTime'][props.year][props.month]));

    return (
        <View style={styles.screen}>
            <Header headerText={'Select a moment from ' + props.month + ' ' + props.year}/>
            <View style={styles.flatlistContainer}>
                <FlatList contentContainerStyle={styles.flatlist} data={moments}
                          renderItem={({item}) => (
                              <View style={styles.listedCardContianer}>
                                  <TouchableOpacity style={styles.listedCard} onPress={null}>
                                      <Text style={styles.primaryText}>{item}</Text>
                                  </TouchableOpacity>
                              </View> )}
                          keyExtractor={item => item}
                          showsVerticalScrollIndicator={false}/>
            </View>
            <View style={styles.bottomTouchableContainer}>
                <TouchableOpacity style={styles.bottomTouchable} onPress={props.goBackHandler}>
                    <Text style={styles.primaryText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ViewMomentsScreen;