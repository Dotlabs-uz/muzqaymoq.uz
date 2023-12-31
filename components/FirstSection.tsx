"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

interface FirstSectionProps {
    setModalHendel: Dispatch<SetStateAction<boolean>>;
}

const FirstSection: React.FC<FirstSectionProps> = ({ setModalHendel }) => {
    const [swiperRef, setSwiperRef] = useState<any>(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    return (
        <section className="w-full pt-44 max-lg:pt-24 max-lg:gap-10 relative flex max-lg:flex-col-reverse justify-between">
            <div className="min-h-[100vh] max-lg:min-h-[800px] bg-[#53C9ED] w-[60%] max-h-[800px] max-lg:w-[80%] absolute top-0 -right-[17%] max-sm:min-h-[410px]"></div>

            <div className="w-full flex flex-col gap-10 max-lg:flex-col-reverse max-2xl:gap-5 max-sm:gap-2 items-start">
                <div className="w-[80%] max-xl:w-[65%] max-lg:w-[50%] max-sm:w-full">
                    <motion.h1
                        initial={{ x: "-120%" }}
                        animate={{ x: 0 }}
                        transition={{
                            delay: 0.3,
                            ease: "backOut",
                            duration: 2,
                        }}
                        className="font-bold gap-4 leading-tight text-5xl max-xl:text-4xl max-md:text-3xl font-['lepka']"
                    >
                        ALL YOU NEED
                        <span className='text-[#014EA1] font-["lepka"]'>
                            LOVE AND ICE CREAM
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ x: "-120%" }}
                        animate={{ x: 0 }}
                        transition={{
                            delay: 0.6,
                            ease: "backOut",
                            duration: 2,
                        }}
                        className="mt-5 font-medium text-lg max-md:text-base"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </motion.p>
                    <motion.button
                        initial={{ x: "-150%" }}
                        animate={{ x: 0 }}
                        transition={{
                            delay: 1,
                            ease: "backOut",
                            duration: 2,
                        }}
                        onClick={() => setModalHendel(true)}
                        className="flex items-center max-md:text-sm gap-7 bg-black text-white px-14 py-4 max-xl:px-10 max-xl:py-3 max-lg:px-8 max-lg:py-2 rounded-full mt-6"
                    >
                        Купить сейчас
                        <Image
                            src={"/icons/to-right-icon.png"}
                            className="rotate-90 max-md:w-2"
                            width={12}
                            height={10}
                            alt=""
                        />
                    </motion.button>
                </div>
                <div className="mt-10 max-2xl:mt-5 max-xl:mt-10 max-lg:mt-0 w-full relative">
                    <motion.p
                        initial={{ x: "-150%" }}
                        animate={{ x: 0 }}
                        transition={{
                            delay: 1.3,
                            ease: "backOut",
                            duration: 2,
                        }}
                        className="text-lg font-semibold"
                    >
                        You mignt love Ice cream:
                    </motion.p>
                    <motion.div
                        initial={{ x: "-130%" }}
                        animate={{ x: 0 }}
                        transition={{
                            delay: 1.6,
                            ease: "backOut",
                            duration: 2.5,
                        }}
                        className="flex items-center gap-5"
                    >
                        <div className="relative mt-5">
                            <Swiper
                                className="w-[40vw] max-w-[800px] max-lg:w-[100vw]"
                                onSwiper={(swiper: any) => setSwiperRef(swiper)}
                                spaceBetween={20}
                                slidesPerView={2}
                                breakpoints={{
                                    1536: {
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        spaceBetween: 10,
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        spaceBetween: 10,
                                        slidesPerView: 3,
                                    },
                                    400: {
                                        slidesPerView: 2,
                                    },
                                    0: {
                                        spaceBetween: 5,
                                        slidesPerView: 2,
                                    },
                                }}
                            >
                                <SwiperSlide className="mb-16">
                                    <div className="flex gap-5 max-xl:gap-2 items-center shadow-lg rounded-3xl p-5 max-sm:p-3 cursor-pointer z-10">
                                        <Image
                                            src={"/image/ice-cream-2.png"}
                                            width={100}
                                            height={100}
                                            alt=""
                                            className="max-2xl:w-[70px] max-xl:w-[60px]"
                                        />
                                        <div className="flex flex-col max-xl:text-sm max-sm:text-xs gap-2 max-xl:gap-1">
                                            <p className="font-bold">
                                                Сhoco vanilla Ice Cream
                                            </p>
                                            <p>2 Scoops</p>
                                            <p className="font-black text-lg max-xl:text-base max-sm:text-xs">
                                                $75
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="mb-16">
                                    <div className="flex gap-5 max-xl:gap-2 items-center shadow-lg rounded-3xl p-5 max-sm:p-3 cursor-pointer z-10">
                                        <Image
                                            src={"/image/ice-cream-2.png"}
                                            width={100}
                                            height={100}
                                            alt=""
                                            className="max-2xl:w-[70px] max-xl:w-[60px]"
                                        />
                                        <div className="flex flex-col max-xl:text-sm max-sm:text-xs gap-2 max-xl:gap-1">
                                            <p className="font-bold">
                                                Сhoco vanilla Ice Cream
                                            </p>
                                            <p>2 Scoops</p>
                                            <p className="font-black text-lg max-xl:text-base max-sm:text-xs">
                                                $75
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="mb-16">
                                    <div className="flex gap-5 max-xl:gap-2 items-center shadow-lg rounded-3xl p-5 max-sm:p-3 cursor-pointer z-10">
                                        <Image
                                            src={"/image/ice-cream-2.png"}
                                            width={100}
                                            height={100}
                                            alt=""
                                            className="max-2xl:w-[70px] max-xl:w-[60px]"
                                        />
                                        <div className="flex flex-col max-xl:text-sm max-sm:text-xs gap-2 max-xl:gap-1">
                                            <p className="font-bold">
                                                Сhoco vanilla Ice Cream
                                            </p>
                                            <p>2 Scoops</p>
                                            <p className="font-black text-lg max-xl:text-base max-sm:text-xs">
                                                $75
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="mb-16">
                                    <div className="flex gap-5 max-xl:gap-2 items-center shadow-lg rounded-3xl p-5 max-sm:p-3 cursor-pointer z-10">
                                        <Image
                                            src={"/image/ice-cream-2.png"}
                                            width={100}
                                            height={100}
                                            alt=""
                                            className="max-2xl:w-[70px] max-xl:w-[60px]"
                                        />
                                        <div className="flex flex-col max-xl:text-sm max-sm:text-xs gap-2 max-xl:gap-1">
                                            <p className="font-bold">
                                                Сhoco vanilla Ice Cream
                                            </p>
                                            <p>2 Scoops</p>
                                            <p className="font-black text-lg max-xl:text-base max-sm:text-xs">
                                                $75
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide></SwiperSlide>
                            </Swiper>
                        </div>
                        <div
                            onClick={nextHandler}
                            className="w-[50px] h-[50px] p-4 rounded-full shadow-xl flex items-center justify-center cursor-pointer  z-50"
                        >
                            <Image
                                src={"/icons/to-right-icon2.png"}
                                width={100}
                                height={100}
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="w-full flex max-lg:gap-40 max-sm:gap-20 items-start max-lg:items-center max-sm:items-start max-lg:translate-y-10 max-lg:h-[700px] max-sm:h-[300px] justify-between">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "anticipate", duration: 2 }}
                    className={"w-full h-full z-10 "}
                >
                    <Image
                        src={"/image/Ice.svg"}
                        width={100}
                        height={100}
                        alt=""
                        className="pointer-events-none w-[990px] h-[800px] max-2xl:w-[900px] max-2xl:h-[95vh] absolute top-[55%] left-[35%] max-2xl:left-[32%] max-xl:left-[28%] max-lg:left-0 max-lg:top-1/2 max-md:h-[85vh] max-md:top-[35%] max-sm:h-[400px] max-sm:w-[400px] max-sm:top-[120px] -translate-y-1/2 "
                    />
                </motion.div>
                <motion.div
                    // initial={{ x: "150%" }}
                    // animate={{ x: 0 }}
                    // transition={{ delay: 0.7, ease: "backOut", duration: 2 }}
                    className="w-full h-auto text-white z-10 max-md:text-sm max-sm:text-xs max-[400px]:text-[10px]"
                >
                    <div className="flex items-start gap-3">
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 1,
                                ease: "easeOut",
                                duration: 1,
                            }}
                        >
                            <Image
                                src={"/icons/Vector1.png"}
                                width={100}
                                height={10}
                                alt=""
                                className="max-sm:w-10 max-md:w-20"
                            />
                        </motion.div>

                        <div className="flex gap-10 max-sm:gap-5">
                            <div className="flex flex-col items-start gap-3 max-sm:gap-2">
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 2,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}
                                >
                                    Calorie
                                </motion.p>
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 2.2,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}
                                >
                                    Total fat
                                </motion.p>
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 2.4,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}
                                >
                                    Protein
                                </motion.p>
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 2.6,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}
                                >
                                    Vt.D
                                </motion.p>
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 2.8,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}
                                >
                                    Calcium
                                </motion.p>
                            </div>
                            <div className="flex max-sm:hidden flex-col items-start gap-3">
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 3,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}
                                >
                                    210
                                </motion.p>
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 3.2,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}
                                >
                                    10%
                                </motion.p>
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 3.4,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}
                                >
                                    1g
                                </motion.p>
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 3.6,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}
                                >
                                    0%
                                </motion.p>
                                <motion.p
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 3.8,
                                        ease: "easeOut",
                                        duration: 1,
                                    }}
                                >
                                    20%
                                </motion.p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-20 max-sm:mt-5 max-[400px]:mt-2">
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 1,
                                ease: "easeOut",
                                duration: 1,
                            }}
                        >
                            <Image
                                src={"/icons/Vector1.png"}
                                width={100}
                                height={10}
                                alt=""
                                className="max-md:w-20 max-sm:w-10"
                            />
                        </motion.div>
                        <motion.p
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 2,
                                ease: "easeOut",
                                duration: 1,
                            }}
                        >
                            Available Size
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FirstSection;
