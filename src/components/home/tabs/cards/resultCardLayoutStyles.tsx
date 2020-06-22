import {Theme} from '@material-ui/core/styles';

const resultCardLayoutStyles = (theme: Theme) => ({
  root: {
    maxWidth: 240,
    width: 240,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 350,
      width: 350,
    },
  },
  media: {
    height: 355,
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  title: {
    width: '100%',
    fontSize: '2vh',
  },
  titleSpan: {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap' as 'nowrap',
    textOverflow: 'ellipsis',
    color: '#f50057',
    fontWeight: 'bolder' as 'bolder',
  },
});

export default resultCardLayoutStyles;
