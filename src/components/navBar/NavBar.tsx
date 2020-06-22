import React from 'react';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 0,
      margin: 0,
    },
    appBar: {
      height: '8vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#020916',
      backgroundImage: 'linear-gradient(to right, #0B2148, #020916 )',
    },
    title: {
      flexGrow: 1,
      fontSize: '2.8vh',
      fontWeight: 'bolder',
      marginLeft: 20,
      marginTop: '1.7vh',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.2vh',
        marginTop: '2.2vh',
      },
    },
    btn: {
      width: '10%',
      fontWeight: 'bolder',
      marginTop: '1vh',
      [theme.breakpoints.down('sm')]: {marginTop: '0.2vh'},
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
        <Button color="inherit" className={classes.btn}>
          <a
            href="https://github.com/Singh-Arshdeep"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: 'inherit', margin: 0, padding: 0}}
            title="Arsh's Github">
            <AccountCircleSharpIcon fontSize="large" />
          </a>
        </Button>
      </AppBar>
    </div>
  );
}
