import React from 'react';
import clsx from 'clsx';
import { ReactComponent as CheckIcon } from '../assets/check_icon.svg';
import cls from './checkbox.module.scss';

interface ICheckboxProps {
  id: string;
  isCheck: boolean;
  onCheck: (value: boolean) => void;
  children: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  error?: string;
}

export const Checkbox = (props: ICheckboxProps) => {
  const { className, isDisabled, isCheck, onCheck, id, children, error, ...other } = props;

  return (
    <div className={clsx(cls.checkboxWrapper, className)}>
      <button
        type='button'
        className={clsx(cls.checkbox, { [cls.checkboxError]: error && error !== '' })}
        id={id}
        onClick={() => {
          onCheck(!isCheck);
        }}
      >
        <input
          type='checkbox'
          checked={isCheck}
          disabled={isDisabled}
          readOnly
          className={clsx(cls.checkboxInput)}
          {...other}
        />
        {isCheck && <CheckIcon />}
      </button>
      {children}
    </div>
  );
};
