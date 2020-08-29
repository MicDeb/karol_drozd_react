import React from 'react';
import { Navigation } from './Navigation';
import { SocialMediaNavigation } from './SocialMediaNavigation';
import clsx from "clsx";


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
