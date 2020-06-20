import React, {Component} from 'react';

// api
import {getData} from '../../services/api';

// material-ui
import {withStyles, WithStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';

// components
import SearchLayout from './search/SearchLayout';
import TabsLayout from './tabs/TabsLayout';

// styles
import homeStyles from './homeStyles';

export interface HomeProps extends WithStyles<typeof homeStyles> {}

export interface HomeState {
  isLoading: boolean;
  movies: Array<any>;
  tv: Array<any>;
  snackBarDisplay: boolean;
  errorMsg: string;
}

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      isLoading: false,
      movies: [],
      tv: [],
      snackBarDisplay: false,
      errorMsg: '',
    };
    this.getMovies = this.getMovies.bind(this);
  }

  // **********************************************//
  // ************ BEGINING OF EFFECTS ******//
  // **********************************************//

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    this.getMovies('now_playing');
    this.getTv('airing_today');
  }

  // **********************************************//
  // ************* END OF EFFECTS *****************//
  // **********************************************//

  // **********************************************//
  // ************ BEGINING OF  ACTIONS ************//
  // **********************************************//

  getMovies = (query: string): void => {
    getData('movie/' + query).then(
      (result) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            movies: result,
          };
        });
      },
      (error) => {
        console.log('Failed: ' + error.message);
        this.setState((prevState) => {
          return {
            ...prevState,
            snackBarDisplay: true,
            errorMsg: error.message,
          };
        });
      },
    );
  };

  getTv = (query: string): void => {
    getData('tv/' + query).then(
      (result) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            tv: result,
          };
        });
      },
      (error) => {
        console.log('Failed: ' + error.message);
        this.setState((prevState) => {
          return {
            ...prevState,
            snackBarDisplay: true,
            errorMsg: error.message,
          };
        });
      },
    );
  };

  // **********************************************//
  // ************** END OF ACTIONS ****************//
  // **********************************************//

  render() {
    const {classes} = this.props;
    return (
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} className={classes.searchPanel}>
          <SearchLayout />
        </Grid>

        <Grid item xs={12} className={classes.resultTabs}>
          <TabsLayout
            getMovies={this.getMovies}
            getTv={this.getTv}
            dataStore={this.state}
          />
        </Grid>

        <Snackbar
          open={this.state.snackBarDisplay}
          autoHideDuration={4000}
          onClose={() => {
            this.setState((prevState) => {
              return {
                ...prevState,
                snackBarDisplay: false,
                errorMsg: '',
              };
            });
          }}>
          <Alert severity="error">{this.state.errorMsg}</Alert>
        </Snackbar>
      </Grid>
    );
  }
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default withStyles(homeStyles)(Home);
