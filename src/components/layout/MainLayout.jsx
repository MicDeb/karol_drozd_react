import React from 'react';
import { Navigation } from './Navigation';
import { SocialMediaNavigation } from './SocialMediaNavigation';


export function MainLayout(props) {
    const {
        children: scene,
    } = props;

    return (
        <div className='layout'>
            <Navigation parent={scene.props.parent} />

            {scene}

            <SocialMediaNavigation />
        </div>
    );
}
