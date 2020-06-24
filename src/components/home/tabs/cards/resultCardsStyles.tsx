import {Theme} from '@material-ui/core/styles';

const resultCardsStyles = (theme: Theme) => ({
  root: {
    padding: '6vh 10vw',
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '4vh',
    },
  },
  paginationContainer: {
    margin: 'auto',
    display: 'table',
    paddingTop: '5vh',
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
});

export default resultCardsStyles;
