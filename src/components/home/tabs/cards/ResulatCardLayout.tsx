import React from 'react';

// api
import {IMAGE_URL} from '../../../../config/apiConfig';

// components
import PopOver from '../../../common/PopOver';

// material-ui
import {makeStyles, WithStyles, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

//styles
import resultCardLayoutStyles from './resultCardLayoutStyles';

export interface ResultCardLayoutProps
  extends WithStyles<typeof resultCardLayoutStyles> {
  cardData: any;
}

export interface ResultCardLayoutState {
  anchorEl: any;
}

class ResultCardLayout extends React.Component<
  ResultCardLayoutProps,
  ResultCardLayoutState
> {
  constructor(props: ResultCardLayoutProps) {
    super(props);
    this.state = {anchorEl: null};
  }

  handleClickPopOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClosePopOver = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {classes} = this.props;
    const {title, poster_path, name} = this.props.cardData;
    const open: boolean = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
      <>
        <Card className={classes.root}>
          <CardActionArea onClick={this.handleClickPopOver}>
            <CardMedia
              component="img"
              alt="movie or tv poster"
              image={IMAGE_URL + poster_path}
              title={title}
            />
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              className={classes.title}
              onClick={this.handleClickPopOver}>
              <span className={classes.titleSpan}>{title ? title : name}</span>
            </Button>
          </CardActions>
        </Card>
        <PopOver
          id={id}
          open={open}
          anchorEl={this.state.anchorEl}
          handleClose={this.handleClosePopOver}
          cardDetails={this.props.cardData}
        />
      </>
    );
  }
}

export default withStyles(resultCardLayoutStyles)(ResultCardLayout);
