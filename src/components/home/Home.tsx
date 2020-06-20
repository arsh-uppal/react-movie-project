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

const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) =>
  obj[key];
interface ContentType {
  movies: string;
  tv: string;
}

const contentType: ContentType = {
  movies: 'movie/',
  tv: 'tv/',
};
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
  }

  // **********************************************//
  // ************ BEGINING OF EFFECTS ******//
  // **********************************************//

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    this.fetchInfo('now_playing', 'movies');
    this.fetchInfo('airing_today', 'tv');
  }

  // **********************************************//
  // ************* END OF EFFECTS *****************//
  // **********************************************//

  // **********************************************//
  // ************ BEGINING OF  ACTIONS ************//
  // **********************************************//

  fetchInfo = (query: string, type: any): void => {
    const _contentType = getKeyValue<keyof ContentType, ContentType>(type)(
      contentType,
    );
    getData(_contentType + query).then(
      (result) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            [type]: result,
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
          <TabsLayout fetchInfo={this.fetchInfo} dataStore={this.state} />
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
