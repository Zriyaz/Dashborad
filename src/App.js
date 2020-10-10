import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './components/Theme';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';
import LineGraph from './components/LineGraph';
import DataQuality from './components/DataQuality';
import BusinessImpact from './components/BusinessImpact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Statistics />
      <LineGraph />
      <DataQuality />
      <BusinessImpact />
    </ThemeProvider>
  );
}

export default App;
