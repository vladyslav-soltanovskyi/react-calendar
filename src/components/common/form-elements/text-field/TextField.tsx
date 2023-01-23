import React, { forwardRef, MouseEvent, useImperativeHandle, useRef } from 'react'
import { IFieldProps } from '../types';
import cn from 'classnames'

import styles from './text-field.module.scss';

const TextField = forwardRef<HTMLInputElement, IFieldProps>(({
  error,
  type = 'text',
  style,
  className = '',
  isShowError = true,
  fullWidth = false,
  onClick,
  ...rest
}, ref) => {
  const inputRef = useRef<HTMLInputElement>();
  
  useImperativeHandle(ref, () => inputRef.current!, [inputRef])
  
  const handleClick = (e) => {
    inputRef.current.focus();
    onClick?.(e);
  }

  const onClickInput = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onClick?.(e);
  }
  
  return (
    <div
      className={cn(styles.text__field__container, {
        [styles.text__field__container_full]: fullWidth
      })}
      style={style}
    >
      <div
        className={styles.text__field__input}
        onClick={handleClick}
      >
        <input
          className={cn(styles.text__field, className, {
            [styles.text__field_error]: !!error,
            [styles.text__field_full]: fullWidth
          })}
          type={type}
          ref={inputRef}
          onClick={onClickInput}
          {...rest}
        />
        <div className={styles.bottom__line}></div>
      </div>
      {(error && isShowError) && (
        <div className={styles.text__field__error__text}>{error}</div>
      )}
    </div>
  )
});

TextField.displayName = 'TextField'

export default TextField
