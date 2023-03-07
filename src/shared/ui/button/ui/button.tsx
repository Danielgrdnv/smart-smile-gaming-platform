import React, {ButtonHTMLAttributes} from 'react';
import clsx from 'clsx';
import style from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    id: string;
    variant?: 'filled' | 'outlined';
}

export const Button = (props: ButtonProps) => {
    const {className, id, children, variant = 'filled', ...other} = props;

    return (
        <button type='button' id={id} className={clsx(style.filledButton, className)} {...other}>
            {children}
        </button>
    )
};
