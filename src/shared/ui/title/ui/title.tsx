import React from 'react';
import clsx from 'clsx';
import cls from './title.module.scss';

interface ITitleProps {
    children: React.ReactNode;
    gradient?: boolean;
    className?: string;
}

export const Title = (props: ITitleProps) => {
    const {children, className} = props;
    return <h1 className={clsx(cls.title, className)}>{children}</h1>;
};
