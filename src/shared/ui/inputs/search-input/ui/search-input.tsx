import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { ReactComponent as IconSearch } from '@/shared/ui/inputs/input/assets/search-icon.svg';
import { Input } from '../../input';
import cls from './search-input.module.scss';

interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  searchClick?: () => void;
}

export const SearchInput = (props: ISearchInputProps) => {
  const { searchClick, className, disabled, id, ...other } = props;

  return (
    <Input
      className={clsx(cls.inputSearch, { [cls.inputSearchDisabled]: disabled }, className)}
      disabled={disabled}
      id={id || 'search_input'}
      leftContent={
        <button
          type='button'
          disabled={disabled}
          onClick={searchClick}
          id={id ? `${id}_button` : 'search_input_button'}
          className={cls.searchIcon}
        >
          <IconSearch />
        </button>
      }
      {...other}
    />
  );
};
