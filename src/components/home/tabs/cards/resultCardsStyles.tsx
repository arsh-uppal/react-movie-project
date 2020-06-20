import {Theme} from '@material-ui/core/styles';

const resultCardsStyles = (theme: Theme) => ({
  root: {
    padding: '2vw 2vw',
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '2.5vh',
    },
  },
});

export default resultCardsStyles;
