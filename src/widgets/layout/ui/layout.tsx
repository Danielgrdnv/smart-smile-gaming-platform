import React from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';
import {Header} from '@/features/header';
import cls from './layout.module.scss';
import {FooterDesktopReflect} from "@/features/footer";

interface LayoutProps {
    children: JSX.Element;
}

export const Layout = (props: LayoutProps) => {
    const {children} = props;

    const {pathname} = useLocation();
    const isGame = pathname.includes('/game/');

    return !isGame ? (
        <>
            <Header/>
            <div id='layout_container' className={clsx(cls.layout)}>
                {children}
                <FooterDesktopReflect/>
            </div>
        </>
    ) : (
        children
    );
};
