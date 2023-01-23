import React, { ChangeEvent, forwardRef, KeyboardEvent, useImperativeHandle, useRef } from 'react'
import TextField from 'components/common/form-elements/text-field/TextField';
import { IFieldProps } from 'components/common/form-elements/types';
import { formatDate, shmoment, translationFromStringToDate } from 'utils/date';
import { getTextWidthFromInput } from '../../helpers';

import styles from './date-input.module.scss';

interface IDateInputProps extends IFieldProps {
  dateValue: string;
  locale: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
  openMiniCalendar: () => void;
  closeMiniCalendar: () => void;
  setDateValue: (value: string) => void;
  setIsTyping: (isTyping: boolean) => void;
  handleChangeWidthPicker: (valueLength: number) => void;
}

const DateInput = forwardRef<HTMLInputElement, IDateInputProps>(({
  dateValue,
  locale,
  selectedDate,
  selectDate,
  openMiniCalendar,
  closeMiniCalendar,
  setDateValue,
  setIsTyping,
  handleChangeWidthPicker,
  onFocus,
  error,
  ...rest
}, ref) => {
  const inputRef = useRef<HTMLInputElement>();
  
  useImperativeHandle(ref, () => inputRef.current!, [inputRef])

  const changeDateValue = (dateValue: string) => {
    const newDate = translationFromStringToDate(dateValue, locale);
    setIsTyping(true);
    setDateValue(dateValue);

    if (!!newDate) {
      return selectDate(newDate);
    }
  }
  
  const formatDateValue = () => {
    const formatedDate = formatDate(selectedDate, 'DDDD, DD MMMM YYYY', locale);
    setDateValue(formatedDate);
    setIsTyping(false);
    handleChangeWidthPicker(
      getTextWidthFromInput(formatedDate, inputRef.current),
    );
  }

  const onChangeDateValue = (e: ChangeEvent<HTMLInputElement>) => changeDateValue(e.target.value);

  const changeDateByDirection = (direction: 'up' | 'down') => {
    const newDate = shmoment(selectedDate).add('days', (direction === 'up') ? -1 : 1).result();
    selectDate(newDate);
  }
  
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch(e.key) {
      case 'Enter': {
        formatDateValue();
        closeMiniCalendar();
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
  }

  return (
    <TextField
        value={dateValue}
        onFocus={onFocus}
        onChange={onChangeDateValue}
        onKeyDown={onKeyDown}
        onBlur={formatDateValue}
        onClick={openMiniCalendar}
        className={styles.date__input}
        error={error}
        isShowError={false}
        fullWidth
        ref={inputRef}
        {...rest}
      />
  )
});

DateInput.displayName = 'DateInput';

export default DateInput;