import React, {MouseEvent, createContext, useState, useContext} from 'react';
import {MODE} from '../components';

export type ModeDispatch = (event: MouseEvent<HTMLButtonElement>) => void
export type ModeProviderProps = {children: React.ReactNode}

const ModeStateContext = createContext<MODE | undefined>(undefined);
const ModeDispatchContext = createContext<ModeDispatch | undefined>(undefined);

const ModeProvider = ({children}: ModeProviderProps) => {

  const [mode, setMode] = useState(MODE.TABLE);

  const toggleMode = () => {
    mode === MODE.TABLE ? setMode(MODE.CHART) : setMode(MODE.TABLE)
  }

  return (
    <ModeStateContext.Provider value={mode}>
      <ModeDispatchContext.Provider value={toggleMode}>
        {children}
      </ModeDispatchContext.Provider>
    </ModeStateContext.Provider>
  )
}

const useModeState = () => {
  const context = useContext(ModeStateContext)
  if (context == null) {
    throw new Error('useModeState must be used within a ModeProvider')
  }
  return context
}

const useModeDispatch = () => {
  const context = React.useContext(ModeDispatchContext)
  if (context == null) {
    throw new Error('useModeDispatch must be used within a ModeProvider')
  }
  return context
}


export {useModeState, useModeDispatch, ModeProvider}