import React from 'react';
import facebookIcon from '../../images/icons/facebook.svg';
import instagramIcon from '../../images/icons/instagram.svg';
import youtubeIcon from '../../images/icons/youtube.svg';

const socialMediaNavItems = [
  {
    href: 'https://www.facebook.com/karol.drozd94/',
    title: 'Facebook',
    icon: facebookIcon,
  },
  {
    href: 'https://www.instagram.com/karol.drozd/',
    title: 'Instagram',
    icon: instagramIcon,
  },
  {
    href: 'https://www.youtube.com/channel/UCfuWSBOXikmVi1S6H_KM9eA',
    title: 'Youtube',
    icon: youtubeIcon,
  },
];

export function SocialMediaNavigation() {
  return (
    <div className='social-media-container'>
      <div className='line' />
      {socialMediaNavItems.map((item) => (
        <a href={item.href} key={item.href}>
          <img
            src={item.icon}
            className='social-media-icon'
            alt={item.title}
          />
        </a>
      ))}
    </div>
  );
}