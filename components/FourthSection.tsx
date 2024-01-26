"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
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
        <section className="my-20 max-sm:my-5">
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
                            src={"/image/aparat/aparat2.webp"}
                            alt=""
                            width={400}
                            height={400}
                            className="pointer-events-none"
                        />
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
                        className='text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl text-white font-["lepka"] uppercase'
                    >
                        MODEL BL-240 XUSUSIYATLARI
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
                        Ishlash quvati - 40-50l / soat <br />
                        Dvigatel quvvati - 4,0 kVt <br />
                        Kuchlanish - 380V - 50Hz - 3 faza
                    </motion.p>
                    {/* <motion.div
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
                            </motion.div> */}
                </div>
            </div>
        </section>
    );
};

export default FourthSection;
