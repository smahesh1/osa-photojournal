import React, { useState } from 'react';
import { Alert } from 'react-native'
import LandingScreen from "./screens/LandingScreen";
import CreateEntryScreen from "./screens/CreateEntryScreen";
import ViewEntriesManager from "./screens/ViewEntriesManager";
import LoginScreen from "./screens/LoginScreen";
import firebase from "firebase";
import db from './dummyDatabase/database'
import SignupScreen from "./screens/SignupScreen";

export default function App() {
  const [screen, setScreen] = useState('login')


  const createEntryHandler = () => {
    setScreen('create')
  }

  const viewEntriesHandler = () => {
    setScreen('view')
  }

  const goToLandingHandler = () => {
    setScreen('landing')
  }

  const goToSignupHandler = () => {
    setScreen('signup')
  }

  const goToLoginScreenHandler = () => {
    setScreen('login')
  }

  const signupManager = (email, password) => {
    let success = true
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
      success = false
      Alert.alert(error.code, error.message)
    }).then(() => {
      if (success) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
          success = false
          Alert.alert(error.code, error.message)
        }).then(() => {
          if (success) {
            const uid = firebase.auth().currentUser["uid"]
            db.ref('datahold/' + uid).set(0)
            db.ref('datahold/' + uid + '/actualdata').set(0)
            db.ref('datahold/' + uid + '/timetree').set(0)
            setScreen('landing')
            Alert.alert('Success!', 'Your photojourney is ready to begin.')
          }
        })
      }
    })
  }

  const loginManager = (email, password) => {
    let success = true
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
      success = false
      Alert.alert(error.code, error.message)
    }).then(() => {
      if (success) {
        setScreen('landing')
        Alert.alert('Success!', 'Let\'s continue our photo jouney.')
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(error => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
      }
    })
  }



  if (screen === 'login' && firebase.auth()) {
    setScreen('landing')
  }

  let curr_screen_object = <LoginScreen />

  if (screen === 'create') {
    curr_screen_object = <CreateEntryScreen goBackHandler={goToLandingHandler}/>
  } else if (screen === 'view') {
    curr_screen_object = <ViewEntriesManager goBackHandler={goToLandingHandler}/>
  } else if (screen === 'landing') {
    curr_screen_object = <LandingScreen createHandler={createEntryHandler}
                                        viewEntriesHandler={viewEntriesHandler} />
  } else if (screen === 'login') {
    curr_screen_object = <LoginScreen loginManager={loginManager}
                                      goToSignupHandler={goToSignupHandler}/>
  } else if (screen === 'signup') {
    curr_screen_object = <SignupScreen signupManager={signupManager}
                                       goToLoginScreenHandler={goToLoginScreenHandler} />
  }

  return (
      curr_screen_object
  );
}