/** Вариант для выбора в фильтре */
export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, массив может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string;
};
import classNames from 'classnames';
import React, { Children, ReactFragment, ReactNode } from 'react';
import { useState } from 'react';
export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  pluralizeOptions,
  disabled,
}) => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => (isOpen ? setOpen(false) : setOpen(true));
  return (
    <>
      <button onClick={handleOpen}>{pluralizeOptions(value)}</button>
      {isOpen &&
        options.map((child, index) => {
          return (
            !disabled && (
              <div
                key={child.key}
                onClick={() => {
                  if (value.includes(child)) {
                    onChange(value.filter((item) => item.key != child.key));
                  } else {
                    onChange([...value, child]);
                  }
                }}
              >
                {child.value}
              </div>
            )
          );
        })}
    </>
  );
};
