import React from "react";
import { CalendarTable } from "./CalendarTable";
import { events } from "./eventsNew";

export function Calendar() {
    return (
        <div className="main-container calendar">
          <h3 className="calendar__title">KALENDARZ</h3>
            <div className="calendar">
                <CalendarTable
                    eventsByYears={events}
                />
            </div>
        </div>
    )
}