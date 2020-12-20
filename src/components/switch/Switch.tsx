import React from 'react';

interface SwitchProps {
  title: string;
  onChange: () => void;
}

export const Switch = ({title, onChange}: SwitchProps) => { 


  return (
    <div className="custom-control custom-switch">


      <label className="custom-control-label" htmlFor="switch">{title}</label>

      <input
          type="checkbox"
          className="custom-control-input"
          id="switch"
        
      />
    </div>
  )
}