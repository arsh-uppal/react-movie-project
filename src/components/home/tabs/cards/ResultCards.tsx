import React from 'react';

// material-ui
import {WithStyles, withStyles} from '@material-ui/core';

// components
import ResultCardLayout from './ResulatCardLayout';

// styles
import resultCardsStyles from './resultCardsStyles';

export interface ResultCardsProps extends WithStyles<typeof resultCardsStyles> {
  cardsData: any;
}

export interface ResultCardsState {}

class ResultCards extends React.Component<ResultCardsProps, ResultCardsState> {
  constructor(props: ResultCardsProps) {
    super(props);
    this.state = {};
  }

  loadCard(cardsData: any) {
    return cardsData.map((cardData: any) => {
      return (
        <span style={{padding: 8}}>
          <ResultCardLayout cardData={cardData} />
        </span>
      );
    });
  }

  render() {
    const {classes} = this.props;
    const cardsData = this.props.cardsData;

    return (
      <div className={classes.root}>
        {cardsData.length > 0 ? this.loadCard(cardsData) : 'no data'}
      </div>
    );
  }
}

export default withStyles(resultCardsStyles)(ResultCards);
