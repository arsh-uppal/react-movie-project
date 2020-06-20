import {Theme} from '@material-ui/core/styles';

const TabLayoutStyles = (theme: Theme) => ({
  mainContainer: {
    height: '100%',
  },
  tabsBar: {
    backgroundColor: theme.palette.background.paper,
    color: 'black',
    width: '60%',
    margin: 'auto',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  tabPanelContainer: {
    height: '100%',
  },
  btnGroupContainer: {
    width: '100%',
    margin: 'auto',
    textAlign: 'center' as 'center',
  },
  btnGroup: {
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  btnSelected: {
    backgroundColor: 'blue',
    color: 'white',
  },
});

export default TabLayoutStyles;
