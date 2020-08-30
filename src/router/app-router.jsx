import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function AppRoute(props) {
  const {
    component: Scene,
    layout: Layout,
    parent,
    ...routeProps
  } = props;

  return (
    <Route
      {...routeProps}
      render={(matchProps) => {
        if (Scene === undefined) {
          return null;
        }

        if (Layout === undefined) {
          return <Scene {...matchProps} />;
        }

        return (
          <Layout>
            <Scene {...matchProps} parent={parent} />
          </Layout>
        );
      }}
    />
  );
}

AppRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.func.isRequired,
  parent: PropTypes.string.isRequired,
};
