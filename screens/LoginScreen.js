import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from "../assets/styles";
import Header from "../components/header";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";


const LoginScreen = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.screen}
                                 resetScrollToCoords={{x: 0, y: 0}}
                                 scrollEnabled={false}
                                 extraHeight={90}
                                 keyboardShouldPersistTaps={'handled'} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.screen}>
                    <Header headerText={'LOG IN'}/>
                    <View style={styles.loginScreenContainer}>
                        <View style={{flex: 1}} />
                        <View style={styles.loginInputsContainer}>
                            <View style={styles.loginInput1}>
                                <TextInput style={styles.emailInput}
                                           onChangeText={text => setEmail(text)}
                                           placeholder={'email'}
                                           value={email} />
                            </View>
                            <View style={styles.loginInput2}>
                                <TextInput style={styles.passwordInput}
                                           onChangeText={text => setPassword(text)}
                                           placeholder={'password'}
                                           value={password}/>
                                <View style={{flex: .25}} />
                                <TouchableOpacity style={styles.goButton}
                                                  onPress={props.loginManager.bind(this, email, password)}>
                                    <Text style={styles.goButtonText}>go</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex: 2}} />
                    </View>

                    <View style={styles.bottomTouchableContainer}>
                        <TouchableOpacity style={styles.bottomTouchable} onPress={props.goToSignupHandler}>
                            <Text style={styles.primaryText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    )
}

export default LoginScreen;