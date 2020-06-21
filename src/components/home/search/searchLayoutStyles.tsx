import {Theme} from '@material-ui/core/styles';

const searchPanelStyles = (theme: Theme) => ({
  mainContainer: {
    height: '100%',
    width: '100%',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '4vh',
  },
  searchInp: {
    marginLeft: '1vw',
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 4,
    [theme.breakpoints.down('xs')]: {
      width: '40%',
    },
  },
  searchTyp: {
    marginLeft: '1vw',
    width: '10%',
    backgroundColor: 'white',
    borderRadius: 20,
    '& div': {
      paddingLeft: 10,
    },
    [theme.breakpoints.down('xs')]: {
      width: '20%',
    },
  },
  searchBtn: {
    marginLeft: '1vw',
    fontSize: '2vh',
    fontWeight: 'bold' as 'bold',
  },
});

export default searchPanelStyles;
