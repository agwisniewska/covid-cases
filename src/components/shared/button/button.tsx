import React, {MouseEvent} from 'react';
import {default as LayoutButton} from 'react-bootstrap/Button'

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  variant?: string;
  className?: string;
}

export const Button = ({title = 'Info', onClick, variant = 'info', className = 'btn btn-info'}: ButtonProps) => {
  return (
    <LayoutButton
      variant={variant}
      type="button"
      className={className}
      onClick={onClick}>
      {title}
    </LayoutButton>
  );
}
