import {Theme} from '@material-ui/core/styles';

const searchPanelStyles = (theme: Theme) => ({
  mainContainer: {
    height: '100%',
    width: '100%',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '5vh',
    paddingLeft: '2vh',
    paddingRight: '2vh',
  },
  searchInp: {
    marginLeft: '1.5vw',
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 4,
    [theme.breakpoints.down('xs')]: {
      width: '50%',
    },
  },
  searchTyp: {
    marginLeft: '1.5vw',
    width: '10%',
    backgroundColor: 'white',
    borderRadius: 20,
    '& div': {
      paddingLeft: 10,
      // color: '#f50057',
    },
    [theme.breakpoints.down('xs')]: {
      width: '25%',
    },
  },
  searchBtn: {
    marginLeft: '1.5vw',
    fontSize: '2vh',
    fontWeight: 'bold' as 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5vh',
      width: '25%',
    },
  },
});

export default searchPanelStyles;
