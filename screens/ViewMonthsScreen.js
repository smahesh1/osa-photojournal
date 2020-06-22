import React from 'react';
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";
import displayMonths from "../assets/displayMonths";

const ViewMonthsScreen = props => {

    const months = Object.keys(props.timeTree[props.year])

    return (
        <View style={styles.screen}>
            <Header headerText={props.year}/>
            <View style={styles.flatlistContainer}>
                <FlatList contentContainerStyle={styles.flatlist} data={months}
                          renderItem={({item}) => (
                              <View style={styles.monthCardContianer}>
                                  <TouchableOpacity style={styles.monthCard}
                                                    onPress={props.MonthPressHandler.bind(this, item)}>
                                      <Text style={styles.primaryText}>{displayMonths[item]}</Text>
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