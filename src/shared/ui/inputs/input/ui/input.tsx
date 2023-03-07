import React, { InputHTMLAttributes, useState } from 'react';
import clsx from 'clsx';
import { ReactComponent as OpenEye } from '../assets/open-eye-icon.svg';
import { ReactComponent as CloseEye } from '../assets/close-eye-icon.svg';
import { ErrorComponent } from '@/shared/ui/error-component';
import cls from './input.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string;
  leftContent?: JSX.Element;
  rightContent?: JSX.Element;
}

export const Input = (props: IInputProps) => {
  const { className, rightContent, type, leftContent, error, id, ...other } = props;

  const [visiblePassword, setVisiblePassword] = useState(false);

  const toggleVisiblePassword = () => {
    setVisiblePassword((prevState) => !prevState);
  };

  return (
    <div className={clsx(cls.inputDefaultWrapper, { [cls.inputError]: error }, className)}>
      {error && error !== '' ? <ErrorComponent id={id} error={error} /> : null}

      {leftContent}

      <input
        type={type === 'password' && visiblePassword ? 'text' : type}
        className={clsx(cls.input)}
        id={id}
        {...other}
      />

      {type === 'password' && (
        <span
          role='checkbox'
          aria-checked={visiblePassword}
          onClick={toggleVisiblePassword}
          className={clsx(cls.eyeIcon)}
        >
          {visiblePassword ? <OpenEye /> : <CloseEye />}
        </span>
      )}

      {rightContent}
    </div>
  );
};
