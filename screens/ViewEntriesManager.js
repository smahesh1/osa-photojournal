import React, { useState } from 'react';
import ViewYearsScreen from "./ViewYearsScreen";
import ViewMonthsScreen from "./ViewMonthsScreen";
import ViewMomentsScreen from "./ViewMomentsScreen";
import db from "../dummyDatabase/database";
import firebase from "firebase";
import SingleMomentScreen from "./SingleMomentScreen";


const ViewEntriesManager = props => {

    const [year, setYear] = useState('');
    const [month, setMonth] = useState('')
    const [moment, setMoment] = useState('');
    const [screen, setScreen] = useState('Years');
    const [timeTree, setTimeTree] = useState(null)
    const uid = firebase.auth().currentUser['uid']

    if (timeTree === null) {
        db.ref('datahold/' + uid + '/timetree').once('value',snapshot => {
            setTimeTree(snapshot.val())
        })
    }

    const YearPressHandler = yearName => {
        setYear(yearName);
        setScreen('Months');
    }

    const ToYearsFromMonthsHandler = () => {
        setScreen('Years');
    }

    const MonthPressHandler = monthName => {
        setMonth(monthName)
        setScreen('Moments')
    }

    const ToMonthsFromMomentsHandler = () => {
        setScreen('Months')
    }

    const ToOneMomentHandler = moment => {
        setMoment(moment)
        setScreen('One Moment')
    }

    const ToMomentsFromOneHandler = () => {
        setScreen('Moments')
    }


    let ScreenObject = <ViewYearsScreen YearPressHandler={YearPressHandler} goBackHandler={props.goBackHandler}
                                        timeTree={timeTree} />

    if (screen === 'Months') {
        ScreenObject = <ViewMonthsScreen year={year} goBackHandler={ToYearsFromMonthsHandler}
                                         MonthPressHandler={MonthPressHandler}
                                         timeTree={timeTree} />
    } else if (screen === 'Years') {
        ScreenObject = <ViewYearsScreen YearPressHandler={YearPressHandler} goBackHandler={props.goBackHandler}
                                        timeTree={timeTree} />
    } else if (screen === 'Moments') {
        ScreenObject = <ViewMomentsScreen goBackHandler={ToMonthsFromMomentsHandler}
                                          timeTree={timeTree}
                                          year={year} month={month}
                                          goToMomentHandler={ToOneMomentHandler} />
    } else if (screen === 'One Moment') {
        ScreenObject = <SingleMomentScreen goBackHandler={ToMomentsFromOneHandler}
                                           thisMoment={moment} />
    }

    return ScreenObject


}

export default ViewEntriesManager
