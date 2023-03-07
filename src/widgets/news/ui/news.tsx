import cls from './news.module.scss'
import clsx from "clsx";
import React from "react";

interface INewsProps {
    className?: string
}

export const News = (props: INewsProps) => {
    const {className} = props;
    const mas = ['some1', 'some2', 'some3', 'some4', 'some5']
    return (
        <ul className={clsx(cls.news, className)}>
            {mas.map((item, index) =>
                <React.Fragment key={`news-${item}-${index}`}>
                    <li className={cls.newsItem}>
                        <h3>some title</h3>
                        <div>some content</div>
                    </li>
                </React.Fragment>
            )}
        </ul>
    );
};