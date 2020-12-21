import React from 'react';
import {useHistory} from 'react-router-dom';

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
    <button
      type="button"
      className="btn btn-info"
      onClick={onClick}>
      {title}
    </button>
  );
}
