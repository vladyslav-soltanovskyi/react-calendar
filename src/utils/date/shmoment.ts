const getMethodsNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethodsNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

type TUnits = keyof typeof getMethodsNames;

class Shmoment {
  date: Date;
  constructor(date: Date) {
    this.date = date;
  }
  
  add(units: TUnits, value: number) {
    const currentUnitValue = this.date[getMethodsNames[units]]();
    this.date = new Date(
      this.date[setMethodsNames[units]](currentUnitValue + value)
    );
    return this;
  }

  set(units: TUnits, value: number) {
    this.date = new Date(
      this.date[setMethodsNames[units]](value)
    );
    return this;
  }


  subtract(units: TUnits, value: number) {
    return this.add(units, -value);
  }

  result() {
    return this.date;
  }
}

export const shmoment = (date: Date) => {
  let result = new Date(date);

  const calculator = new Shmoment(result);

  return calculator;
};
