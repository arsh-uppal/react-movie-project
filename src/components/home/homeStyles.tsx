import {Theme} from '@material-ui/core/styles';
const homeStyles = (theme: Theme) => ({
  root: {
    height: '100%',
  },
  searchPanel: {
    height: '7%',
    backgroundColor: '#020916',
    backgroundImage: 'linear-gradient(to right, #020916 , #0B2148)',
    [theme.breakpoints.down('xs')]: {
      height: '6%',
    },
  },
  resultTabs: {
    height: '93%',
    minHeight: '100vh',
    backgroundColor: '#020916',
    backgroundImage: 'linear-gradient(to right, #020916 , #0B2148)',
    [theme.breakpoints.down('xs')]: {
      height: '94%',
    },
  },
});

export default homeStyles;
