import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './router/routes';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
      <ErrorBoundary>
        <Router>
          {routes}
        </Router>
      </ErrorBoundary>
  );
}

export default App;
