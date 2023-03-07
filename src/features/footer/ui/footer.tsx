import React from 'react';
import {useTranslation} from 'react-i18next';
import clsx from 'clsx';
import {FooterList} from '@/shared/ui/footer-list';
import {ReactComponent as VkIcon} from '../assets/vk_icon.svg';
import cls from './footer.module.scss';
import {Logo} from "@/shared/ui/logo";

interface IFooterDesktopProps {
    className?: string;
}

export const Footer = (props: IFooterDesktopProps) => {
    const {className} = props;
    const {t} = useTranslation('common');

    const lists = [
        {
            title: t('Awards'),
            list: [
                {url: '/', title: `award1`,},
                {url: '/', title: `award2`,},
                {url: '/', title: `award3`,},
            ]
        },
        {
            title: t('About us'),
            list: [
                {url: '/', title: `aboutUs1`,},
                {url: '/', title: `aboutUs2`,},
                {url: '/', title: `aboutUs3`,},
            ]
        },
        {
            title: t('For users'),
            list: [
                {url: '/', title: `forUsers1`,},
                {url: '/', title: `forUsers2`,},
                {url: '/', title: `forUsers3`,},
            ]
        }
    ]

    return (
        <footer className={clsx(cls.footerDesktop, className)}>
            <div className={cls.container}>
                <div className={cls.footerDesktopLanguageWrapper}>
                    <Logo/>
                    <ul className={cls.socialIcons}>
                        <li>
                            <VkIcon/>
                        </li>
                    </ul>
                </div>
                {lists.map(item =>
                    <React.Fragment key={`footer-list-${item.title}`}>
                        <FooterList
                            header={item.title}
                            list={item.list}
                        />
                    </React.Fragment>
                )}
            </div>
        </footer>
    );
};