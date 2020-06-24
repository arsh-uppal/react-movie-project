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
  search: Array<string>;
  moviesPageCount: number;
  tvPageCount: number;
  searchPageCount: number;
  tabNumber: number;
  searchMsg: string;
  searchQuery: string;
  searchFilter: string;
  errorMsg: string;
  snackBarDisplay: boolean;
}

const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) =>
  obj[key];
interface ContentCategories {
  movies: string;
  tv: string;
  search: string;
}

const contentCategories: ContentCategories = {
  movies: 'movie/',
  tv: 'tv/',
  search: 'search/',
};
class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      isLoading: false,
      movies: [],
      tv: [],
      search: [],
      moviesPageCount: 1,
      tvPageCount: 1,
      searchPageCount: 1,
      tabNumber: 0,
      searchMsg: 'Please enter a search query',
      searchQuery: '',
      searchFilter: '',
      errorMsg: '',
      snackBarDisplay: false,
    };
  }

  // **********************************************//
  // ************ BEGINING OF EFFECTS *************//
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

  /**
   * This function handles all the api calls
   * @param contentFor - {now_playing || upcoming || popular || etc}
   * @param contentCategory - {movies || tv || search}
   * @param searchQuery - this is an optional parameter
   * @param pageNum - this is an optional parameter
   */
  fetchInfo = (
    contentFor: string,
    contentCategory: any,
    searchQuery: string = '',
    pageNum: number = 1,
  ): void => {
    // to add values in the state object using dynamic keys [TS specific]
    const _contentCategory = getKeyValue<
      keyof ContentCategories,
      ContentCategories
    >(contentCategory)(contentCategories);

    //temp fix for pagination on search page
    if (contentCategory === 'search') {
      this.setState((prevState) => {
        return {
          ...prevState,
          searchQuery: searchQuery,
          searchFilter: contentFor,
        };
      });
    }
    getData(_contentCategory + contentFor, searchQuery, pageNum).then(
      (data) => {
        this.setState((prevState) => {
          let pageCountFor = contentCategory + 'PageCount';
          return {
            ...prevState,
            isLoading: false,
            [contentCategory]: data.results,
            [pageCountFor]: data.total_pages,
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

  // handleTabChange
  handleTabChange = (event: any, newValue: number) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        tabNumber: newValue,
      };
    });
  };

  // handle search messages
  setSearchMsg = (msg: string) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchMsg: msg,
      };
    });
  };

  // **********************************************//
  // ************** END OF ACTIONS ****************//
  // **********************************************//

  render() {
    const {classes} = this.props;
    return (
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} className={classes.searchPanel}>
          <SearchLayout
            fetchInfo={this.fetchInfo}
            handleTabChange={this.handleTabChange}
            setSearchMsg={this.setSearchMsg}
          />
        </Grid>

        <Grid item xs={12} className={classes.resultTabs}>
          <TabsLayout
            fetchInfo={this.fetchInfo}
            dataStore={this.state}
            handleTabChange={this.handleTabChange}
          />
        </Grid>

        {/* This Snackbar handle all the errors */}
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
