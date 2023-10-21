"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

interface SecondSectionProps {}

const cardVariants: Variants = {
    offscreen: { scale: 0.2, x: "-30%"},
    onscreen: { scale: 1, x:0},
    offscreen2: {},
    onscreen2: {rotate: 360},
    offscreen3: { x: '50%', opacity: 0 },
    onscreen3: { x: '0%', opacity: 1},
    offscreen4: { y: "50%", opacity: 0 },
    onscreen4: { y: "0%", opacity: 1 },
  };

const SecondSection: React.FC<SecondSectionProps> = () => {
    const [iceType, setIceType] = useState<any>("1");

    return (
        <section className="flex max-lg:flex-col items-center justify-between mt-20 max-sm:mt-10 w-full gap-40 max-xl:gap-20 max-lg:gap-28 max-md:gap-20 max-lg:items-start">
            <div className="w-full max-lg:w-3/4 max-md:w-full max-sm:w-[90%] m-auto relative">
                <motion.div
                    initial='offscreen2'
                    whileInView='onscreen2'
                    variants={cardVariants}
                    viewport={{ once: true}}
                    transition={{
                        delay: 0,
                        ease: "backOut",
                        duration: 5,
                    }}
                    className="pointer-events-none w-full h-auto relative"
                >
                    <Image
                        src={"/image/section2.svg"}
                        alt=""
                        width={100}
                        height={100}
                        className={"w-full h-full"}
                    />

                    <Image
                        onClick={() => setIceType("1")}
                        src={"/image/section2-ice-cream-child.svg"}
                        alt=""
                        width={170}
                        height={170}
                        className={
                            "absolute top-[200px] -left-14 max-sm:-left-10 max-sm:top-[150px] max-sm:w-[130px] max-sm:h-[130px] max-[500px]:top-[100px] max-[500px]:-left-5 max-[500px]:w-[90px] max-[500px]:h-[90px] cursor-pointer"
                        }
                    />

                    <Image
                        onClick={() => setIceType("2")}
                        src={"/image/section2-ice-cream-child.svg"}
                        alt=""
                        width={170}
                        height={170}
                        className={
                            "absolute bottom-0 left-20 max-sm:-bottom-5 max-sm:w-[130px] max-sm:h-[130px] max-[500px]:w-[90px] max-[500px]:h-[90px] cursor-pointer"
                        }
                    />

                    <Image
                        onClick={() => setIceType("3")}
                        src={"/image/section2-ice-cream-child.svg"}
                        alt=""
                        width={170}
                        height={170}
                        className={
                            "absolute top-16 -right-2 max-sm:top-10 max-sm:right-0 max-sm:w-[130px] max-sm:h-[130px] max-[500px]:top-5 max-[500px]:right-0 max-[500px]:w-[90px] max-[500px]:h-[90px] cursor-pointer"
                        }
                    />

                    <Image
                        onClick={() => setIceType("4")}
                        src={"/image/section2-ice-cream-child.svg"}
                        alt=""
                        width={170}
                        height={170}
                        className={
                            "absolute -right-7 bottom-20 max-sm:w-[130px] max-sm:h-[130px] max-[500px]:bottom-10 max-[500px]:-right-3 max-[500px]:w-[90px] max-[500px]:h-[90px] cursor-pointer"
                        }
                    />
                </motion.div>
                <motion.div
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{ once: true}}
                    variants={cardVariants}
                    transition={{ease:"easeOut", duration:2}}
                    className={
                        "absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-[500px] max-2xl:w-[370px] max-sm:w-[300px] max-[500px]:w-[220px]  max-[420px]:w-[180px]"
                    }
                >
                    <Image
                        src={"/image/section2-ice-cream.svg"}
                        alt=""
                        width={100}
                        height={100}
                        className="w-full h-auto absolute pointer-events-none top-1/2 -left-1/2 -translate-y-1/2"
                    />
                </motion.div>
            </div>

            <div className="w-full max-xl:w-3/4 max-sm:w-[100%]">
                <motion.p
                    initial={'offscreen3'}
                    whileInView={'onscreen3'}
                    viewport={{ once: true }}
                    transition={{
                        ease: "backOut",
                        duration: 3,
                    }}
                    variants={cardVariants}
                    className='text-4xl max-xl:text-3xl max-md:text-2xl font-["lepka"]'
                >
                    The result is a smooth and semi-solid foam
                </motion.p>
                <motion.p
                    initial={'offscreen3'}
                    whileInView={'onscreen3'}
                    variants={cardVariants}
                    viewport={{ once: true}}
                    transition={{
                        delay: 0.3,
                        ease: "backOut",
                        duration: 3,
                    }}
                    className="text-2xl max-xl:text-xl max-sm:text-lg mt-5 max-sm:mt-3"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </motion.p>
                <motion.div
                    initial={'offscreen4'}
                    whileInView={'onscreen4'}
                    variants={cardVariants}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                        delay: 0,
                        ease: "backOut",
                        duration: 3,
                    }}
                    className="flex items-center gap-10 max-sm:gap-5 mt-5"
                >
                    <button className="bg-[#014EA1] py-5 px-10 max-sm:py-3 max-sm:px-5 text-white text-xl max-sm:text-base rounded-full">
                        Купить сейчас
                    </button>
                    <button className="text-xl max-sm:text-base font-semibold">
                        Подробнее
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default SecondSection;
