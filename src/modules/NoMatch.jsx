import React from 'react';
import { Redirect } from 'react-router-dom';

const NoMatch = () => {
  return (
    <>
      <Redirect to={`/`} />
    </>
  );
};

NoMatch.displayName = 'NoMatch';

export default NoMatch;
