import React from 'react';
import Button from 'react-bootstrap/Button'
import {ModeButtonProps} from ".";

export const ModeButton = ({ title, onClick }: ModeButtonProps) => {
  return (
    <Button
      variant="info"
      type="button"
      className="btn btn-info"
      onClick={onClick}>
      {title}
    </Button>
  );
}
