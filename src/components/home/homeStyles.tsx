import {Theme} from '@material-ui/core/styles';
const homeStyles = (theme: Theme) => ({
  root: {
    height: '100%',
  },
  searchPanel: {
    height: '7%',
    backgroundColor: 'red',
    [theme.breakpoints.down('xs')]: {
      height: '6%',
    },
  },
  resultTabs: {
    height: '93%',
    [theme.breakpoints.down('xs')]: {
      height: '94%',
    },
  },
});

export default homeStyles;
