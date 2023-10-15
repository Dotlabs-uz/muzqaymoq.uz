"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, Variants } from "framer-motion";
import ThirdSectionChild from "./ThirdSectionChild";
import "swiper/css";

const cardVariants: Variants = {
    offscreen: { x: '-20%', opacity: 0},
    onscreen: { x: 0, opacity:1 },
    offscreen2: { x: "100%"},
    onscreen2: { x: 0},
  };

interface SecondSectionProps {}

const ThirdSection: React.FC<SecondSectionProps> = () => {
    return (
        <section className="mt-20">
            <motion.h2
                initial={'offscreen'}
                whileInView={'onscreen'}
                variants={cardVariants}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                    delay: 0,
                    ease: "backOut",
                    duration: 3,
                }}
                className='text-4xl font-["lepka"]'
            >
                Popular product
            </motion.h2>

            <motion.div
                initial={'offscreen2'}
                whileInView={'onscreen2'}
                variants={cardVariants}
                viewport={{ once: true, amount: 0 }}
                transition={{
                    delay: 0,
                    ease: "backOut",
                    duration: 4,
                }}
                className="relative mt-5 h-auto"
            >
                <Swiper
                    className="w-[120vw] h-auto"
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
