import React from 'react';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {withStyles, WithStyles} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

// componenets
import LoadingSkelton from '../../common/LoadingSkelton';
import ResultCards from './cards/ResultCards';
import BtnGroup from '../../common/BtnGroup';

// styles
import tabsLayoutStyles from './tabsLayoutStyles';

// search image
/**
 * Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
 *
 * The following import may show warning in VS code. However, it works.
 */
import searchImg from '../../../images/search.png';

export interface TabsLayoutProps extends WithStyles<typeof tabsLayoutStyles> {
  fetchInfo: (
    contentFor: string,
    contentCategory: any,
    searchQuery?: string,
    pageNum?: number,
  ) => void;
  handleTabChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  dataStore: any;
}

export interface TabsLayoutState {
  btnSelectedMovies: string;
  btnSelectedTv: string;
}

class TabsLayout extends React.Component<TabsLayoutProps, TabsLayoutState> {
  constructor(props: TabsLayoutProps) {
    super(props);
    this.state = {
      btnSelectedMovies: 'now_playing',
      btnSelectedTv: 'airing_today',
    };
  }

  // **********************************************//
  // ************ BEGINING OF  ACTIONS ************//
  // **********************************************//

  /**
   * @param btn - the btn which we want to highlight
   * @param contentType
   * handles click on any button of the button group
   */
  handleBtnClick = (contentFor: string, contentCategory: string) => {
    this.props.fetchInfo(contentFor, contentCategory);
    if (contentCategory === 'movies') {
      this.setState((prevState) => {
        return {
          ...prevState,
          btnSelectedMovies: contentFor,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          btnSelectedTv: contentFor,
        };
      });
    }
  };

  /**
   * could not change the default on change signature for pagination
   */
  handleMoviesPageChange = (event: object, page: number) => {
    this.props.fetchInfo(
      this.state.btnSelectedMovies,
      'movies',
      undefined,
      page,
    );
  };

  handleTvPageChange = (event: object, page: number) => {
    this.props.fetchInfo(this.state.btnSelectedTv, 'tv', undefined, page);
  };

  handleSearchPageChange = (event: object, page: number) => {
    this.props.fetchInfo(
      this.props.dataStore.searchFilter,
      'search',
      this.props.dataStore.searchQuery,
      page,
    );
  };

  // **********************************************//
  // ************** END OF ACTIONS ****************//
  // **********************************************//

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.mainContainer}>
        <AppBar position="static" className={classes.tabsBar}>
          <Tabs
            value={this.props.dataStore.tabNumber}
            onChange={this.props.handleTabChange}
            aria-label="Tabs">
            <Tab label="MOVIES" {...a11yProps(0)} />
            <Tab label="SEARCH" {...a11yProps(1)} />
            <Tab label="TV" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <div></div>
        <div className={classes.tabPanelContainer}>
          <TabPanel value={this.props.dataStore.tabNumber} index={0}>
            <div className={classes.btnGroupContainer}>
              <BtnGroup
                btnTypes={['now_playing', 'popular', 'top_rated', 'upcoming']}
                contentType={'movies'}
                handleBtnClick={this.handleBtnClick}
                btnSelected={this.state.btnSelectedMovies}
              />
            </div>
            {this.props.dataStore.isLoading ? (
              <div className={classes.loadingSkel}>
                <LoadingSkelton />
              </div>
            ) : (
              <>
                <ResultCards cardsData={this.props.dataStore.movies} />
                <div className={classes.paginationContainer}>
                  <Pagination
                    variant="outlined"
                    count={this.props.dataStore.moviesPageCount}
                    color="primary"
                    onChange={this.handleMoviesPageChange}
                    className={classes.pagination}
                    boundaryCount={0}
                    siblingCount={0}
                    size="large"
                  />
                </div>
              </>
            )}
          </TabPanel>

          <TabPanel value={this.props.dataStore.tabNumber} index={1}>
            {this.props.dataStore.isLoading ? (
              <div className={classes.loadingSkel}>
                <LoadingSkelton />
              </div>
            ) : this.props.dataStore.searchMsg.length > 0 &&
              this.props.dataStore.search.length <= 0 ? (
              <div className={classes.loadingSearch}>
                {this.props.dataStore.searchMsg}
                <img
                  src={searchImg}
                  alt="searcj icon"
                  width="100"
                  height="100"
                />
              </div>
            ) : (
              <>
                <ResultCards cardsData={this.props.dataStore.search} />
                <div className={classes.paginationContainer}>
                  <Pagination
                    variant="outlined"
                    count={this.props.dataStore.searchPageCount}
                    color="primary"
                    onChange={this.handleSearchPageChange}
                    className={classes.paginationForSearch}
                  />
                </div>
              </>
            )}
          </TabPanel>

          <TabPanel value={this.props.dataStore.tabNumber} index={2}>
            <div className={classes.btnGroupContainer}>
              <BtnGroup
                btnTypes={[
                  'airing_today',
                  'on_the_air',
                  'popular',
                  'top_rated',
                ]}
                contentType={'tv'}
                handleBtnClick={this.handleBtnClick}
                btnSelected={this.state.btnSelectedTv}
              />
            </div>
            {this.props.dataStore.isLoading ? (
              <div className={classes.loadingSkel}>
                <LoadingSkelton />
              </div>
            ) : (
              <>
                <ResultCards cardsData={this.props.dataStore.tv} />
                <div className={classes.paginationContainer}>
                  <Pagination
                    variant="outlined"
                    count={this.props.dataStore.tvPageCount}
                    color="primary"
                    onChange={this.handleTvPageChange}
                    className={classes.pagination}
                    boundaryCount={0}
                    siblingCount={0}
                    size="large"
                  />
                </div>
              </>
            )}
          </TabPanel>
        </div>
      </div>
    );
  }
}

// material-ui config
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default withStyles(tabsLayoutStyles)(TabsLayout);
