import React from 'react';
import image from '../../misc/images/image2.jpg';
import { Typography } from '@material-ui/core';
import { CustomTimeLine } from '../../components';
import resumeData from '../../utility/resumeData';
import './Profile.css';

function Profile() {
  return (
    <div className='profile container__shadow'>
      <div className='profile__name'>
        <Typography className='profile__title'>{resumeData.name}</Typography>
        <Typography className='profile__subtitle'>
          {resumeData.title}
        </Typography>
      </div>

      <figure className='profile__image'>
        <img src={image} alt='' />
      </figure>

      <div className='profile__information'>
        <CustomTimeLine /> <br /> <button>test</button>
      </div>
    </div>
  );
}

export default Profile;
