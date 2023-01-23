import React, { FC } from 'react';

import styles from './sidebar.module.scss';

const Sidebar: FC = () => {
  const hours = Array(24)
    .fill(0)
    .map((_, index) => index);
    
  return (
    <div className={styles.time__scale}>
      {hours.map((hour) => {
        const formattedHour = hour.toString().padStart(2, '0');
        return (
          <div
            className={styles.time__slot}
            key={hour}
          >
            <span className={styles.time__slot__time}>
              {hour > 0 && `${formattedHour}:00`}
            </span>
          </div>
        )
      })}
    </div>
  );
};

export default Sidebar;
