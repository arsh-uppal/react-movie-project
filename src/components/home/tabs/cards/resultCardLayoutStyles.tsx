import {Theme} from '@material-ui/core/styles';

const resultCardLayoutStyles = (theme: Theme) => ({
  root: {
    maxWidth: 240,
    width: 240,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 340,
      width: 340,
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
  },
});

export default resultCardLayoutStyles;
