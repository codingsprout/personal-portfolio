import React from 'react';
import image from '../../misc/images/image2.jpg';
import { Typography } from '@material-ui/core';
import { CustomTimeLine, CustomButton } from '../../components';
import resumeData from '../../utility/resumeData';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import TimelineItem from '@material-ui/lab/TimelineItem';
import { CustomTimelineSeparator } from '../Timeline/Timeline';
import TimelineContent from '@material-ui/lab/TimelineContent';
import GetAppIcon from '@material-ui/icons/GetApp';
import './Profile.css';

export const CustomItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline__content'>
      {link ? (
        <Typography className='timeline__text'>
          <span>{title}:</span>{' '}
          <a href={link} target='_blank'>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className='timeline__text'>
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

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
        <CustomTimeLine icon={<PersonOutlineOutlinedIcon />}>
          <CustomItem title='Name' text={resumeData.name} />
          <CustomItem title='Title' text={resumeData.title} />
          <CustomItem title='Email' text={resumeData.email} />

          {Object.keys(resumeData.socialLink).map((data) => (
            <CustomItem
              title={data}
              text={resumeData.socialLink[data].text}
              link={resumeData.socialLink[data].link}
            />
          ))}
        </CustomTimeLine>
        <div className='button__container'>
          <CustomButton text={'Download Resume'} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
