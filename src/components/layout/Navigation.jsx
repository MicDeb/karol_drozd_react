import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
} from 'react-bootstrap';
import clsx from 'clsx';

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

export function Navigation() {
  const [isNavOpen, setNavOpen] = useState(0);

  const toggleNavOpen = () => {
    setNavOpen((state) => state + 1);
  };

  let navAnimationClass = 'main-navigation__list';
  let hamburgerClass = 'main-navigation__hamburger';

  if (isNavOpen) {
    if (isNavOpen % 2 !== 0) {
      navAnimationClass = clsx(navAnimationClass, 'navigation-animation-in');
      hamburgerClass = clsx(hamburgerClass, 'active');
    } else {
      navAnimationClass = clsx(navAnimationClass, 'navigation-animation-out');
      hamburgerClass = clsx(hamburgerClass);
    }
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='page-logo'>
          <strong className='page-logo__title'>Karol Drozd</strong>
          <div className='page-logo__professions'>
            <strong className='page-logo__professions--item'>aktor</strong>
            <strong className='page-logo__professions--item'>tancerz</strong>
            <strong className='page-logo__professions--item'>wokalista</strong>
          </div>
        </div>

        <nav className='main-navigation'>
          <Button
            variant='link'
            onClick={toggleNavOpen}
          >
            <div className={hamburgerClass}>
              <i />
              <i />
              <i />
            </div>
          </Button>

          <ul className={navAnimationClass}>
            {navItems.map((navItem) => (
              <li className='main-navigation__list--item' key={navItem.title}>
                <Link
                  to={navItem.href}
                  className='main-navigation__list--link'
                  onClick={() => setNavOpen(0)}
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='header__line' />
    </header>
  );
}
