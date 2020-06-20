import {Theme} from '@material-ui/core/styles';

const searchPanelStyles = (theme: Theme) => ({
  mainContainer: {
    height: '100%',
    width: '100%',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4vh',
  },
  searchInp: {
    marginLeft: '1vw',
    width: '30%',
    [theme.breakpoints.down('xs')]: {
      width: '40%',
    },
  },
  searchTyp: {
    marginLeft: '1vw',
    width: '10%',
    [theme.breakpoints.down('xs')]: {
      width: '20%',
    },
  },
  searchBtn: {
    marginLeft: '1vw',
    fontSize: '2vh',
  },
});

export default searchPanelStyles;
