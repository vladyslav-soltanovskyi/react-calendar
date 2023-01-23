export const getOptionIndx = (times: [string, string][], selectedTime: string) => {
  for (let i = 0; i < times.length; i++) {
    const [prevHours, prevMins] = times[i - 1] ?? [];
    const [nextHours, nextMins] = times[i];
    const [selectedHours, selectedMins] = selectedTime.split(':');

    if (prevHours === undefined && prevMins === undefined) {
      if (nextHours === selectedHours && nextMins === selectedMins) {
        return i;
      }
    }

    if (nextHours === selectedHours && nextMins === selectedMins) {
      return i;
    }

    if (
      (+prevHours <= +selectedHours && +selectedHours <= +nextHours)
      &&
      (+prevMins <= +selectedMins && +selectedMins <= +nextMins)
    ) {
      return i - 0.5;
    }

  }
  return -1;
}

export const parseTimeString = (timeValue: string) => {
  const timeStr = timeValue.replace(/\D+/gi, '');
    let hours = +timeStr.slice(0, 2) % 24;
    let mins = +timeStr.slice(2, 4).padEnd(2, '0');

    if (mins === 60) {
      hours++;
    }

    const valueHours = hours.toString().padStart(2, '0');
    const valueMins = (mins % 60).toString().padStart(2, '0');
    const time = `${valueHours}:${valueMins}`;
    
    return {
      time,
      valueHours,
      valueMins
    }
}