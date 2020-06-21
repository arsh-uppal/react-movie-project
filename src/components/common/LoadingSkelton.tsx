import React from 'react';
// material-ui
import Skeleton from '@material-ui/lab/Skeleton';

export interface LoadingSkeltonProps {}

const LoadingSkelton: React.SFC<LoadingSkeltonProps> = () => {
  return (
    <>
      <Skeleton variant="text" width={210} height={40} />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />{' '}
    </>
  );
};

export default LoadingSkelton;
