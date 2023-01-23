import React, { FC } from "react";
import { IEvent } from "types/event";
import { IMonthDay } from "types/date";
import cn from "classnames";
import LongEvent from "components/common/long-event/LongEvent";
import { useModal } from "hooks/useModal";
import { getStyledForLongEvent } from "utils/helpers";

import styles from './long-event-slot.module.scss';

interface ILongEventSlotProps {
  isEventsEmpty: boolean;
  dayEvents: IEvent[];
  weekDays: IMonthDay[];
  day: IMonthDay;
  dayEventsPositionY: string[];
  slotHeight?: number;
}

const LongEventSlot: FC<ILongEventSlotProps> = ({
  isEventsEmpty,
  dayEvents,
  weekDays,
  day,
  dayEventsPositionY,
  slotHeight
}) => {
  const { openModalCreate } = useModal();

  const handleOpenmodalCreateEvent = () => {
    openModalCreate({ selectedDate: day.date, type: 'long-event' })
  }

  const slotStyle = { height: `${slotHeight}px` };
  
  return (
    <div
      className={cn(styles.event__slot, {
        [styles.event__slot_empty]: isEventsEmpty
      })}
      style={slotStyle}
      onClick={handleOpenmodalCreateEvent}
    >
      {dayEvents.map((event) => {
        const { width, isShowEvent, isMovingFromPrev, isMovingToNext } = getStyledForLongEvent(weekDays, day, event);

        const top = dayEventsPositionY.indexOf(event.id) * 24;

        return (
          <LongEvent
            key={event.id}
            event={event}
            width={width}
            top={top}
            color={event.color}
            isShowEvent={isShowEvent}
            isMovingToNext={isMovingToNext}
            isMovingFromPrev={isMovingFromPrev}
          />
        )
      })}
    </div>
  );
}

export default LongEventSlot;