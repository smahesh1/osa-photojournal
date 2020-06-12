import React from 'react';
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";
import database from "../dummyDatabase/testData";

const ViewMonthsScreen = props => {

    //let months = null;

    const months = Object.keys(database['entriesByTime'][(props.year)]);

    //if (database['entriesByTime'] === null) {
        //Give message saying no entries, allow user to go back
    //} else {
    //    months = Object.keys(database['entriesByTime']);
    //}

    return (
        <View style={styles.screen}>
            <Header headerText={'Select a month from' + props.year}/>
            <View style={styles.flatlistContainer}>
                <FlatList contentContainerStyle={styles.flatlist} data={months}
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

export default ViewMonthsScreen;