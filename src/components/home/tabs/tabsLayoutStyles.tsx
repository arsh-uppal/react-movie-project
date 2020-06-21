import {Theme} from '@material-ui/core/styles';

const tabsLayoutStyles = (theme: Theme) => ({
  mainContainer: {
    height: '100%',
  },
  tabsBar: {
    backgroundColor: theme.palette.background.paper,
    color: 'black',
    width: '50vw',
    margin: 'auto',
    alignItems: 'center',
    fontSize: '2vh',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  tabPanelContainer: {
    height: '100%',
  },
  btnGroupContainer: {
    width: '100%',
    margin: 'auto',
    textAlign: 'center' as 'center',
  },
  btnGroup: {
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  btnSelected: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '2vh',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5vh',
    },
  },
  btn: {
    fontSize: '2vh',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5vh',
    },
  },
  loadingSkel: {
    width: 210,
    paddingTop: '8vw',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '20vw',
    },
  },
  loadingSearch: {
    width: 210,
    paddingTop: '8vw',
    margin: 'auto',
    textAlign: 'center' as 'center',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '20vw',
    },
  },
});

export default tabsLayoutStyles;
