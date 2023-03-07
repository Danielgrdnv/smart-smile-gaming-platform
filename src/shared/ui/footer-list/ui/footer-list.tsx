import React from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import cls from './footer-list.module.scss';

interface IFooterListProps {
    header: string;
    list: {
        title: string;
        url: string;
    }[];
    className?: string;
}

export const FooterList = (props: IFooterListProps) => {
    const {className, header, list} = props;
    return (
        <div className={clsx(cls.footerList, className)}>
            <h4 className={cls.footerListHeader}> {header} </h4>
            <ul className={cls.footerList}>
                {list.map((item) => (
                    <li key={`footer_${header}_${item.title}`}>
                        <Link className={cls.footerListItem} to={item.url} id={`footer_${item.title}_link`}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
