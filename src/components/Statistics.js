import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';

import BugReportIcon from '@material-ui/icons/BugReport';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Statistics = () => {
  return (
    <Fragment>
      <Grid container display='row' style={{ marginBottom: '2em' }}>
        <Grid item container lg={4}>
          <Grid item style={{ marginLeft: '1.2em' }}>
            <Typography variant='h4'>Data Statistics</Typography>
          </Grid>
        </Grid>
        <Grid item container display='row' lg={8} style={{ marginTop: '1em' }}>
          <Grid item container display='row' md>
            <Grid item>
              <BugReportIcon style={{ color: '#3cb0ea' }} />
            </Grid>
            <Grid item>
              <Typography variant='body1' style={{ color: '#3cb0ea' }}>
                Incomming Data
              </Typography>
            </Grid>
          </Grid>
          <Grid item container display='row' md>
            <Grid item>
              <BugReportIcon style={{ color: '#66e1f4' }} />
            </Grid>
            <Grid item>
              <Typography variant='body1' md style={{ color: '#66e1f4' }}>
                Error Detected
              </Typography>
            </Grid>
          </Grid>
          <Grid item container display='row' md>
            <Grid item>
              <BugReportIcon color='primary' />
            </Grid>
            <Grid item>
              <Typography variant='body1'>Error Fixed</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            display='row'
            style={{ marginRight: '0.5em' }}
            md>
            <Grid item>
              <BugReportIcon />
            </Grid>
            <Grid item>
              <Typography variant='body1'>Error unassigned</Typography>
            </Grid>
          </Grid>
          <Grid item container display='row' md>
            <Grid item>
              <BugReportIcon />
            </Grid>
            <Grid item>
              <Typography variant='body1'>Error assigned</Typography>
            </Grid>
          </Grid>
          <Grid item container display='row' md>
            <Grid item>
              <Typography variant='body1'>This month</Typography>
            </Grid>
            <Grid item>
              <ExpandMoreIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Statistics;
