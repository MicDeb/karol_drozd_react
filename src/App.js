import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Helmet from 'react-helmet';
import routes from './router/routes';
import ErrorBoundary from './ErrorBoundary';
import favicon from './images/favicon.png';

function App() {
  return (
    <>
      <Helmet>
        <title>Karol Drozd</title>
        <meta name='description' content='Karol Drozd - official website. Wokalista, aktor musicalowy, tancerz.' />
        <link
          rel='icon'
          sizes='32x32'
          type='image/png'
          href={favicon}
        />
      </Helmet>
      <ErrorBoundary>
        <Router>
          {routes}
        </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
