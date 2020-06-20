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

export interface SearchPanelProps
  extends WithStyles<typeof searchPanelStyles> {}

export interface SearchPanelState {
  value: string;
}

class SearchLayout extends React.Component<SearchPanelProps, SearchPanelState> {
  constructor(props: SearchPanelProps) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.FormEvent<EventTarget>): void {
    let target = event.target as HTMLInputElement;
    this.setState({value: target.value});
  }

  handleSubmit(event: React.FormEvent<EventTarget>): void {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

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
            value={this.state.value}
            required
            className={classes.searchInp}
            onChange={this.handleChange}
          />

          <Select
            value={SEARCH_FILTER_OPTIONS[0]}
            displayEmpty
            className={classes.searchTyp}
            inputProps={{'aria-label': 'Without label'}}>
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
