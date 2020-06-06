import React from 'react';
import { Route } from 'react-router-dom';

export default function (props) {
  const {
    component: Scene,
    layout: Layout,
    hideNavigation,
    parent,
    adminPage,
    location,
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
