import React, { FC, useRef, useState } from "react";
import { colors } from "./colors";
import { useClickOutside } from "hooks/index";
import ColorOption from "./components/color-option/ColorOption";
import cn from "classnames";

import styles from './color-picker.module.scss';

interface IColorPickerProps {
  selectedColor: string;
  onChangeColor: (color: string) => void
}

const ColorPicker: FC<IColorPickerProps> = ({
  selectedColor,
  onChangeColor
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const toggling = () => setIsOpen(!isOpen);

  const close = () => setIsOpen(false);

  useClickOutside(colorPickerRef, close);

  return (
    <div className={styles.color__picker} ref={colorPickerRef}>
      <div className={styles.color__picker__header} onClick={toggling}>
        <div
          className={styles.color__picker__selected__color}
          style={{ background: selectedColor }}
        />
        <i className={cn("fas fa-chevron-down", styles.color__picker__icon__down)}></i>
      </div>
      {isOpen && (
        <ul className={styles.color__picker__list}>
          {colors.map((color, indx) => (
            <ColorOption
              key={indx}
              color={color}
              selectedColor={selectedColor}
              onChangeColor={onChangeColor}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ColorPicker;