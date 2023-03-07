import React from 'react';
import clsx from 'clsx';
import {Slider} from '@/shared/ui/slider';
import {GameContainer} from '@/shared/ui/game-container';
import cls from './main.module.scss';
import {News} from "@/widgets/news";

const Main = () => {
    const secTitleOne = 'Login Game';
    const secTitleSec = 'Math Game';
    const description = "Some description Some description Some description Some description ";


    return (
        <main className={clsx(cls.main)}>
            <Slider/>
            <div className={cls.contentWrapper}>
                <News/>
                <div className={cls.gameWrapper}>
                    <GameContainer secondaryTitle={secTitleOne}
                                   description={description}
                                   title='First Game'/>
                    <GameContainer secondaryTitle={secTitleSec}
                                   description={description}
                                   title='Second Game'/>
                </div>
            </div>
        </main>
    );
};

export default Main;
