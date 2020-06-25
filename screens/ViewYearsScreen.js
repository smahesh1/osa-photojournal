import React, { useState } from 'react';
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";


const ViewYearsScreen = (props) => {

    const [years, setYears] = useState(null)

    if (years === null && props.timeTree !== null) {
        setYears(Object.keys(props.timeTree))
    }

    return (
        <View style={styles.screen}>
            <Header headerText={'Select a year'}/>
            <View style={styles.flatlistContainer}>
                <FlatList contentContainerStyle={styles.flatlist} data={years}
                          renderItem={({item}) => (
                              <View style={styles.yearCardContianer}>
                                  <TouchableOpacity style={styles.yearCard}
                                                    onPress={props.YearPressHandler.bind(this, item)}>
                                      <Text style={styles.primaryText}>{item}</Text>
                                  </TouchableOpacity>
                              </View>)}
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

export default ViewYearsScreen;