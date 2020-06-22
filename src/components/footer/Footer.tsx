import React from 'react';

// material-ui
import {Theme} from '@material-ui/core/styles';
import {createStyles, makeStyles} from '@material-ui/core/styles';

// official icons, credits
/**
 * The following import may show warning in VS code. However, it works.
 */
import movieDBlogo from '../../images/moviedb-logo.svg';
import reactlogo from '../../images/react.png';
import tslogo from '../../images/typescript.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '10vh',
      minHeight: 55,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#020916',
      backgroundImage: 'linear-gradient(to right, #0B2148, #020916 )',
      [theme.breakpoints.down('xs')]: {
        height: '8vh',
      },
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
    divLeftStyle: {
      float: 'left',
      padding: '1.2vh 25px',
    },
    divRightStyle: {
      color: 'white',
      float: 'left',
      padding: '2.2vh 25px',
    },
    divRightItems: {
      marginRight: 20,
    },
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Typography className={classes.title}>All rights reserved</Typography> */}
      <div className={classes.divLeftStyle}>
        <img
          src={movieDBlogo}
          alt="movieDB logo"
          width="50"
          height="50"
          title="Powered by The Movie Database project"
        />
      </div>
      <div className={classes.divRightStyle}>
        <img
          className={classes.divRightItems}
          src={reactlogo}
          alt="react logo"
          width="30"
          height="30"
          title="Built with React JS"
        />
        <img
          className={classes.divRightItems}
          src={tslogo}
          alt="search logo"
          width="30"
          height="30"
          title="Built with TypeScript"
        />
      </div>
    </div>
  );
}
