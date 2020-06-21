import {Theme} from '@material-ui/core/styles';

const btnGroupStyles = (theme: Theme) => ({
  btnGroup: {
    margin: 'auto',
    marginTop: '2vh',
    fontSize: '2vh',
    backgroundColor: theme.palette.background.paper,
  },
  btnSelected: {
    backgroundColor: '#f50057',
    color: 'white',
    fontWeight: 'bold' as 'bold',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5vw',
      fontWeight: 'bolder' as 'bolder',
    },
    '&:hover': {
      backgroundColor: '#eb2a6f',
      color: 'white',
    },
  },
  btn: {
    fontSize: '2vh',
    fontWeight: 'bold' as 'bold',
    color: '#f50057',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5vw',
      fontWeight: 'bolder' as 'bolder',
    },
  },
});

export default btnGroupStyles;
