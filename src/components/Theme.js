import { createMuiTheme } from '@material-ui/core/styles';

const mainColor = '#1976D2';
const secondColor = '#f8f8f8';

export default createMuiTheme({
  palette: {
    common: {
      second: `${secondColor}`,
    },
    primary: {
      main: `${mainColor}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
  },
});
