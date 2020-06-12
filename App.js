import React, { useState } from 'react';
import LandingScreen from "./screens/LandingScreen";
import CreateEntryScreen from "./screens/CreateEntryScreen";
import ViewEntriesManager from "./screens/ViewEntriesManager";

export default function App() {
  const [screen, setScreen] = useState('l')



  const createEntryHandler = () => {
    setScreen('c')
  }

  const viewEntriesHandler = () => {
    setScreen('v')
  }

  const goToLandingHandler = () => {
    setScreen('l')
  }

  let curr_screen_object = <LandingScreen createHandler={createEntryHandler}
                                          viewEntriesHandler={viewEntriesHandler} />

  if (screen === 'c') {
    curr_screen_object = <CreateEntryScreen goBackHandler={goToLandingHandler}/>
  } else if (screen === 'v') {
    curr_screen_object = <ViewEntriesManager goBackHandler={goToLandingHandler}/>
  } else if (screen === 'l') {
    curr_screen_object = <LandingScreen createHandler={createEntryHandler}
                                        viewEntriesHandler={viewEntriesHandler} />
  }

  return (
      curr_screen_object
  );
}