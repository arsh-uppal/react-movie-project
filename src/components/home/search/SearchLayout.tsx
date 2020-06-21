import React from 'react';

// material-ui
import {WithStyles, withStyles} from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// styles
import searchPanelStyles from './searchLayoutStyles';

// others
import {SEARCH_FILTER_OPTIONS} from './searchFilterOptions';

export interface SearchPanelProps extends WithStyles<typeof searchPanelStyles> {
  fetchInfo: (
    contentFor: string,
    contentCategory: string,
    searchQuery: string,
  ) => void;
  handleTabChange: (event: any, newValue: number) => void;
  setSearchMsg: (msg: string) => void;
}

export interface SearchPanelState {
  searchQuery?: string;
  searchType?: string;
}

class SearchLayout extends React.Component<SearchPanelProps, SearchPanelState> {
  constructor(props: SearchPanelProps) {
    super(props);
    this.state = {searchQuery: '', searchType: SEARCH_FILTER_OPTIONS[0]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // **********************************************//
  // ************ BEGINING OF  ACTIONS ************//
  // **********************************************//

  changeToSearchTab() {
    this.props.handleTabChange('', 1);
  }

  handleChange(event: React.FormEvent<EventTarget>): void {
    let target = event.target as HTMLInputElement;
    this.setState({[target.name]: target.value});
    if (
      this.state.searchQuery!.length >= 0 &&
      this.state.searchQuery!.length < 3
    ) {
      // if condition to stop too many re-render
      this.props.setSearchMsg('please intiate a search');
    }
  }

  handleSubmit(event: React.FormEvent<EventTarget>): void {
    event.preventDefault();
    this.changeToSearchTab();
    this.props.fetchInfo(
      this.state.searchType!,
      'search',
      this.state.searchQuery!,
    );
    this.props.setSearchMsg('');
  }

  // **********************************************//
  // ************** END OF ACTIONS ****************//
  // **********************************************//

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.mainContainer}>
        <form onSubmit={this.handleSubmit} className={classes.formContainer}>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchTwoToneIcon />
              </InputAdornment>
            }
            value={this.state.searchQuery}
            required
            className={classes.searchInp}
            onChange={this.handleChange}
            name="searchQuery"
            onClick={() => this.changeToSearchTab()}
          />

          <Select
            value={this.state.searchType}
            displayEmpty
            className={classes.searchTyp}
            inputProps={{'aria-label': 'Without label'}}
            onChange={this.handleChange}
            name="searchType">
            {SEARCH_FILTER_OPTIONS.map((element, index) => {
              return (
                <MenuItem key={index} value={element}>
                  {element}
                </MenuItem>
              );
            })}
          </Select>

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            value="Submit"
            className={classes.searchBtn}>
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(searchPanelStyles)(SearchLayout);
