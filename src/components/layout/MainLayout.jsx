import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Navigation } from './Navigation';
import { SocialMediaNavigation } from './SocialMediaNavigation';


export function MainLayout(props) {
  const {
    children: scene,
  } = props;

  let mainClass = 'main';
  if (scene.props.location.pathname === '/') {
    mainClass = clsx(mainClass, 'main-home');
  }

  return (
    <>
      <Navigation parent={scene.props.parent} />

      <div className={mainClass}>
        {scene}
      </div>

      <SocialMediaNavigation />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
