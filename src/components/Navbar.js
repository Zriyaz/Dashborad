import React, { Fragment } from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  Grid,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import SnoozeIcon from '@material-ui/icons/Snooze';
import StorageIcon from '@material-ui/icons/Storage';
import TimelineIcon from '@material-ui/icons/Timeline';
import ScheduleIcon from '@material-ui/icons/Schedule';
import BugReportIcon from '@material-ui/icons/BugReport';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyle = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const Navbar = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position='fixed' color='ffffff'>
          <Toolbar>
            <SnoozeIcon
              height='300'
              width='400'
              style={{ marginRight: '2em' }}
            />
            <Grid container display='row'>
              <Grid item container lg={9}>
                <Grid
                  item
                  container
                  display='row'
                  style={{ marginRight: 0 }}
                  lg>
                  <Grid item>
                    <StorageIcon color='primary' />
                  </Grid>
                  <Grid item>
                    <Typography variant='body1'>Data Library</Typography>
                  </Grid>
                </Grid>
                <Grid item container display='row' lg>
                  <Grid item>
                    <TimelineIcon color='primary' />
                  </Grid>
                  <Grid item>
                    <Typography variant='body1'>Workflow</Typography>
                  </Grid>
                </Grid>
                <Grid item container display='row' lg>
                  <Grid item>
                    <ScheduleIcon color='primary' />
                  </Grid>
                  <Grid item>
                    <Typography variant='body1'>Scheduler</Typography>
                  </Grid>
                </Grid>
                <Grid item container display='row' lg>
                  <Grid item>
                    <BugReportIcon color='primary' />
                  </Grid>
                  <Grid item>
                    <Typography variant='body1'>Error Manager</Typography>
                  </Grid>
                </Grid>
                <Grid item container display='row' lg>
                  <Grid item>
                    <NotificationsActiveIcon color='primary' />
                  </Grid>
                  <Grid item>
                    <Typography variant='body1'>Notifications</Typography>
                  </Grid>
                </Grid>
                <Grid item container display='row' lg>
                  <Grid item>
                    <TrendingUpIcon color='primary' />
                  </Grid>
                  <Grid item>
                    <Typography variant='body1'>Reports</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container display='row' lg={3} justify='flex-end'>
                <Grid item style={{ marginRight: '0.5em' }}>
                  <HelpOutlineIcon color='primary' />
                </Grid>
                <Grid item>
                  <Avatar className={classes.small}>
                    <small>RK</small>
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Navbar;
