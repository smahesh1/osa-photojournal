import React, { useState } from 'react';
import LandingScreen from "./screens/LandingScreen";
import CreateEntryScreen from "./screens/CreateEntryScreen";
import ViewYearsScreen from "./screens/ViewYearsScreen";

export default function App() {
  const [screen, setScreen] = useState('l')

  const createEntryHandler = () => {
    setScreen('c')
  }

  const viewEntriesHandler = () => {
    setScreen('v')
  }

  let curr_screen_object = <LandingScreen createHandler={createEntryHandler}
                                          viewEntriesHandler={viewEntriesHandler} />

  if (screen === 'c') {
    curr_screen_object = <CreateEntryScreen />
  } else if (screen === 'v') {
    curr_screen_object = <ViewYearsScreen />
  }

  return (
      curr_screen_object
  );
}