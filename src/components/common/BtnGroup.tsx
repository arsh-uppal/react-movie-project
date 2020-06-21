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
  btnSelected: string;
  handleBtnClick: (contentFor: string, contentCategory: any) => void;
}

export interface BtnGroupState {}

class BtnGroup extends React.Component<BtnGroupProps, BtnGroupState> {
  constructor(props: BtnGroupProps) {
    super(props);
    this.state = {};
  }

  render() {
    const {classes} = this.props;
    return (
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
        className={classes.btnGroup}>
        {this.props.btnTypes.map((btn, index) => {
          return (
            <Button
              key={index}
              onClick={() =>
                this.props.handleBtnClick(btn, this.props.contentType)
              }
              className={
                this.props.btnSelected === btn ? classes.btnSelected : ''
              }>
              {btn}
            </Button>
          );
        })}
      </ButtonGroup>
    );
  }
}

export default withStyles(btnGroupStyles)(BtnGroup);
