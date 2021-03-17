import React from 'react';
import { Route } from 'react-router-dom';
/* Library */

import NewsPage from './pages/NewsPage';
/* Pages */

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;