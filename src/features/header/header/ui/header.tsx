import React from 'react';
import clsx from 'clsx';
import { useIsAuth } from '@/entities/user';
import { Logo } from '@/shared/ui/logo';
import { UserBlock } from '../../user-block/ui/user-block';
import { AuthenticationBlock } from '../../authentication-block/ui/authentication-block';
import cls from './header.module.scss';
import { NavbarReflect } from '../../navbar';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;
  const isAuth = useIsAuth();
  return (
    <header className={clsx(cls.header, className)}>
      <div className={clsx(cls.leftContent)}>
        <Logo />
        <NavbarReflect />
      </div>
      {isAuth && <UserBlock />}
      {!isAuth && <AuthenticationBlock />}
    </header>
  );
};
