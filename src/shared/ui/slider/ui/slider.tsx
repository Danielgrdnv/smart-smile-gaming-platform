import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import cls from './slider.module.scss';

import banner from '../assets/banner.png'

interface ISliderProps {
    className?: string;
};

export const Slider = (props: ISliderProps) => {
    const {className} = props
    const vr = ['some1', 'some2', 'some3'];
    return (
        <Swiper
            className={cls.swiper}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{clickable: true}}
            modules={[Navigation]}
            navigation={true}
        >
            {vr.map((item, index) =>
                <SwiperSlide key={`slider-${index}-${item}`} className={cls.slider}>
                    <img alt='banner' src={banner} className={cls.bannerContent}/>
                </SwiperSlide>
            )}
        </Swiper>
    )
}
