import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { PieChart, Pie, Sector, Cell, Tooltip, Label } from 'recharts';

import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
}));
const DataQuality = () => {
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
              <Typography variant='h5'>Data Quality Index</Typography>
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
            <Grid item>
              <PieChart width={800} height={400}>
                <Pie
                  data={data}
                  cx={300}
                  cy={150}
                  innerRadius={60}
                  outerRadius={70}
                  fill='#8884d8'
                  paddingAngle={2}>
                  <Label
                    value='Currently'
                    position='centerBottom'
                    className='label-top'
                    fontSize='27px'
                  />
                  <Label value='75' position='centerTop' className='label' />

                  {data.map((entry, index) => (
                    <Cell fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          //className={classes.subContainer}
          lg>
          <Grid
            item
            container
            direction='row'
            style={{ marginBottom: '0.5em' }}
            lg>
            <Grid item>
              <Typography variant='h5'>Top Errors</Typography>
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
                      backgroundColor: 'red',
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
                    color: 'red',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  15000
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
                      backgroundColor: 'red',
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
                    color: 'red',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  15000
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
                <Grid item lg>
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
                  15000
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
                      Discharg date before admission date
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
                      backgroundColor: 'red',
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
                    color: 'red',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  15000
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
                  15000
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction='column' lg>
          <Grid item container direction='row' lg>
            <Grid item>
              <Typography variant='h5'>Data Quality Index</Typography>
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
              <Grid item container direction='row' lg={9}>
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
                      backgroundColor: 'red',
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
                    color: 'red',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  15000
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
                      backgroundColor: 'red',
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
                    color: 'red',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  15000
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
                <Grid item lg>
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
                  15000
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
                      Discharg date before admission date
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
                      backgroundColor: 'red',
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
                    color: 'red',
                    fontSize: '1em',
                    fontWeight: 'bold',
                  }}>
                  15000
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
                  15000
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DataQuality;
