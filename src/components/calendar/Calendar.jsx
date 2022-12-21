import React, { useEffect } from 'react';
import propTypes from "prop-types";
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { useEventsStore } from '../../hooks';
import api from "../../gateway/events";

import './calendar.scss';

const Calendar = ({ weekDates }) => {
  const { events, dispatch, setEvents } = useEventsStore();
  
  useEffect(() => {
    api.getEvents()
      .then((eventsData) => {
        dispatch(setEvents(eventsData));
      })
  }, []);

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={events} />
        </div>
      </div>
    </section>
  );
}

Navigation.propTypes = {
  weekDates: propTypes.arrayOf(propTypes.instanceOf(Date))
}

export default Calendar;
