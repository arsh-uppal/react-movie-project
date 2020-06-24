import React from 'react';

// material-ui
import {WithStyles, withStyles} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

// components
import ResultCardLayout from './ResultCardLayout';

// styles
import resultCardsStyles from './resultCardsStyles';

export interface ResultCardsProps extends WithStyles<typeof resultCardsStyles> {
  cardsData: any;
  fetchInfo: (
    contentFor: string,
    contentCategory: any,
    searchQuery?: string,
    pageNum?: number,
  ) => void;
  contentCategory: string;
  btnSelected: string;
  totalPages: number;
}

export interface ResultCardsState {
  currentPage: number;
  btnSelected: string;
}

class ResultCards extends React.Component<ResultCardsProps, ResultCardsState> {
  constructor(props: ResultCardsProps) {
    super(props);
    this.state = {
      currentPage: 1,
      btnSelected: this.props.btnSelected,
    };
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

  handlePageChange = (event: object, page: number) => {
    this.props.fetchInfo(
      this.props.btnSelected,
      this.props.contentCategory,
      undefined,
      page,
    );
    this.setState((prevState) => {
      return {
        ...prevState,
        currentPage: page,
      };
    });
  };

  //handles pagination chnaged between a button group
  componentDidUpdate() {
    if (this.state.btnSelected !== this.props.btnSelected) {
      this.setState({
        currentPage: 1,
        btnSelected: this.props.btnSelected,
      });
    }
  }

  // **********************************************//
  // ************** END OF ACTIONS ****************//
  // **********************************************//

  render() {
    const {classes} = this.props;
    const cardsData = this.props.cardsData;

    return (
      <div className={classes.root}>
        {cardsData.length > 0 ? (
          <>
            {this.loadCard(cardsData)}
            {this.props.totalPages > 1 ? (
              <div style={{display: 'block', width: '100%'}}>
                <div className={classes.paginationContainer}>
                  <Pagination
                    variant="outlined"
                    count={this.props.totalPages}
                    color="secondary"
                    className={classes.pagination}
                    onChange={this.handlePageChange}
                    size="large"
                    defaultPage={1}
                    page={this.state.currentPage}
                  />
                </div>
              </div>
            ) : (
              ''
            )}
          </>
        ) : (
          <span style={{color: 'white', fontWeight: 'bold'}}>NO DATA</span>
        )}
      </div>
    );
  }
}

export default withStyles(resultCardsStyles)(ResultCards);
