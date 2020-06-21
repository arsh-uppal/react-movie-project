import {Theme} from '@material-ui/core/styles';

const popOverStyles = (theme: Theme) => ({
  popOverBackground: {
    backgroundColor: 'black',
    opacity: '0.95',
  },
  root: {
    minWidth: 275,
  },
  cardHeader: {
    paddingBottom: 0,
  },
  cardContainer: {
    width: '35vw',
    height: 'auto',
    minWidth: 350,
    [theme.breakpoints.down('xs')]: {
      minWidth: '95vw',
    },
  },
  rating: {
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
  },
});

export default popOverStyles;
