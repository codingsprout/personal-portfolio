import React from 'react';
import { Grid, Icon, Paper, Typography } from '@material-ui/core';
import './Service.css';
import resumeData from '../../utility/resumeData';
import TimelineDot from '@material-ui/lab/TimelineDot';

function Service() {
  return (
    <>
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section__title bot_30'>
          <span></span>
          <h6 className='section__titleText'>Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify='space-around'>
            {resumeData.services.map((data) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={1}>
                  <div className='service'>
                    <Icon className='service__icon'>{data.icon}</Icon>
                    <Typography variant='h6' className='service__title'>
                      {data.title}
                    </Typography>
                    <Typography className='service__text' variant='body2'>
                      {data.text}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid container className='section graybg pb_45 p_50'>
        <Grid item xs={12}>
          <Grid container justify='space-between' spacing={3}>
            {resumeData.skills.map((data) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className='skill'>
                  <Typography variant='h6' className='skill__title'>
                    {data.title}
                  </Typography>
                  {data.text.map((item) => (
                    <Typography variant='body2' className='skill__text'>
                      <TimelineDot
                        variant={'outlined'}
                        className='skill__dot'
                      />
                      {item}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Service;
