import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default function App() {
  return (
      <View>
        <Header headerText={'Hello'} />
      </View>
  );
}

const styles = StyleSheet.create({
});
