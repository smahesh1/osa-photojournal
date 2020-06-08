import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import HeaderInput from "./components/HeaderInput";

export default function App() {
    const [headerText, setHeaderText] = useState('');

    const headerInputHandler = input => {
        setHeaderText(input);
    }

  return (
      <View>
        <Header headerText={headerText} />
        <HeaderInput headerInputHandler={headerInputHandler}/>
      </View>
  );
}

const styles = StyleSheet.create({
});
