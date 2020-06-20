import React from 'react';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      height: '8vh',
    },
    title: {
      flexGrow: 1,
      fontSize: '2.8vh',
      fontWeight: 'bold',
      marginTop: '2vh',
      marginLeft: '10px',
    },
  }),
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Typography className={classes.title}>Movies App</Typography>
      </AppBar>
    </div>
  );
}
