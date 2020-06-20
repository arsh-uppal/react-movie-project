import React from 'react';

// material-ui
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {withStyles, WithStyles} from '@material-ui/core';

// styles
import btnGroupStyles from './btnGroupStyles';

export interface BtnGroupProps extends WithStyles<typeof btnGroupStyles> {
  btnTypes: Array<string>;
  contentType: string;
  fetchInfo: (query: string, type: any) => void;
}

export interface BtnGroupState {}

class BtnGroup extends React.Component<BtnGroupProps, BtnGroupState> {
  constructor(props: BtnGroupProps) {
    super(props);
    this.state = {};
  }

  // **********************************************//
  // ************ BEGINING OF  ACTIONS ************//
  // **********************************************//

  handleBtnClick = (btn: string, contentType: string) => {
    this.props.fetchInfo(btn, contentType);
  };

  // **********************************************//
  // ************** END OF ACTIONS ****************//
  // **********************************************//

  render() {
    const {classes} = this.props;
    return (
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
        className={classes.btnGroup}>
        {this.props.btnTypes.map((btn) => {
          return (
            <Button
              onClick={() => this.handleBtnClick(btn, this.props.contentType)}>
              {btn}
            </Button>
          );
        })}
      </ButtonGroup>
    );
  }
}

export default withStyles(btnGroupStyles)(BtnGroup);
