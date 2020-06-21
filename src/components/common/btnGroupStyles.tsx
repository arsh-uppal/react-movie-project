import {Theme} from '@material-ui/core/styles';

const btnGroupStyles = (theme: Theme) => ({
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
    '&:hover': {
      background: 'purple',
    },
  },
  btn: {
    fontSize: '2vh',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5vh',
    },
  },
});

export default btnGroupStyles;
