/**
 * Movies App
 *
 * @version 0.0.1
 * @author Arsh (https://github.com/Singh-Arshdeep)
 */
import React from 'react';

// material-ui
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// components
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navBar: {
      height: '8vh',
    },
    home: {
      minHeight: '92vh',
    },
    footer: {
      height: '10vh',
      [theme.breakpoints.down('xs')]: {
        height: '8vh',
      },
    },
  }),
);

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.navBar}>
            <NavBar />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.home}>
            <Home />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.footer}>
            <Footer />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
