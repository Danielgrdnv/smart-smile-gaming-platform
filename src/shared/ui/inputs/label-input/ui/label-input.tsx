import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Input } from '../../input';
import cls from './label-input.module.scss';

interface LabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const LabelInput = (props: LabelInputProps) => {
  const { className, id, label, ...other } = props;
  return (
    <Input
      id={id}
      // TODO: доделать стили для label
      className={clsx(cls.labelInput, className)}
      leftContent={<label htmlFor={id}>{label}</label>}
      // TODO: сделать здесь или снаружи компоненту для копирования value
      {...other}
    />
  );
};
