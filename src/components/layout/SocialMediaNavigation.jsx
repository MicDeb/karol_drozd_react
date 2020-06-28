import React from 'react';

const socialMediaNavItems = [
  {
    href: 'https://www.facebook.com/karol.drozd94/',
    title: 'Facebook',
    icon: require('../../icons/facebook.svg'),
  },
  {
    href: 'https://www.instagram.com/karol.drozd/',
    title: 'Instagram',
    icon: require('../../icons/instagram.svg'),
  },
  {
    href: 'https://www.youtube.com/channel/UCfuWSBOXikmVi1S6H_KM9eA',
    title: 'Youtube',
    icon: require('../../icons/youtube.svg'),
  },
];

export function SocialMediaNavigation() {
  return (
    <div className="social-media-container">
      {socialMediaNavItems.map((item) => (
        <a href={item.href} key={item.href}>
          <img src={item.icon} className='social-media-icon' />
        </a>
      ))}
      <div className="line"></div>
    </div>
  )
}