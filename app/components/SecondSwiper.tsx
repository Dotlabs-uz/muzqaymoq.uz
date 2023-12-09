// "use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, Variants } from "framer-motion";
import "swiper/css";
import Image from "next/image";

const cardVariants: Variants = {
    offscreen: { x: "-20%", opacity: 0 },
    onscreen: { x: 0, opacity: 1 },
    offscreen2: { x: "100%" },
    onscreen2: { x: 0 },
};

interface SecondSectionProps {}

const SecondSwiper: React.FC<SecondSectionProps> = () => {
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
                Vaflilar
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
                                        height={200}
                                        width={140}
                                        alt=""
                                        src={"/image/rojoksImages/rojok.webp"}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[120px] max-lg:w-[90px] max-[400px]:w-[70px] -translate-y-1/2`}
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
                                        height={200}
                                        width={120}
                                        alt=""
                                        src={"/image/rojoksImages/rojok.webp"}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[100px] max-lg:w-[80px] max-[400px]:w-[60px] -translate-y-1/2`}
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
                                        height={200}
                                        width={100}
                                        alt=""
                                        src={"/image/rojoksImages/rojok.webp"}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[90px] max-lg:w-[70px] max-[400px]:w-[50px] -translate-y-1/2`}
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
                                        height={250}
                                        width={300}
                                        alt=""
                                        src={"/image/rojoksImages/rojok2.webp"}
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 -translate-y-1/2`}
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
                                        height={250}
                                        width={220}
                                        alt=""
                                        src={"/image/rojoksImages/rojok2.webp"}
                                        className={`max-xl:w-[200px] max-lg:w-[160px] max-sm:w-[140px] max-[400px]:w-[110px] absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 -translate-y-1/2`}
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
                                        height={250}
                                        width={190}
                                        alt=""
                                        src={"/image/rojoksImages/rojok2.webp"}
                                        className={`max-xl:w-[170px] max-lg:w-[130px] max-sm:w-[110px] max-[400px]:w-[90px] absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 -translate-y-1/2`}
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

export default SecondSwiper;
