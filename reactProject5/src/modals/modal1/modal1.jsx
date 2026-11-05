import classes from './modal1.module.scss'
import { Photo } from '../../Photo'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Modal1({onClose, children}){
    return(
        <>
            <div className={classes.container} onClick={onClose}>
                <div className={classes.containers2} onClick={(e) => e.stopPropagation()}>
                    <div className={classes.left}>
                        {children}
                    </div>
                    <div className={classes.right}>
                        <div className={classes.text}>
                            <p>Worktap — это маркетплейс фриланс услуг, где можно купить услугу как товар в магазине или создать индивидуальный заказ на бирже. </p>
                        </div>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            effect={'fade'}
                            navigation={false}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Autoplay, EffectFade, Navigation, Pagination]}
                            className={classes.mySwiper}
                        >
                            <SwiperSlide>
                                <img src={Photo.slide1} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Photo.slide2} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Photo.slide3} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Photo.slide4} alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}