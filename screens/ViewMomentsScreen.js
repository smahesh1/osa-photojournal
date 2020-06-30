import React from 'react';
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";
import displayMonths from "../assets/displayMonths";
import parseTimestamp from "../assets/parseTimestamp";

const ViewMomentsScreen = props => {

    const moments = Object.keys(props.timeTree[props.year][props.month])

    return (
        <View style={styles.screen}>
            <Header headerText={displayMonths[props.month] + ' ' + props.year}/>
            <View style={styles.flatlistContainer}>
                <FlatList contentContainerStyle={styles.flatlist} data={moments}
                          renderItem={({item}) => (
                              <View style={styles.momentCardContianer}>
                                  <TouchableOpacity style={styles.momentCard}
                                                    onPress={props.goToMomentHandler.bind(this, item)}>
                                      <Text style={styles.primaryText}>{parseTimestamp(item)}</Text>
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