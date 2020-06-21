import React from 'react';

// material-ui
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';

// styles
import popOverStyles from './popOverStyles';
import {withStyles, WithStyles} from '@material-ui/core';

export interface PopOverProps extends WithStyles<typeof popOverStyles> {
  id: any;
  open: boolean;
  anchorEl: any;
  handleClose: any;
  cardDetails: any;
}

export interface PopOverState {}

class PopOver extends React.Component<PopOverProps, PopOverState> {
  constructor(props: PopOverProps) {
    super(props);
    this.state = {};
  }
  render() {
    const {classes} = this.props;
    const {
      title,
      name,
      release_date,
      first_air_date,
      vote_average,
      vote_count,
      overview,
    } = this.props.cardDetails;
    return (
      <div>
        <Popover
          id={this.props.id}
          open={this.props.open}
          anchorEl={this.props.anchorEl}
          onClose={this.props.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          className={classes.popOverBackground}>
          <div className={classes.root} onClick={this.props.handleClose}>
            <Card className={classes.cardContainer} variant="outlined">
              <CardHeader
                className={classes.cardHeader}
                action={
                  <IconButton aria-label="settings">
                    <HighlightOffTwoToneIcon />
                  </IconButton>
                }
                title={title ? title : name}
                subheader={release_date ? release_date : first_air_date}
              />
              <CardContent>
                <Typography
                  className={classes.rating}
                  color="textSecondary"
                  gutterBottom>
                  <Rating
                    name="disabled"
                    defaultValue={parseFloat(vote_average)}
                    max={10}
                    disabled
                  />
                  <span style={{marginLeft: 4}}>
                    ({vote_count ? vote_count : 0})
                  </span>
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom>
                  Overview
                </Typography>
                <Typography variant="body2" component="p">
                  {overview}
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Popover>
      </div>
    );
  }
}

export default withStyles(popOverStyles)(PopOver);
