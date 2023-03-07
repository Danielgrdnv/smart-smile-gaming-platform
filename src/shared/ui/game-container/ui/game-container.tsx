import React from 'react';
import cls from './game-container.module.scss';
import clsx from 'clsx';

interface IGameContainerProps {
  className?: string;
  title: string;
  secondaryTitle: string;
  description: string;
}

export const GameContainer = (props: IGameContainerProps) => {
  const { title, secondaryTitle, description, className } = props;

  return (
    <section className={clsx(cls.content, className)}>
      <div className={cls.descriptionWrapper}>
        <h2 className={cls.title}>{title}</h2>
        <h3 className={cls.secondaryTitle}>{secondaryTitle}</h3>
        <p className={cls.description}>{description}</p>
      </div>
    </section>
  );
};
