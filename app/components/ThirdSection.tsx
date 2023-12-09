// "use client";
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

const iceCreamArr = [
    {
        id:1,
        src: "/image/iceCreamArrImages/banan.webp",
    },
    {
        id:2,
        src: "/image/iceCreamArrImages/karamel.webp",
    },
    {
        id:3,
        src: "/image/iceCreamArrImages/kivi.webp",
    },
    {
        id:4,
        src: "/image/iceCreamArrImages/klubnika.webp",
    },
    {
        id:5,
        src: "/image/iceCreamArrImages/kovun.webp",
    },
    {
        id:6,
        src: "/image/iceCreamArrImages/mango.webp",
    },
    {
        id:7,
        src: "/image/iceCreamArrImages/shakalot.webp",
    },
    {
        id:8,
        src: "/image/iceCreamArrImages/vanilniy.webp",
    },
    {
        id:9,
        src: "/image/iceCreamArrImages/white.webp",
    },
    {
        id:10,
        src: "/image/iceCreamArrImages/yarko_krasniy.webp",
    },
]

const ThirdSection: React.FC<SecondSectionProps> = () => {
    return (
        <section className="my-20">
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
                id="catalog"
            >
                Popular product
            </motion.h2>

            <motion.div
                initial={'offscreen2'}
                whileInView={'onscreen2'}
                variants={cardVariants}
                viewport={{ once: true}}
                transition={{
                    delay: 0,
                    ease: "backOut",
                    duration: 2,
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
                    {iceCreamArr.map((item: any) => (
                        <SwiperSlide key={item.id}>
                            <ThirdSectionChild src={item.src}/>
                        </SwiperSlide>
                    ))}
                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </motion.div>
        </section>
    );
};

export default ThirdSection;
