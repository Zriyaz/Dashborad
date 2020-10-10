import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { PieChart, Pie, Sector, Cell, Tooltip, Label } from 'recharts';

import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SnoozeIcon from '@material-ui/icons/Snooze';
import StorageIcon from '@material-ui/icons/Storage';
import TimelineIcon from '@material-ui/icons/Timeline';
import BugReportIcon from '@material-ui/icons/BugReport';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const useStyles = makeStyles((theme) => ({
  subContainer: {
    maxWidth: '50em',
  },
  mainContainer: {
    marginTop: '1em',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 'medium',
  },
}));
const BusinessImpact = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container direction='row' className={classes.mainContainer}>
        <Grid
          item
          container
          direction='column'
          style={{ marginLeft: '1em' }}
          lg={3}>
          <Grid item container direction='row' lg>
            <Grid item>
              <Typography variant='h5' className={classes.heading}>
                Business Impact
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction='row'
              lg
              justify='flex-end'
              style={{ marginRight: '1em' }}>
              <Grid item>
                <Typography variant='caption' color='primary'>
                  More
                </Typography>
              </Grid>
              <Grid item>
                <ExpandMoreIcon color='primary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container justify='flex-start'>
            Hello
          </Grid>
        </Grid>
        <Grid item container direction='column' lg>
          <Grid
            item
            container
            direction='row'
            style={{ marginBottom: '0.5em' }}
            lg>
            <Grid item>
              <Typography variant='h5' className={classes.heading}>
                Highest Business Impact
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction='row'
              lg
              justify='flex-end'
              style={{ marginRight: '1em' }}>
              <Grid item>
                <Typography color='primary' variant='caption'>
                  More
                </Typography>
              </Grid>
              <Grid item>
                <ExpandMoreIcon color='primary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction='column'>
            <Grid
              item
              container
              direction='row'
              style={{ marginBottom: '0.5em' }}>
              <Grid item container direction='row' lg={9}>
                <Grid item container direction='column' lg>
                  <Grid item>
                    <Typography
                      variant='body2'
                      style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
                      Premuim less then zero
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='caption'>
                      MARKETING WORKFLOW 1
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item lg>
                  <Typography
                    variant='caption'
                    style={{
                      backgroundColor: '#b21313',
                      color: 'white',
                      borderRadius: '50em',
                      LineHeight: '2px',
                      padding: '0.2em',
                    }}>
                    HIGH
                  </Typography>
                </Grid>
              </Grid>
              <Grid item lg={3}>
                <Typography
                  variant='h6'
                  style={{
                    color: '#b21313',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  $1500.00
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='row'
              style={{ marginBottom: '1em' }}>
              <Grid item container direction='row' lg={9}>
                <Grid item container direction='column' lg>
                  <Grid item>
                    <Typography
                      variant='body2'
                      style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
                      Sum insure tless then zero
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='caption'>
                      MARKETING WORKFLOW 1
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item lg>
                  <Typography
                    variant='caption'
                    style={{
                      backgroundColor: '#b21313',
                      color: 'white',
                      borderRadius: '50em',
                      LineHeight: '2px',
                      padding: '0.2em',
                    }}>
                    HIGH
                  </Typography>
                </Grid>
              </Grid>
              <Grid item lg={3}>
                <Typography
                  variant='h6'
                  style={{
                    color: '#b21313',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  $1500.00
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='row'
              style={{ marginBottom: '1em' }}>
              <Grid item container direction='row' lg={9}>
                <Grid item container direction='column' lg={7}>
                  <Grid item>
                    <Typography
                      styles={{ width: '100%' }}
                      variant='body2'
                      style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
                      Incorrect city names & address
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='caption'>
                      MARKETING WORKFLOW 1
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item lg={5}>
                  <Typography
                    variant='caption'
                    style={{
                      backgroundColor: '#e59a22',
                      color: 'white',
                      borderRadius: '50em',
                      LineHeight: '2px',
                      padding: '0.2em',
                    }}>
                    MEDIUM
                  </Typography>
                </Grid>
              </Grid>
              <Grid item lg={3}>
                <Typography
                  variant='h6'
                  style={{
                    color: '#e59a22',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  $1500.00
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='row'
              style={{ marginBottom: '1em' }}>
              <Grid item container direction='row' lg={9}>
                <Grid item container direction='column' lg={8}>
                  <Grid item>
                    <Typography
                      variant='body2'
                      style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
                      Discharg date before admission date
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='caption'>
                      MARKETING WORKFLOW 1
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item lg={4}>
                  <Typography
                    variant='caption'
                    style={{
                      backgroundColor: '#b21313',
                      color: 'white',
                      borderRadius: '50em',
                      LineHeight: '2px',
                      padding: '0.2em',
                    }}>
                    HIGH
                  </Typography>
                </Grid>
              </Grid>
              <Grid item lg={3}>
                <Typography
                  variant='h6'
                  style={{
                    color: '#b21313',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  $1500.00
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='row'
              style={{ marginBottom: '1em' }}>
              <Grid item container direction='row' lg={9}>
                <Grid item container direction='column' lg>
                  <Grid item>
                    <Typography
                      variant='body2'
                      style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
                      Wrong telephone number
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='caption'>
                      MARKETING WORKFLOW 1
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item lg>
                  <Typography
                    variant='caption'
                    style={{
                      backgroundColor: '#f2f204',
                      color: 'white',
                      borderRadius: '50em',
                      LineHeight: '2px',
                      padding: '0.2em',
                    }}>
                    LOW
                  </Typography>
                </Grid>
              </Grid>
              <Grid item lg={3}>
                <Typography
                  variant='h6'
                  style={{
                    color: '#f2f204',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  $1500.00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction='column' lg>
          <Grid item container direction='row' lg>
            <Grid item>
              <Typography variant='h5' className={classes.heading}>
                Assigned to me
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction='row'
              lg
              justify='flex-end'
              style={{ marginRight: '1em' }}>
              <Grid item>
                <Typography variant='caption' color='primary'>
                  More
                </Typography>
              </Grid>
              <Grid item>
                <ExpandMoreIcon color='primary' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid
              item
              container
              direction='row'
              style={{ marginBottom: '0.5em' }}>
              <Grid item container direction='row' lg>
                <Grid item lg={1}>
                  <TimelineIcon color='primary' />
                </Grid>
                <Grid item container direction='column' lg>
                  <Grid item>
                    <Typography
                      variant='body2'
                      style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
                      Premuim less hen zero
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='caption'>
                      MARKETING WORKFLOW 1
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item lg>
                  <Typography
                    variant='caption'
                    style={{
                      backgroundColor: '#b21313',
                      color: 'white',
                      borderRadius: '50em',
                      LineHeight: '2px',
                      padding: '0.2em',
                    }}>
                    HIGH
                  </Typography>
                </Grid>
              </Grid>
              <Grid item lg={2}>
                <Typography
                  variant='h6'
                  style={{
                    color: '#b21313',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  Today
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='row'
              style={{ marginBottom: '1em' }}>
              <Grid item lg={1}>
                <StorageIcon color='primary' />
              </Grid>
              <Grid item container direction='row' lg={9}>
                <Grid item container direction='column' lg>
                  <Grid item>
                    <Typography
                      variant='body2'
                      style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
                      Sum insure less then zero
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='caption'>
                      MARKETING WORKFLOW 1
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item lg>
                  <Typography
                    variant='caption'
                    style={{
                      backgroundColor: '#b21313',
                      color: 'white',
                      borderRadius: '50em',
                      LineHeight: '2px',
                      padding: '0.2em',
                    }}>
                    HIGH
                  </Typography>
                </Grid>
              </Grid>
              <Grid item lg={2}>
                <Typography
                  variant='h6'
                  style={{
                    color: '#b21313',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  Today
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='row'
              style={{ marginBottom: '1em' }}>
              <Grid item lg={1}>
                <NotificationsActiveIcon color='primary' />
              </Grid>
              <Grid item container direction='row' lg={9}>
                <Grid item container direction='column' lg={7}>
                  <Grid item>
                    <Typography
                      styles={{ width: '100%' }}
                      variant='body2'
                      style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
                      Incorrect city names & address
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='caption'>
                      MARKETING WORKFLOW 1
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item lg={5}>
                  <Typography
                    variant='caption'
                    style={{
                      backgroundColor: '#e59a22',
                      color: 'white',
                      borderRadius: '50em',
                      LineHeight: '2px',
                      padding: '0.2em',
                    }}>
                    MEDIUM
                  </Typography>
                </Grid>
              </Grid>
              <Grid item lg={2}>
                <Typography
                  variant='h6'
                  style={{
                    color: '#e59a22',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  Today
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='row'
              style={{ marginBottom: '1em' }}>
              <Grid item lg={1}>
                <BugReportIcon color='primary' />
              </Grid>
              <Grid item container direction='row' lg={9}>
                <Grid item container direction='column' lg={8}>
                  <Grid item>
                    <Typography
                      variant='body2'
                      style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
                      Discharg date before admission date
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='caption'>
                      MARKETING WORKFLOW 1
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item lg={4}>
                  <Typography
                    variant='caption'
                    style={{
                      backgroundColor: '#b21313',
                      color: 'white',
                      borderRadius: '50em',
                      LineHeight: '2px',
                      padding: '0.2em',
                    }}>
                    HIGH
                  </Typography>
                </Grid>
              </Grid>
              <Grid item lg={2}>
                <Typography
                  variant='h6'
                  style={{
                    color: '#b21313',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  Today
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='row'
              style={{ marginBottom: '1em' }}>
              <Grid item lg={1}>
                <TimelineIcon color='primary' />
              </Grid>
              <Grid item container direction='row' lg={9}>
                <Grid item container direction='column' lg={7}>
                  <Grid item>
                    <Typography
                      variant='body2'
                      style={{ fontSize: '0.8em', fontWeight: 'bold' }}>
                      Wrong telephone number
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant='caption'>
                      MARKETING WORKFLOW 1
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item lg={5}>
                  <Typography
                    variant='caption'
                    style={{
                      backgroundColor: '#f2f204',
                      color: 'white',
                      borderRadius: '50em',
                      LineHeight: '2px',
                      padding: '0.2em',
                    }}>
                    LOW
                  </Typography>
                </Grid>
              </Grid>
              <Grid item lg={2}>
                <Typography
                  variant='h6'
                  style={{
                    color: '#f2f204',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  Today
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default BusinessImpact;
