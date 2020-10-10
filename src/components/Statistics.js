import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';

import BugReportIcon from '@material-ui/icons/BugReport';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Statistics = () => {
  return (
    <Fragment>
      <Grid container display='row' style={{ marginBottom: '2em' }}>
        <Grid item container lg={4}>
          <Grid item>
            <Typography variant='h3'>Data Statistics</Typography>
          </Grid>
        </Grid>
        <Grid item container display='row' lg={8} style={{ marginTop: '1em' }}>
          <Grid item container display='row' md>
            <Grid item>
              <BugReportIcon color='primary' />
            </Grid>
            <Grid item>
              <Typography variant='body1'>Incomming Data</Typography>
            </Grid>
          </Grid>
          <Grid item container display='row' md>
            <Grid item>
              <BugReportIcon color='primary' />
            </Grid>
            <Grid item>
              <Typography variant='body1' md>
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
          <Grid item container display='row' md>
            <Grid item>
              <BugReportIcon color='primary' />
            </Grid>
            <Grid item>
              <Typography variant='body1'>Error unassigned</Typography>
            </Grid>
          </Grid>
          <Grid item container display='row' md>
            <Grid item>
              <BugReportIcon color='primary' />
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
              <ExpandMoreIcon color='primary' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Statistics;
