import React from 'react';
import { Button } from '@material-ui/core';
import './Button.css';

function CustomButtton({ text, icon }) {
  return (
    <Button
      className='btn__container'
      endIcon={icon ? <div className='btn__icon'>{icon}</div> : null}
    >
      <span className='btn__text'>{text}</span>
    </Button>
  );
}

export default CustomButtton;
