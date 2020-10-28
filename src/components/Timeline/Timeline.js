import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import './Timeline.css';

function CustomTimeline({ title, icon, children }) {
  return (
    <Timeline className={'timeline'}>
      {/* One item */}
      <TimelineItem className={'timeline__itemOne'}>
        <TimelineSeparator>
          <TimelineDot className={'timeline__headerDot'}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className={'timeline__header'}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}

      {/* Rest items */}
    </Timeline>
  );
}

export const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator className={'timeline__separator'}>
      <TimelineDot variant={'outlined'} className={'timeline__dot'} />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CustomTimeline;
