import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const HeaderInput = props => {

    const [input1, setInput1] = useState('');

    return (
        <View>
            <TextInput placeholder={'Input a new header'}
                       value={input1}
                       onChangeText={text => setInput1(text)}/>
            <Button title={'go'} onPress={props.headerInputHandler.bind(this, input1)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})

export default HeaderInput;