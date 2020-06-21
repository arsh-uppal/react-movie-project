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
});

export default resultCardsStyles;
