// "use client";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, Variants } from "framer-motion";
import ThirdSectionChild from "./ThirdSectionChild";
import "swiper/css";
import Image from "next/image";
import { ModalContext } from "@/context/ModalContext";

const TopingArr = [
    {
        id: 0,
        src: "/image/topings/banan-toping.webp",
        title: "Banan ta'mli",
    },
    {
        id: 1,
        src: "/image/topings/berries-toping.webp",
        title: "Caramel ta'mli",
    },
    {
        id: 2,
        src: "/image/topings/mango-toping.webp",
        title: "Mango ta'mli",
    },
    {
        id: 3,
        src: "/image/topings/black-toping.png",
        title: "Shokoladli",
    },
    {
        id: 4,
        src: "/image/topings/rasberry-toping.webp",
        title: "Qulupnayli",
    },
    {
        id: 5,
        src: "/image/topings/vanilla-toping.webp",
        title: "McDonald's",
    },
];

const cardVariants: Variants = {
    offscreen: { x: "-20%", opacity: 0 },
    onscreen: { x: 0, opacity: 1 },
    offscreen2: { x: "100%" },
    onscreen2: { x: 0 },
};

interface SecondSectionProps {}

const TopingSwiper: React.FC<SecondSectionProps> = () => {
    const { modalHandelFunk } = useContext(ModalContext);

    return (
        <section className="mt-20 max-sm:mt-7">
            <motion.h2
                initial={"offscreen"}
                whileInView={"onscreen"}
                variants={cardVariants}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                    delay: 0,
                    ease: "backOut",
                    duration: 3,
                }}
                className='text-4xl max-sm:text-xl font-["lepka"]'
                id="catalog"
            >
                Topping va bezaklar
            </motion.h2>

            <motion.div
                initial={"offscreen2"}
                whileInView={"onscreen2"}
                variants={cardVariants}
                viewport={{ once: true }}
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
                        500: {
                            slidesPerView: 4,
                        },
                        0: {
                            slidesPerView: 3,
                            spaceBetween:10,
                        },
                    }}
                >
                    {TopingArr.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex items-start justify-center">
                                <div className="bg-[#53C9ED] w-full h-[550px] max-lg:h-[400px] max-sm:h-[240px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-sm:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                    <div
                                        className={`bg-[#0c88ad] rounded-full relative ease-in-out duration-200  max-sm:h-[100px]  max-sm:w-[100px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]`}
                                    >
                                        <Image
                                            height={200}
                                            width={300}
                                            alt=""
                                            src={item.src}
                                            className={`absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[230px] max-lg:w-[200px] max-sm:w-[100px] -translate-y-1/2`}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-10 max-sm:gap-3 items-center justify-center">
                                        <p
                                            className={`font-semibold text-[#0c88ad] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl max-sm:text-sm`}
                                        >
                                            {item.title}
                                        </p>

                                        <button
                                            onClick={() =>
                                                modalHandelFunk(true)
                                            }
                                            className={`w-fit bg-[#0c88ad] text-white px-5 py-3 max-lg:py-2 max-sm:px-3 max-sm:py-1 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg max-sm:text-sm max-[360px]:text-xs`}
                                        >
                                            Buyurtma qilish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </motion.div>
        </section>
    );
};

export default TopingSwiper;
