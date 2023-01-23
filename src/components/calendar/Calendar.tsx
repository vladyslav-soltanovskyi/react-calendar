import React, { FC } from 'react';
import { useCalendar } from 'hooks/useCalendar';
import WeekCalendar from './components/week-calendar/WeekCalendar';
import Header from 'components/common/header/Header';
import YearCalendar from './components/year-calendar/YearCalendar';
import MonthCalendar from './components/month-calendar/MonthCalendar';

import './calendar.scss';

interface ICalendarProps {
}

const Calendar: FC<ICalendarProps> = ({  }) => {
  const { state, functions } = useCalendar({ selectedDate: new Date() });

  return (
    <>
      <Header
        onClickArrow={functions.onClickArrow}
        displayedDate={state.displayedDate}
        onChangeOption={functions.setMode}
        selectedOption={state.mode}
        selectedDay={state.selectedDay}
      />
      <section className="calendar">
        {state.mode === 'year' && (
          <YearCalendar
            selectedDay={state.selectedDay}
            selectedMonth={state.selectedMonth}
            monthesNames={state.monthesNames}
            weekDaysNames={state.weekDaysNames}
            calendarDaysOfYear={state.calendarDaysOfYear}
            onChangeState={functions.onChangeState}
          />
        )}
        
        {state.mode === 'month' && (
          <MonthCalendar
            weekDaysNames={state.weekDaysNames}
            calendarDaysOfMonth={state.calendarDaysOfMonth}
            selectedMonth={state.selectedMonth}
            onClickArrow={functions.onClickArrow}
          />
        )}
        
        {state.mode === 'week' && (
          <WeekCalendar
            weekDays={state.weekDays}
            weekDaysNames={state.weekDaysNames}
          />
        )}
        
      </section>
    </>
  );
}

export default Calendar;
