import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
interface ButtonToNavigate {
  title: string;
  path: string;
}

export const ButtonToNavigate = ({ title, path }: ButtonToNavigate) => {
  const history = useHistory();
  const onClick = () => {
    history.push(path);
  }

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
