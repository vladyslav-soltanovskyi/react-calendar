import React, { FC } from "react";

import styles from './select-option.module.scss';

interface ISelectOptionProps {
  option: string;
  close: () => void;
  onChangeOption: (option: string) => void;
}

const SelectOption: FC<ISelectOptionProps> = ({
  option,
  close,
  onChangeOption
}) => {
  const onOptionClicked = () => {
    close();
    onChangeOption(option);
  };

  return (
    <li
      className={styles.option}
      onClick={onOptionClicked}
    >
      <div className={styles.option__name}>{option}</div>
      <div className={styles.option__symbol}>{option.slice(0, 1)}</div>
    </li>
  );
}

export default SelectOption;