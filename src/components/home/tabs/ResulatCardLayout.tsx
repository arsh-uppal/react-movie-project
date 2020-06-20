import React from 'react';

// api
import {IMAGE_URL} from '../../../config/apiConfig';

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

export interface ResultCardLayoutState {}

class ResultCardLayout extends React.Component<
  ResultCardLayoutProps,
  ResultCardLayoutState
> {
  constructor(props: ResultCardLayoutProps) {
    super(props);
    this.state = {};
  }

  render() {
    const {classes} = this.props;
    const {title, poster_path} = this.props.cardData[0];

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={IMAGE_URL + poster_path}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {title}
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(resultCardLayoutStyles)(ResultCardLayout);
