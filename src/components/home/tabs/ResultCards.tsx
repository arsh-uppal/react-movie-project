import React from 'react';

// components
import ResultCardLayout from './ResulatCardLayout';

export interface ResultCardsProps {
  cardsData: any;
}

export interface ResultCardsState {}

class ResultCards extends React.Component<ResultCardsProps, ResultCardsState> {
  constructor(props: ResultCardsProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.cardsData.length > 0 ? (
          <ResultCardLayout cardData={this.props.cardsData} />
        ) : (
          'no data'
        )}
      </div>
    );
  }
}

export default ResultCards;
