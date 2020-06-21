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
      backgroundColor: '#020916',
      backgroundImage: 'linear-gradient(to right, #0B2148, #020916 )',
    },
    title: {
      flexGrow: 1,
      fontSize: '2.7vh',
      fontWeight: 'bolder',
      marginTop: '2vh',
      marginLeft: '20px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.5vh',
      },
    },
  }),
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Typography component={'span'} className={classes.title}>
          Movies App
        </Typography>
      </AppBar>
    </div>
  );
}
