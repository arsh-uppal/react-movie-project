import React from 'react';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// componenets
import ResultCards from './ResultCards';

// styles
import TabLayoutStyles from './TabLayoutStyles';
import {withStyles, WithStyles} from '@material-ui/core';

export interface TabsLayoutProps extends WithStyles<typeof TabLayoutStyles> {
  getMovies: (query: string) => void;
  dataStore: any;
}

export interface TabsLayoutState {
  value: number;
  nowPlayingSelected: boolean;
  popularSelected: boolean;
  topRatedSelected: boolean;
  upComingSelected: boolean;
}

class TabsLayout extends React.Component<TabsLayoutProps, TabsLayoutState> {
  constructor(props: TabsLayoutProps) {
    super(props);
    this.state = {
      value: 0,
      nowPlayingSelected: true,
      popularSelected: false,
      topRatedSelected: false,
      upComingSelected: false,
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
        nowPlayingSelected: false,
        popularSelected: false,
        topRatedSelected: false,
        upComingSelected: false,
        [selectedBtn]: true,
      };
    });
    this.props.getMovies(query);
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
                      'nowPlayingSelected',
                    )
                  }
                  className={
                    this.state.nowPlayingSelected ? classes.btnSelected : ''
                  }>
                  Now playing
                </Button>
                <Button
                  onClick={() =>
                    this.handleMovieBtnClick('popular', 'popularSelected')
                  }
                  className={
                    this.state.popularSelected ? classes.btnSelected : ''
                  }>
                  Popular
                </Button>
                <Button
                  onClick={() =>
                    this.handleMovieBtnClick('top_rated', 'topRatedSelected')
                  }
                  className={
                    this.state.topRatedSelected ? classes.btnSelected : ''
                  }>
                  Top Rated
                </Button>
                <Button
                  onClick={() =>
                    this.handleMovieBtnClick('upcoming', 'upComingSelected')
                  }
                  className={
                    this.state.upComingSelected ? classes.btnSelected : ''
                  }>
                  Upcoming
                </Button>
              </ButtonGroup>
            </div>
            {this.props.dataStore.isLoading ? (
              'loading'
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
                <Button>Airing Today</Button>
                <Button>On the air</Button>
                <Button>Popular</Button>
                <Button>Top Rated</Button>
              </ButtonGroup>
            </div>
            c
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

export default withStyles(TabLayoutStyles)(TabsLayout);
