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
import BtnGroup from '../../common/BtnGroup';

// styles
import tabsLayoutStyles from './tabsLayoutStyles';

export interface TabsLayoutProps extends WithStyles<typeof tabsLayoutStyles> {
  fetchInfo: (query: string, type: any) => void;
  dataStore: any;
}

export interface TabsLayoutState {
  value: number;
}

class TabsLayout extends React.Component<TabsLayoutProps, TabsLayoutState> {
  constructor(props: TabsLayoutProps) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  // **********************************************//
  // ************ BEGINING OF  ACTIONS ************//
  // **********************************************//

  // tabs
  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({value: newValue});
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
              <BtnGroup
                btnTypes={['now_playing', 'popular', 'top_rated', 'upcoming']}
                contentType={'movies'}
                fetchInfo={this.props.fetchInfo}
              />
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
              <BtnGroup
                btnTypes={[
                  'airing_today',
                  'on_the_air',
                  'popular',
                  'top_rated',
                ]}
                contentType={'tv'}
                fetchInfo={this.props.fetchInfo}
              />
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
