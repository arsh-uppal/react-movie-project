import React from 'react';

// material-ui
import {WithStyles, withStyles} from '@material-ui/core';

// components
import ResultCardLayout from './ResultCardLayout';

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

  // **********************************************//
  // ************ BEGINING OF  ACTIONS ************//
  // **********************************************//

  loadCard(cardsData: any) {
    return cardsData.map((cardData: any) => {
      return (
        <span style={{padding: 8}} key={cardData.id}>
          <ResultCardLayout cardData={cardData} />
        </span>
      );
    });
  }

  // **********************************************//
  // ************** END OF ACTIONS ****************//
  // **********************************************//

  render() {
    const {classes} = this.props;
    const cardsData = this.props.cardsData;

    return (
      <div className={classes.root}>
        {cardsData.length > 0 ? this.loadCard(cardsData) : 'NO DATA'}
      </div>
    );
  }
}

export default withStyles(resultCardsStyles)(ResultCards);
