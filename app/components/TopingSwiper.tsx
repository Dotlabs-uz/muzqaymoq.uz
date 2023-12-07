"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, Variants } from "framer-motion";
import ThirdSectionChild from "./ThirdSectionChild";
import "swiper/css";
import Image from "next/image";

const cardVariants: Variants = {
    offscreen: { x: "-20%", opacity: 0 },
    onscreen: { x: 0, opacity: 1 },
    offscreen2: { x: "100%" },
    onscreen2: { x: 0 },
};

interface SecondSectionProps {}

const TopingSwiper: React.FC<SecondSectionProps> = () => {
    return (
        <section className="mt-20">
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
                className='text-4xl font-["lepka"]'
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
                    <SwiperSlide>
                        <div className="flex items-start justify-center">
                            <div className="bg-[#9D93C2] w-full h-[550px] max-lg:h-[400px]  max-[400px]:h-[320px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-[400px]:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                <div
                                    className={`bg-[#2A1B68] rounded-full relative ease-in-out duration-200  max-[400px]:h-[120px]  max-[400px]:w-[120px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]`}
                                >
                                    <Image
                                        height={300}
                                        width={340}
                                        alt=""
                                        src={"/image/topings/banan-toping.webp"}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[280px] max-lg:h-[200px] max-[400px]:h-[140px] ease-in-out duration-200  -translate-y-1/2`}
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <p
                                        className={`font-semibold text-[#2A1B68] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl`}
                                    >
                                        BLUEBERRY MINT
                                    </p>
                                    <p
                                        className={`font-semibold text-white my-3 max-lg:my-2 ease-in-out duration-200  max-md:text-lg max-lg:text-xl text-2xl `}
                                    >
                                        100$
                                    </p>
                                    <button
                                        className={`w-1/2 max-md:w-3/4 bg-[#2A1B68] text-white py-3 max-lg:py-2 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg`}
                                    >
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-start justify-center">
                            <div className="bg-[#9D93C2] w-full h-[550px] max-lg:h-[400px]  max-[400px]:h-[320px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-[400px]:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                <div
                                    className={`bg-[#2A1B68] rounded-full relative ease-in-out duration-200  max-[400px]:h-[120px]  max-[400px]:w-[120px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]`}
                                >
                                    <Image
                                        height={300}
                                        width={340}
                                        alt=""
                                        src={"/image/topings/berries-toping.webp"}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[280px] max-lg:h-[200px] max-[400px]:h-[140px] ease-in-out duration-200  -translate-y-1/2`}
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <p
                                        className={`font-semibold text-[#2A1B68] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl`}
                                    >
                                        BLUEBERRY MINT
                                    </p>
                                    <p
                                        className={`font-semibold text-white my-3 max-lg:my-2 ease-in-out duration-200  max-md:text-lg max-lg:text-xl text-2xl `}
                                    >
                                        100$
                                    </p>
                                    <button
                                        className={`w-1/2 max-md:w-3/4 bg-[#2A1B68] text-white py-3 max-lg:py-2 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg`}
                                    >
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-start justify-center">
                            <div className="bg-[#9D93C2] w-full h-[550px] max-lg:h-[400px]  max-[400px]:h-[320px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-[400px]:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                <div
                                    className={`bg-[#2A1B68] rounded-full relative ease-in-out duration-200  max-[400px]:h-[120px]  max-[400px]:w-[120px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]`}
                                >
                                    <Image
                                        height={300}
                                        width={340}
                                        alt=""
                                        src={"/image/topings/mango-toping.webp"}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[280px] max-lg:h-[200px] max-[400px]:h-[140px] ease-in-out duration-200  -translate-y-1/2`}
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <p
                                        className={`font-semibold text-[#2A1B68] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl`}
                                    >
                                        BLUEBERRY MINT
                                    </p>
                                    <p
                                        className={`font-semibold text-white my-3 max-lg:my-2 ease-in-out duration-200  max-md:text-lg max-lg:text-xl text-2xl `}
                                    >
                                        100$
                                    </p>
                                    <button
                                        className={`w-1/2 max-md:w-3/4 bg-[#2A1B68] text-white py-3 max-lg:py-2 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg`}
                                    >
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <div className="flex items-start justify-center">
                            <div className="bg-[#9D93C2] w-full h-[550px] max-lg:h-[400px]  max-[400px]:h-[320px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-[400px]:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                <div
                                    className={`bg-[#2A1B68] rounded-full relative ease-in-out duration-200  max-[400px]:h-[120px]  max-[400px]:w-[120px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]`}
                                >
                                    <Image
                                        height={300}
                                        width={300}
                                        alt=""
                                        src={"/image/topings/maple-toping.webp"}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[320px] max-lg:h-[200px] max-[400px]:h-[140px] ease-in-out duration-200  -translate-y-1/2`}
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <p
                                        className={`font-semibold text-[#2A1B68] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl`}
                                    >
                                        BLUEBERRY MINT
                                    </p>
                                    <p
                                        className={`font-semibold text-white my-3 max-lg:my-2 ease-in-out duration-200  max-md:text-lg max-lg:text-xl text-2xl `}
                                    >
                                        100$
                                    </p>
                                    <button
                                        className={`w-1/2 max-md:w-3/4 bg-[#2A1B68] text-white py-3 max-lg:py-2 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg`}
                                    >
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    <SwiperSlide>
                        <div className="flex items-start justify-center">
                            <div className="bg-[#9D93C2] w-full h-[550px] max-lg:h-[400px]  max-[400px]:h-[320px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-[400px]:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                <div
                                    className={`bg-[#2A1B68] rounded-full relative ease-in-out duration-200  max-[400px]:h-[120px]  max-[400px]:w-[120px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]`}
                                >
                                    <Image
                                        height={300}
                                        width={340}
                                        alt=""
                                        src={"/image/topings/rasberry-toping.webp"}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[280px] max-lg:h-[200px] max-[400px]:h-[140px] ease-in-out duration-200  -translate-y-1/2`}
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <p
                                        className={`font-semibold text-[#2A1B68] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl`}
                                    >
                                        BLUEBERRY MINT
                                    </p>
                                    <p
                                        className={`font-semibold text-white my-3 max-lg:my-2 ease-in-out duration-200  max-md:text-lg max-lg:text-xl text-2xl `}
                                    >
                                        100$
                                    </p>
                                    <button
                                        className={`w-1/2 max-md:w-3/4 bg-[#2A1B68] text-white py-3 max-lg:py-2 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg`}
                                    >
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-start justify-center">
                            <div className="bg-[#9D93C2] w-full h-[550px] max-lg:h-[400px]  max-[400px]:h-[320px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-[400px]:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                <div
                                    className={`bg-[#2A1B68] rounded-full relative ease-in-out duration-200  max-[400px]:h-[120px]  max-[400px]:w-[120px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]`}
                                >
                                    <Image
                                        height={300}
                                        width={340}
                                        alt=""
                                        src={"/image/topings/vanilla-toping.webp"}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[280px] max-lg:h-[200px] max-[400px]:h-[140px] ease-in-out duration-200  -translate-y-1/2`}
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <p
                                        className={`font-semibold text-[#2A1B68] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl`}
                                    >
                                        BLUEBERRY MINT
                                    </p>
                                    <p
                                        className={`font-semibold text-white my-3 max-lg:my-2 ease-in-out duration-200  max-md:text-lg max-lg:text-xl text-2xl `}
                                    >
                                        100$
                                    </p>
                                    <button
                                        className={`w-1/2 max-md:w-3/4 bg-[#2A1B68] text-white py-3 max-lg:py-2 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg`}
                                    >
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </motion.div>
        </section>
    );
};

export default TopingSwiper;
