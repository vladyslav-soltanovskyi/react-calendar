import React, { FC } from 'react';

import './sidebar.scss';

const Sidebar: FC = () => {
  const hours = Array(24)
    .fill(0)
    .map((_, index) => index);
    
  return (
    <div className="calendar__time-scale">
      {hours.map((hour) => (
        <div className="time-slot" key={hour}>
          <span className="time-slot__time">{`${hour}:00`}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
