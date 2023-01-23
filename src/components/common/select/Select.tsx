import React, { FC, useRef, useState } from "react";
import { useClickOutside } from "hooks/useClickOutside";
import SelectOption from "./components/select-option/SelectOption";
import cn from "classnames";

import styles from './select.module.scss';

interface SelectProps {
  options: string[];
  onChangeOption: (option: string) => void;
  selectedOption: string;
}

const Select: FC<SelectProps> = ({
  options,
  onChangeOption,
  selectedOption
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectContainerRef = useRef<HTMLDivElement>(null);

  const toggling = () => setIsOpen(!isOpen);

  const close = () => setIsOpen(false);

  useClickOutside(selectContainerRef, close)

  return (
    <div
      className={styles.select__container}
      ref={selectContainerRef}
    >
      <div
        className={cn(styles.select__header, "button")}
        onClick={toggling}
      >
        <div className={styles.select__header__title}>{selectedOption}</div>
        <i className={cn(styles.select__icon__down, "fas fa-chevron-down")}></i>
      </div>
      {isOpen && (
        <div className={styles.select__list__container}>
          <ul className={styles.select__list}>
            {options.map(option => (
              <SelectOption
                key={option}
                option={option}
                onChangeOption={onChangeOption}
                close={close}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Select;