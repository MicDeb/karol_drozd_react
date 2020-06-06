import React from 'react';
import { Link } from 'react-router-dom';
import { facebookIcon } from "../../icons/facebook.svg";
import { instagramIcon } from "../../icons/instagram.svg";
import { youTubeIcon } from "../../icons/youtube.svg";

export function Navigation() {
    const navItems = [
        {
            href: '/',
            title: 'Strona główna',
        },
        {
            href: '/biografia',
            title: 'Biografia',
        },
        {
            href: '/kalendarz',
            title: 'Kalendarz',
        },
        {
            href: '/galeria',
            title: 'Galeria',
        },
        {
            href: '/portfolio',
            title: 'Portfolio',
        },
        {
            href: '/kontakt',
            title: 'Kontakt',
        },
    ];

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
            icon: youTubeIcon,
        },
    ];

    return (
        <header className="header">
            <h1>Karol Drozd</h1>
            <div className="header__container">
                <div className="page-logo">
                    <strong className="page-logo--title">Karol Drozd</strong>
                    <strong className="page-logo--sub-title">aktor - tancerz - wokalista</strong>
                </div>

                <nav className="main-navigation">
                    <div className="main-navigation__hamburger">
                        <i></i><i></i><i></i>
                    </div>
                    <ul className="main-navigation__list">
                        {navItems.map((navItem) => (
                            <li className="main-navigation__list--item" key={navItem.title}>
                                <Link to={navItem.href} className="main-navigation__list--link">
                                    {navItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="social-media-container">
                    {socialMediaNavItems.map((item) => (
                        <a href={item.href} key={item.href}>
                            {item.icon}
                        </a>
                    ))}
                    <div className="line"></div>
                </div>
            </div>
        </header>
    );
}
