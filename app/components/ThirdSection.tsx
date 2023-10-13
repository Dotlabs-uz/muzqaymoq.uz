"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import ThirdSectionChild from "./ThirdSectionChild";

interface SecondSectionProps {}

const ThirdSection: React.FC<SecondSectionProps> = () => {
    return (
        <section className="mt-20">
            <motion.h2
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{
                    delay: 0,
                    ease: "backOut",
                    duration: 4,
                }}
                className='text-4xl font-["lepka"]'
            >
                Popular product
            </motion.h2>

            <motion.div
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                transition={{
                    delay: 0,
                    ease: "backOut",
                    duration: 4,
                }}
                className="relative mt-5"
            >
                <Swiper
                    className="w-[120vw]"
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={{
                        1668: {
                            slidesPerView: 6,
                        },
                        769: {
                            slidesPerView: 4,
                        },
                        600: {
                            slidesPerView: 3,
                        },
                        0: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {[0, 1, 2, 3, 4, 5, 6].map((item: any) => (
                        <SwiperSlide key={item}>
                            <ThirdSectionChild />
                        </SwiperSlide>
                    ))}
                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </motion.div>
        </section>
    );
};

export default ThirdSection;
