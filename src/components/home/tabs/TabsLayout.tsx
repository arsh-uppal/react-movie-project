import React from 'react';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Skeleton from '@material-ui/lab/Skeleton';
import {withStyles, WithStyles} from '@material-ui/core';

// componenets
import ResultCards from './cards/ResultCards';

// styles
import tabsLayoutStyles from './tabsLayoutStyles';

export interface TabsLayoutProps extends WithStyles<typeof tabsLayoutStyles> {
  getMovies: (query: string) => void;
  getTv: (query: string) => void;
  dataStore: any;
}

export interface TabsLayoutState {
  value: number;
  nowPlayingMSelected: boolean;
  popularMSelected: boolean;
  topRatedMSelected: boolean;
  upComingMSelected: boolean;
  airingTodayTSelected: boolean;
  onTheAirTSelected: boolean;
  popularTSelected: boolean;
  topRatedTSelected: boolean;
}

class TabsLayout extends React.Component<TabsLayoutProps, TabsLayoutState> {
  constructor(props: TabsLayoutProps) {
    super(props);
    this.state = {
      value: 0,
      nowPlayingMSelected: true,
      popularMSelected: false,
      topRatedMSelected: false,
      upComingMSelected: false,
      airingTodayTSelected: true,
      onTheAirTSelected: false,
      popularTSelected: false,
      topRatedTSelected: false,
    };
  }

  // **********************************************//
  // ************ BEGINING OF  ACTIONS ************//
  // **********************************************//

  // tabs
  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({value: newValue});
  };

  handleMovieBtnClick(query: string, selectedBtn: string): void {
    this.setState((prevState) => {
      return {
        ...prevState,
        nowPlayingMSelected: false,
        popularMSelected: false,
        topRatedMSelected: false,
        upComingMSelected: false,
        [selectedBtn]: true,
      };
    });
    this.props.getMovies(query);
  }

  handleTvBtnClick(query: string, selectedBtn: string): void {
    this.setState((prevState) => {
      return {
        ...prevState,
        airingTodayTSelected: false,
        onTheAirTSelected: false,
        popularTSelected: false,
        topRatedTSelected: false,
        [selectedBtn]: true,
      };
    });
    this.props.getTv(query);
  }

  // **********************************************//
  // ************** END OF ACTIONS ****************//
  // **********************************************//

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.mainContainer}>
        <AppBar position="static" className={classes.tabsBar}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="Tabs">
            <Tab label="MOVIES" {...a11yProps(0)} />
            <Tab label="SEARCH" {...a11yProps(1)} />
            <Tab label="TV" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <div></div>
        <div className={classes.tabPanelContainer}>
          <TabPanel value={this.state.value} index={0}>
            <div className={classes.btnGroupContainer}>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
                className={classes.btnGroup}>
                <Button
                  onClick={() =>
                    this.handleMovieBtnClick(
                      'now_playing',
                      'nowPlayingMSelected',
                    )
                  }
                  className={
                    this.state.nowPlayingMSelected
                      ? classes.btnSelected
                      : classes.btn
                  }>
                  Now playing
                </Button>
                <Button
                  onClick={() =>
                    this.handleMovieBtnClick('popular', 'popularMSelected')
                  }
                  className={
                    this.state.popularMSelected
                      ? classes.btnSelected
                      : classes.btn
                  }>
                  Popular
                </Button>
                <Button
                  onClick={() =>
                    this.handleMovieBtnClick('top_rated', 'topRatedMSelected')
                  }
                  className={
                    this.state.topRatedMSelected
                      ? classes.btnSelected
                      : classes.btn
                  }>
                  Top Rated
                </Button>
                <Button
                  onClick={() =>
                    this.handleMovieBtnClick('upcoming', 'upComingMSelected')
                  }
                  className={
                    this.state.upComingMSelected
                      ? classes.btnSelected
                      : classes.btn
                  }>
                  Upcoming
                </Button>
              </ButtonGroup>
            </div>

            {this.props.dataStore.isLoading ? (
              <div className={classes.loadingSkel}>
                <Skeleton variant="text" width={210} height={40} />
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="rect" width={210} height={118} />
              </div>
            ) : (
              <ResultCards cardsData={this.props.dataStore.movies} />
            )}
          </TabPanel>
          <TabPanel value={this.state.value} index={1}>
            b
          </TabPanel>
          <TabPanel value={this.state.value} index={2}>
            <div className={classes.btnGroupContainer}>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
                className={classes.btnGroup}>
                <Button
                  onClick={() =>
                    this.handleTvBtnClick(
                      'airing_today',
                      'airingTodayTSelected',
                    )
                  }
                  className={
                    this.state.airingTodayTSelected
                      ? classes.btnSelected
                      : classes.btn
                  }>
                  AIRING TODAY
                </Button>
                <Button
                  onClick={() =>
                    this.handleTvBtnClick('on_the_air', 'onTheAirTSelected')
                  }
                  className={
                    this.state.onTheAirTSelected
                      ? classes.btnSelected
                      : classes.btn
                  }>
                  ON THE AIR
                </Button>
                <Button
                  onClick={() =>
                    this.handleTvBtnClick('popular', 'popularTSelected')
                  }
                  className={
                    this.state.popularTSelected
                      ? classes.btnSelected
                      : classes.btn
                  }>
                  POPULAR
                </Button>
                <Button
                  onClick={() =>
                    this.handleTvBtnClick('top_rated', 'topRatedTSelected')
                  }
                  className={
                    this.state.topRatedTSelected
                      ? classes.btnSelected
                      : classes.btn
                  }>
                  TOP RATED
                </Button>
              </ButtonGroup>
            </div>
            {this.props.dataStore.isLoading ? (
              <div className={classes.loadingSkel}>
                <Skeleton variant="text" width={210} height={40} />
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="rect" width={210} height={118} />
              </div>
            ) : (
              <ResultCards cardsData={this.props.dataStore.tv} />
            )}
          </TabPanel>
        </div>
      </div>
    );
  }
}

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
          <Typography>{children}</Typography>
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
