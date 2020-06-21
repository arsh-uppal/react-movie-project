import {Theme} from '@material-ui/core/styles';

const tabsLayoutStyles = (theme: Theme) => ({
  mainContainer: {
    height: '100%',
  },
  tabsBar: {
    backgroundColor: theme.palette.background.paper,
    width: '40vw',
    margin: 'auto',
    marginTop: '5px',
    alignItems: 'center',
    color: '#f50057',
    fontWeight: 'bolder' as 'bolder',
    fontSize: '2vh',
    overflow: 'hidden',
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
  tabTitle: {
    fontWeight: 'bolder' as 'bolder',
  },
  btnGroupContainer: {
    overflow: 'auto',
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
    width: '250px',
    paddingTop: '5vw',
    margin: 'auto',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold' as 'bold',
    textAlign: 'center' as 'center',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '15vw',
    },
  },
  searchImg: {marginTop: 40},

  paginationContainer: {
    margin: 'auto',
    display: 'table',
  },
  pagination: {
    width: '100%%',
    margin: 'auto',
    textAlign: 'center' as 'center',
    '& ul': {
      '& li:nth-child(n+2):nth-child(-n+3)': {display: 'none'},
      '& li': {
        '& button': {backgroundColor: '#f50057'},
        '& button:hover': {backgroundColor: '#eb2a6f'},
      },
    },
  },
  paginationForSearch: {
    width: '100%%',
    margin: 'auto',
    textAlign: 'center' as 'center',
    '& ul': {
      '& li': {
        '& button': {backgroundColor: '#f50057'},
        '& button:selected': {backgroundColor: '#f50057'},
      },
    },
  },
});

export default tabsLayoutStyles;
