import React, { useRef } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import cls from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className} = props;
  const { t } = useTranslation('common');


  return (
    <>
      <nav id='header_navbar' className={clsx(cls.headerNavbar, className)}>
        <ul>
          <li>
            <button onClick={()=>undefined} id='header_navbar_sport_button'>
              click
            </button>
          </li>
        </ul>
      </nav>

    </>
  );
};
