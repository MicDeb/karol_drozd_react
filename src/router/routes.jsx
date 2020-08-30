import React from 'react';
import { Switch } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';

// import NotFound from '@pages/not-found';
import { Home } from '../components/Home';
import { Calendar } from '../components/calendar/Calendar';
import { Contact } from '../components/Contact';
import { Gallery } from '../components/gallery/Gallery';
import { Portfolio } from '../components/portfolio/Portfolio';
import { Bio } from '../components/Bio';


import AppRoute from './app-router';

const routes = (
  <Switch>
    <AppRoute
      layout={MainLayout}
      exact
      path='/'
      component={Home}
      parent='home'
    />

    <AppRoute
      layout={MainLayout}
      exact
      path='/kalendarz'
      component={Calendar}
      parent='calendar'
    />

    <AppRoute
      layout={MainLayout}
      exact
      path='/kontakt'
      component={Contact}
      parent='contact'
    />

    <AppRoute
      exact
      path='/galeria'
      layout={MainLayout}
      component={Gallery}
      parent='gallery'
    />

    <AppRoute
      exact
      path='/portfolio'
      layout={MainLayout}
      component={Portfolio}
      parent='portfolio'
    />

    <AppRoute
      exact
      path='/biografia'
      layout={MainLayout}
      component={Bio}
      parent='bio'
    />


    {/* <AppRoute */}
    {/*  layout={MainLayout} */}
    {/*  component={NotFound} */}
    {/* /> */}

  </Switch>
);

export default routes;
