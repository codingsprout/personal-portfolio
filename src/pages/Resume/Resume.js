import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import resumeData from '../../utility/resumeData';
import { CustomTimeLine } from '../../components';
import WorkIcon from '@material-ui/icons/Work';
import TimelineItem from '@material-ui/lab/TimelineItem';
import { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import TimelineContent from '@material-ui/lab/TimelineContent';
import SchoolIcon from '@material-ui/icons/School';
import './Resume.css';

function Resume() {
  return (
    <>
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section__title bot_30'>
          <span></span>
          <h6 className='section__titleText'>About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' className='aboutme__text'>
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='section pb_45'>
        <Grid item className='section__title bot_30'>
          <span></span>
          <h6 className='section__titleText'>Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume__timeline'>
            <Grid item sm={12} md={6}>
              <CustomTimeLine title='Work Experience' icon={<WorkIcon />}>
                {resumeData.work.map((data) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline__content'>
                      <Typography className='timeline__title'>
                        {data.title}
                      </Typography>
                      <Typography variant='caption' className='timeline__date'>
                        {data.date}
                      </Typography>
                      <Typography variant='body2' className='timeline__text'>
                        {data.text}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>
            <Grid item sm={12} md={6}>
              <CustomTimeLine title='Education' icon={<SchoolIcon />}>
                {resumeData.education.map((data) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline__content'>
                      <Typography className='timeline__title'>
                        {data.title}
                      </Typography>
                      <Typography variant='caption' className='timeline__date'>
                        {data.date}
                      </Typography>
                      <Typography variant='body2' className='timeline__text'>
                        {data.text}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Resume;
