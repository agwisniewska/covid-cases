import React from 'react';
import Button from 'react-bootstrap/Button'
import {MODE} from "./types";
import { useModeState, useModeDispatch } from '../../../context';

export const ModeButton = () => {
  const mode = useModeState();
  const modeDispatch = useModeDispatch();
  
  return (
    <Button
      variant="info"
      type="button"
      className="btn btn-info"
      onClick={modeDispatch}>
      {mode === MODE.TABLE ? 'Chart view' : 'Table view'}
    </Button>
  );
}
