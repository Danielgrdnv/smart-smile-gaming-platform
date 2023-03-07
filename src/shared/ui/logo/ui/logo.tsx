import React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import cls from './logo.module.scss';

interface LogoProps {
    className?: string;
}

export const Logo = (props: LogoProps) => {
    const {className} = props;
    return (
        <Link to='/' className={clsx(cls.headerLogo, className)}>
            <span className={clsx(cls.logo)}>Smart</span>
            <span className={clsx(cls.logo)}>Smile</span>
        </Link>
    );
};
