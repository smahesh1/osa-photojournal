import React, { useState } from 'react';
import ViewYearsScreen from "./ViewYearsScreen";
import ViewMonthsScreen from "./ViewMonthsScreen";


const ViewEntriesManager = props => {

    // let year = '';
    // const [year, ]

    const [Year, setYear] = useState('');
    const [Screen, setScreen] = useState('Years');

    const YearPressHandler = YearName => {
        setYear(YearName);
        setScreen('Month');
    }

    const ToYearFromMonthHandler = () => {
        setScreen('Years');
    }


    let ScreenObject = <ViewYearsScreen YearPressHandler={YearPressHandler} goBackHandler={props.goBackHandler} />

    if (Screen === 'Month') {
        ScreenObject = <ViewMonthsScreen year={Year} goBackHandler={ToYearFromMonthHandler} />



    }  else if (Screen === 'Year') {
        ScreenObject = <ViewYearsScreen YearPressHandler={YearPressHandler} goBackHandler={props.goBackHandler} />
    }

    return ScreenObject


}

export default ViewEntriesManager
