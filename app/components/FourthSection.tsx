"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface FourthSectionProps {}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const FourthSection: React.FC<FourthSectionProps> = () => {
    return (
        <section className="my-20">
            <Swiper
                className="w-full h-auto"
                spaceBetween={20}
                slidesPerView={1}
            >
                {[0, 1, 2, 3, 4, 5, 6].map((item: any) => (
                    <SwiperSlide key={item}>
                        <div className="bg-[#53C9ED] flex max-xl:flex-col justify-center items-center p-20 max-sm:p-16 rounded-[80px] max-md:rounded-[50px] max-sm:rounded-[30px] relative overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                whileInView={{ x: "0", opacity: 1 }}
                                transition={{ ease: "backOut", duration: 2 }}
                                viewport={{ once: true }}
                                className="pointer-events-none absolute top-10 left-10 max-sm:w-[130px] max-[500px]:w-[100px] max-sm:left-5 max-sm:top-5"
                            >
                                <Image
                                    src={"/image/fourthSectionVector.svg"}
                                    alt=""
                                    width={170}
                                    height={170}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: "100%", opacity: 0 }}
                                whileInView={{ x: "0", opacity: 1 }}
                                transition={{ ease: "backOut", duration: 2 }}
                                viewport={{ once: true }}
                                className="pointer-events-none absolute top-10 right-10 max-sm:w-[130px] max-[500px]:w-[100px] max-sm:right-5 max-sm:top-5"
                            >
                                <Image
                                    src={"/image/fourthSectionVector.svg"}
                                    alt=""
                                    width={170}
                                    height={170}
                                    className="rotate-90"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: "100%", opacity: 0 }}
                                whileInView={{ x: "0", opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ ease: "backOut", duration: 2 }}
                                className="pointer-events-none absolute bottom-10 right-10 max-sm:w-[130px] max-[500px]:w-[100px] max-sm:right-5 max-sm:bottom-5"
                            >
                                <Image
                                    src={"/image/fourthSectionVector.svg"}
                                    alt=""
                                    width={170}
                                    height={170}
                                    className={"rotate-180"}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                whileInView={{ x: "0", opacity: 1 }}
                                transition={{ ease: "backOut", duration: 2 }}
                                viewport={{ once: true }}
                                className="pointer-events-none absolute bottom-10 left-10 max-sm:w-[130px] max-[500px]:w-[100px] max-sm:left-5 max-sm:bottom-5"
                            >
                                <Image
                                    src={"/image/fourthSectionVector.svg"}
                                    alt=""
                                    width={170}
                                    height={170}
                                    className={"-rotate-90"}
                                />
                            </motion.div>

                            <div className="w-full flex items-center justify-center">
                                <motion.div
                                    initial={{ x: "-100%", opacity: 0 }}
                                    whileInView={{ x: "0", opacity: 1 }}
                                    transition={{
                                        delay: 0.5,
                                        ease: "backOut",
                                        duration: 3,
                                    }}
                                    viewport={{ once: true }}
                                    className="w-[750px] max-2xl:w-[550px] max-xl:w-[500px] max-md:w-[400px]  max-sm:w-[350px] flex items-center justify-center relative"
                                >
                                    <Image
                                        src={
                                            "/image/firthSection-Ice-cream.svg"
                                        }
                                        alt=""
                                        width={300}
                                        height={300}
                                        className="pointer-events-none"
                                    />

                                    <motion.div
                                        initial={{ scale: 0.1, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            delay: 0.3,
                                            ease: "linear",
                                            duration: 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="absolute top-[10%] left-[20%] max-2xl:left-[9%] max-xl:left-[5%] max-lg:left-[5%] max-md:-left-[5%] max-sm:-left-[10%]"
                                    >
                                        <Image
                                            src={"/image/vector4-1.svg"}
                                            alt=""
                                            width={100}
                                            height={100}
                                            className="pointer-events-none max-sm:w-[90px] max-sm:h-[90px] max-[414px]:h-[50px] max-[414px]:w-[50px]"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ scale: 0.1, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            delay: 0.5,
                                            ease: "linear",
                                            duration: 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="absolute top-[20%] right-[35%] max-2xl:right-[27%] max-xl:right-[25%] max-lg:right-[20%] max-sm:right-[15%]"
                                    >
                                        <Image
                                            src={"/image/vector4-2.svg"}
                                            alt=""
                                            width={60}
                                            height={60}
                                            className="pointer-events-none max-sm:w-[60px] max-sm:h-[60px] max-[414px]:h-[35px] max-[414px]:w-[35px]"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ scale: 0.1, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            delay: 0.7,
                                            ease: "linear",
                                            duration: 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="absolute right-[30%] bottom-[25%] max-2xl:right-[22%] max-xl:right-[17%] max-lg:right-[15%] max-md:right-[10%] max-sm:right-[10%] "
                                    >
                                        <Image
                                            src={"/image/vector4-3.svg"}
                                            alt=""
                                            width={75}
                                            height={75}
                                            className="pointer-events-none max-sm:w-[50px] max-sm:h-[50px] max-[414px]:h-[35px] max-[414px]:w-[35px]"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ scale: 0.1, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            delay: 0.9,
                                            ease: "backInOut",
                                            duration: 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="absolute left-[35%] bottom-[10%] max-2xl:left-[30%] max-xl:left-[30%] max-lg:left-[30%] max-md:left-[25%] max-sm:left-[15%] max-sm:bottom-[15%] "
                                    >
                                        <Image
                                            src={"/image/vector4-4.svg"}
                                            alt=""
                                            width={50}
                                            height={50}
                                            className="pointer-events-none max-sm:w-[80px] max-sm:h-[80px] max-[414px]:h-[50px] max-[414px]:w-[50px]"
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>

                            <div className="w-full max-xl:w-3/4 max-sm:w-[100%]">
                                <motion.p
                                    initial={{ x: "110%", opacity: 0 }}
                                    whileInView={{ x: "0", opacity: 1 }}
                                    transition={{
                                        delay: 0.5,
                                        ease: "backOut",
                                        duration: 2,
                                    }}
                                    viewport={{ once: true }}
                                    className='text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl text-white font-["lepka"]'
                                >
                                    The result is a smooth and semi-solid foam
                                </motion.p>
                                <motion.p
                                    initial={{ x: "110%", opacity: 0 }}
                                    whileInView={{ x: "0", opacity: 1 }}
                                    transition={{
                                        delay: 1,
                                        ease: "backOut",
                                        duration: 2,
                                    }}
                                    viewport={{ once: true }}
                                    className="text-2xl max-xl:text-xl max-sm:text-base mt-5 font-semibold max-sm:mt-3"
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.{" "}
                                </motion.p>
                                <motion.div
                                    initial={{ x: "110%", opacity: 0 }}
                                    whileInView={{ x: "0", opacity: 1 }}
                                    transition={{
                                        delay: 1.4,
                                        ease: "backOut",
                                        duration: 2,
                                    }}
                                    viewport={{ once: true }}
                                    className="flex max-md:flex-col items-center max-md:items-start gap-10 max-sm:gap-5 mt-5"
                                >
                                    <button className="bg-[#014EA1] py-5 px-10 max-sm:py-3 max-sm:px-5 text-white text-xl max-sm:text-base rounded-full">
                                        Купить сейчас
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide></SwiperSlide> */}
            </Swiper>
        </section>
    );
};

export default FourthSection;
