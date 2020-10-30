import React from 'react';
import { Typography } from '@material-ui/core';
import resumeData from '../../utility/resumeData';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <Typography className='footer__name'>{resumeData.name}</Typography>
      </div>
      <div className='footer__right'>
        <Typography className='footer__copyright'>
          Designed and Developed by{' '}
          <a href='/' target='_blank'>
            Cero
          </a>{' '}
          <br />
          Inspired by{' '}
          <a href='https://themeforest.net/' target='_blank'>
            ThemeForest
          </a>
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
