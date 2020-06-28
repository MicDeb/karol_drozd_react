import React from 'react';
import { Navigation } from './Navigation';
import { SocialMediaNavigation } from './SocialMediaNavigation';


export function MainLayout(props) {
    const {
        children: scene,
    } = props;

    return (
        <>
            <Navigation parent={scene.props.parent} />
            <div className='main'>
                {scene}
            </div>

            <SocialMediaNavigation />
        </>
    );
}
