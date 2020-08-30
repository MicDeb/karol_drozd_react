import React from 'react';
import Helmet from 'react-helmet';
import { CalendarTable } from './CalendarTable';
import { events } from './eventsNew';

export function Calendar() {
  return (
    <>
      <Helmet>
        <title>KALENDARZ | Karol Drozd</title>
      </Helmet>
      <div className='main-container calendar'>
        <h3 className='calendar__title'>KALENDARZ</h3>
        <div className='calendar'>
          <CalendarTable
            eventsByYears={events}
          />
        </div>
      </div>
    </>
  );
}