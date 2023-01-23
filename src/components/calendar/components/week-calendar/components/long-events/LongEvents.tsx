import React, { FC } from "react";
import { IMonthDay } from "types/date";
import { IEvent } from "types/event";
import { getPositionYForWeekEvents, getSortedWeekEvents } from "utils/helpers";
import LongEventSlot from "../long-event-slot/LongEventSlot";

import styles from './long-events.module.scss';

interface ILongEventsProps {
  weekDays: IMonthDay[];
  events: IEvent[];
}

const LongEvents: FC<ILongEventsProps> = ({
  weekDays,
  events
}) => {
  const isEventsEmpty = events.length === 0;

  const { sortedWeekEvents, maxEventsInWeek } = getSortedWeekEvents(weekDays, events);

  const weekEventsPositionY = getPositionYForWeekEvents(sortedWeekEvents);

  const slotsHeight = maxEventsInWeek * 24;
  
  const longEventsStyle = {
    height: `${slotsHeight}px`,
    paddingRight: `${slotsHeight <= 96 ? 10 : 0}px`,
    overflow: slotsHeight === 0 ? 'inherit' : 'auto'
  }

  return (
    <div
      className={styles.long__events}
      style={longEventsStyle}
    >
      {sortedWeekEvents.map((dayEvents, indx) => {
        return (
          <LongEventSlot
            key={weekDays[indx].dayNumber}
            isEventsEmpty={isEventsEmpty}
            dayEvents={dayEvents}
            day={weekDays[indx]}
            weekDays={weekDays}
            dayEventsPositionY={weekEventsPositionY[indx]}
            slotHeight={slotsHeight}
          />
        )
      })}
    </div>
  );
}

export default LongEvents;