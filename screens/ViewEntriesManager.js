import React, { useState } from 'react';
import ViewYearsScreen from "./ViewYearsScreen";
import ViewMonthsScreen from "./ViewMonthsScreen";
import ViewMomentsScreen from "./ViewMomentsScreen";


const ViewEntriesManager = props => {

    // let year = '';
    // const [year, ]

    const [year, setYear] = useState('');
    const [month, setMonth] = useState('')
    const [screen, setScreen] = useState('Years');

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


    let ScreenObject = <ViewYearsScreen YearPressHandler={YearPressHandler} goBackHandler={props.goBackHandler} />

    if (screen === 'Months') {
        ScreenObject = <ViewMonthsScreen year={year} goBackHandler={ToYearsFromMonthsHandler}
                                         MonthPressHandler={MonthPressHandler} />

    } else if (screen === 'Years') {
        ScreenObject = <ViewYearsScreen YearPressHandler={YearPressHandler} goBackHandler={props.goBackHandler} />
    } else if (screen === 'Moments') {
        ScreenObject = <ViewMomentsScreen goBackHandler={ToMonthsFromMomentsHandler}
                                          year={year} month={month} />
    }

    return ScreenObject


}

export default ViewEntriesManager
