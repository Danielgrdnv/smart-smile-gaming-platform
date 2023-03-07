import React, { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';
import cls from './link.module.scss';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

export const Link = (props: LinkProps) => {
  const { className, children, ...other } = props;
  return (
    <a className={clsx(cls.link, className)} {...other}>
      {children}
    </a>
  );
};
