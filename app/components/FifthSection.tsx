import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface FifthSectionSectionProps {}

const FifthSection: React.FC<FifthSectionSectionProps> = () => {
    return (
        <section className="mt-20">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, ease: "backOut", duration: 2 }}
                viewport={{ once: true}}
                className="font-bold text-center leading-tight text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-3xl tracking- font-['lepka']"
            >
                SOME OF OUR
                <span className='text-[#1C8BAD] font-["lepka"]'>
                    Ice cream lovers
                </span>
            </motion.h1>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-14 max-sm:gap-7 my-6">
                <motion.div
                    initial={{ opacity: 0, x: "-100%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0, ease: "backOut", duration: 2 }}
                    viewport={{ once: true}}
                    className="p-7 shadow-2xl rounded-2xl"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl max-xl:text-2xl font-semibold">
                                John Devson
                            </p>
                            <Image
                                src={"/image/section3.svg"}
                                alt={""}
                                width={150}
                                height={100}
                                className="mt-5"
                            />
                        </div>
                        <Image
                            src={"/icons/section5-icon.png"}
                            alt=""
                            width={70}
                            height={70}
                            className={"max-lg:w-[50px] max-h-[50px]"}
                        />
                    </div>
                    <p className="mt-10 text-xl max-lg:text-lg font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0, ease: "backOut", duration: 2 }}
                    viewport={{ once: true}}
                    className="p-7 shadow-2xl rounded-2xl "
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl max-xl:text-2xl font-semibold">
                                John Devson
                            </p>
                            <Image
                                src={"/image/section3.svg"}
                                alt={""}
                                width={150}
                                height={100}
                                className="mt-5 pointer-events-none"
                            />
                        </div>
                        <Image
                            src={"/icons/section5-icon.png"}
                            alt=""
                            width={70}
                            height={70}
                            className={
                                "pointer-events-none max-lg:w-[50px] max-h-[50px]"
                            }
                        />
                    </div>
                    <p className="mt-10 text-xl max-lg:text-lg font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, ease: "backOut", duration: 2 }}
                    viewport={{ once: true}}
                    className="p-7 shadow-2xl rounded-2xl row-start-2 row-end-3 col-start-2 col-end-3 max-md:row-start-4 max-md:row-end-5 max-md:col-span-1"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-3xl max-xl:text-2xl font-semibold">
                                John Devson
                            </p>
                            <Image
                                src={"/image/section3.svg"}
                                alt={""}
                                width={150}
                                height={100}
                                className="mt-5 pointer-events-none"
                            />
                        </div>
                        <Image
                            src={"/icons/section5-icon.png"}
                            alt=""
                            width={70}
                            height={70}
                            className={
                                "max-lg:w-[50px] max-h-[50px] pointer-events-none"
                            }
                        />
                    </div>
                    <p className="mt-10 text-xl max-lg:text-lg font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, ease: "backOut", duration: 2 }}
                    viewport={{ once: true}}
                    className="flex items-center justify-center col-start-2 col-end-3 row-start-1 row-end-2 max-xl:col-span-1 "
                >
                    <Image
                        src={"/image/section2-ice-cream-child.svg"}
                        alt=""
                        width={100}
                        height={100}
                        className="h-full w-[70%] max-md:w-[60%] max-sm:w-[80%] pointer-events-none"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default FifthSection;
