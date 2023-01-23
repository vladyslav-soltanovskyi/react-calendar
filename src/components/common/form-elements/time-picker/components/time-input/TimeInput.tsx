import React, { ChangeEvent, FC, KeyboardEvent, useRef } from "react";
import TextField from "components/common/form-elements/text-field/TextField";
import { IFieldProps } from "components/common/form-elements/types";
import { useThrottle } from "hooks/index";
import { getOptionIndx, parseTimeString } from "../../helpers";

import styles from './time-input.module.scss';

interface ITimeInputProps extends IFieldProps {
  timeValue: string;
  times: [string, string][];
  selectedOptionId: number;
  setTimeValue: (timeValue: string) => void;
  onSelectTime: (hours: string, mins: string, withClose?: boolean) => void;
  setSelectedOptionId: (optionindx: number) => void;
  scrollToOption: (optiondId?: number) => void;
  selectTime: (time: string) => void;
  openOptions: () => void;
  closeOptions: () => void;
}

const keyboardDelay = 40;

const TimeInput: FC<ITimeInputProps> = ({
  error,
  timeValue,
  times,
  selectedOptionId,
  setTimeValue,
  setSelectedOptionId,
  scrollToOption,
  openOptions,
  closeOptions,
  selectTime,
  onFocus
}) => {

  const inputRef = useRef<HTMLInputElement>();
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { time } = parseTimeString(e.target.value);
    const optionIndx = getOptionIndx(times, time);

    setTimeValue(e.target.value);
    setSelectedOptionId(optionIndx);
  }

  const parseTimeValue = () => {
    const { time } = parseTimeString(timeValue);
    selectTime(time);
    closeOptions();
  }

  const changeDateByDirection = (direction: 'up' | 'down') => {
    let newIndx: number;

    if (direction === 'down') {
      newIndx = Number.isInteger(selectedOptionId)
        ? (selectedOptionId + 1) % times.length
        : Math.ceil(selectedOptionId);
    }
    
    if (direction === 'up') {
      if (Number.isInteger(selectedOptionId)) {
        newIndx = (selectedOptionId - 1) >= 0 ? (selectedOptionId - 1) : times.length - 1;
      } else {
        newIndx = Math.floor(selectedOptionId);
      }
    }
    const [hours, mins] = times[newIndx];
    const time = `${hours}:${mins}`;
    selectTime(time);
    scrollToOption(newIndx);
  }

  const onKeyDown = useThrottle((e: KeyboardEvent<HTMLInputElement>) => {
    switch(e.key) {
      case 'Enter': {
        inputRef.current.blur();
        break;
      }
      case 'ArrowDown': {
        e.preventDefault();
        changeDateByDirection('down');
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        changeDateByDirection('up');
        break;
      }
    }
  }, keyboardDelay)

  return (
    <TextField
      className={styles.input}
      onClick={openOptions}
      onKeyDown={onKeyDown}
      onBlur={parseTimeValue}
      onChange={onChange}
      onFocus={onFocus}
      value={timeValue}
      ref={inputRef}
      error={error}
      isShowError={false}
      fullWidth
    />
  );
}

export default TimeInput;