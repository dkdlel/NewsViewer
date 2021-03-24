import React from 'react';
import { Route } from 'react-router-dom';
/* Library */

import LoadingContainer from './containers/assets/LoadingContainer';
/* Container */

import NewsPage from './pages/NewsPage';
/* Pages */

const App = () => {
  return (
    <>
      <Route path="/:category?" component={NewsPage} />
      <LoadingContainer />
    </>
  );
};

export default App;