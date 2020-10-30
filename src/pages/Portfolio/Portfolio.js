import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import resumeData from '../../utility/resumeData';
import './Portfolio.css';

function Portfolio() {
  const [tab, setTab] = useState('All');
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container spacing={1} className='section pb_45 pt_45'>
      <Grid item className='section__title bot_20'>
        <span></span>
        <h6 className='section__titleText'>Portfolio</h6>
      </Grid>
      <Grid item xs={12}>
        <Tabs
          value={tab}
          indicatorColor='white'
          className='custom__tabs'
          onChange={(e, newValue) => setTab(newValue)}
        >
          <Tab
            label='All'
            value='All'
            className={
              tab === 'All' ? 'custom__tabsItem active' : 'custom__tabsItem'
            }
          />

          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (data) => (
              <Tab
                label={data}
                value={data}
                className={
                  tab === data ? 'custom__tabsItem active' : 'custom__tabsItem'
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => (
            <>
              {tab === project.tag || tab === 'All' ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className='custom__card'
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className='custom__cardImage'
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant='body2'
                            className='custom__cardTitle'
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant='caption'
                            classname='custom__cardCaption'
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className='projectDialog'
        fullWidth
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img
          src={projectDialog.image}
          alt=''
          className='projectDialog__image'
        />
        <DialogContent>
          <Typography className='projectDialog__description'>
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className='projectDialog__actions'>
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target='_blank' className='projectDialog__icon'>
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
      ;
    </Grid>
  );
}

export default Portfolio;
