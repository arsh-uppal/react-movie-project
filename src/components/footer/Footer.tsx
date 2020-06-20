import React from 'react';

// material-ui
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '8vh',
      backgroundColor: 'black',
    },
    title: {
      flexGrow: 1,
      color: 'white',
      display: 'inline-block',
      fontSize: '2vh',
      fontWeight: 'bold',
      marginTop: '2.8vh',
      marginLeft: '10px',
    },
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>All rights reserved</Typography>
    </div>
  );
}
