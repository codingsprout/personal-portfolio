import React from 'react';
import { Typography } from '@material-ui/core';
import './Profile.css';

function Profile() {
  return (
    <div className='profile container__shadow'>
      <div className='profile__name'>
        <Typography className='profile__title'>Cero</Typography>
        <Typography className='profile__subtitle'>Queen</Typography>
      </div>

      <figure className='profile__image'>
        <img src='' alt=''></img>
      </figure>

      <div className='profile__information'>
        Timeline <br /> <button>test</button>
      </div>
    </div>
  );
}

export default Profile;
