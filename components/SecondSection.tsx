import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

interface SecondSectionProps {}

const cardVariants: Variants = {
    offscreen: { scale: 0.2, x: "-30%" },
    onscreen: { scale: 1, x: 0 },
    offscreen2: {},
    onscreen2: { rotate: 360 },
    offscreen3: { x: "50%", opacity: 0 },
    onscreen3: { x: "0%", opacity: 1 },
    offscreen4: { y: "50%", opacity: 0 },
    onscreen4: { y: "0%", opacity: 1 },
};

const SecondSection: React.FC<SecondSectionProps> = () => {
    return (
        <section className="flex max-lg:flex-col items-center justify-between mt-32 max-sm:mt-10 w-full gap-20 max-xl:gap-10 max-lg:gap-20 max-sm:gap-5 relative py-10 pl-20 max-sm:pl-2">
            <div className="absolute top-0 right-0 w-full h-full rounded-[50px]"></div>

            <div className="w-full max-lg:w-3/4 max-md:w-full max-sm:w-[90%] m-auto relative">
                <motion.div
                    initial="offscreen2"
                    whileInView="onscreen2"
                    variants={cardVariants}
                    viewport={{ once: true }}
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
                        src={"/image/topings/rasberry-toping.webp"}
                        alt=""
                        width={200}
                        height={200}
                        className={
                            "absolute top-[200px] -left-14 max-[1700px]:w-[170px] max-[1700px]:top-[150px] max-xl:w-[150px] max-xl:-left-10 max-lg:w-[170px] max-lg:top-[200px] max-md:top-[180px] max-sm:-left-10 max-sm:top-[150px] max-sm:w-[130px] max-sm:h-[130px] max-[500px]:top-[100px] max-[500px]:-left-5 max-[500px]:w-[90px] max-[500px]:h-[90px] cursor-pointer"
                        }
                    />

                    <Image
                        src={"/image/iceCreamArrImages/mmm.webp"}
                        alt=""
                        width={180}
                        height={150}
                        className={
                            "absolute -bottom-4 left-1/2 -translate-x-1/2 max-[1700px]:w-[140px] max-2xl:w-[130px] max-xl:w-[110px] max-lg:w-[150px] max-md:w-[120px] max-sm:w-[130px] max-[500px]:w-[80px] max-sm:-bottom-5 cursor-pointer"
                        }
                    />

                    <Image
                        src={"/image/rojoksImages/rojok.webp"}
                        alt=""
                        width={110}
                        height={110}
                        className={
                            "absolute top-[200px] right-0 max-[1700px]:w-[80px] max-[1700px]:top-[150px] max-xl:w-[70px] max-lg:w-[90px] max-lg:top-[180px] max-md:top-[160px] max-md:w-[80px] max-sm:top-[150px] max-sm:w-[70px] max-[500px]:top-[100px] max-[500px]:w-[40px] cursor-pointer"
                        }
                    />
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className={
                        "absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-[250px] max-2xl:w-[150px] max-lg:w-[200px] max-sm:w-[150px] max-[420px]:w-[100px]"
                    }
                >
                    <Image
                        src={"/image/ice_stanok.webp"}
                        alt=""
                        width={200}
                        height={400}
                        className="w-full h-auto absolute pointer-events-none top-1/2 -left-1/2 -translate-y-1/2"
                    />
                </motion.div>
            </div>

            <p className="text-9xl z-10 text-[#bcbdb7]">=</p>

            <div className="w-full relative">
                <div className="w-full flex max-lg:gap-40 max-sm:gap-20 items-start max-lg:items-center max-sm:items-start max-lg:translate-y-10 max-lg:h-[700px] max-md:h-[550px] max-sm:h-[300px] justify-between">
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
                            className="pointer-events-none w-[990px] h-[800px] max-2xl:w-[900px] max-2xl:h-[95vh] absolute top-[55%] -left-[10%]  max-lg:left-0 max-lg:top-1/2 max-md:h-[700px] max-md:top-[50%] max-sm:h-[450px] max-sm:w-[450px] max-sm:top-[120px] -translate-y-1/2 "
                        />
                    </motion.div>
                    <div className="text-[#808080] flex items-start flex-col justify-between w-full gap-40 max-2xl:gap-24 max-xl:gap-10 max-lg:gap-60 max-md:gap-32 max-sm:gap-20 z-10 max-md:text-sm max-sm:text-xs max-[400px]:text-[10px]">
                        <div className="flex items-center gap-3">
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
                                    className="max-sm:w-10 max-md:w-20 invert-[50%]"
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
                                Aralashma va toping
                            </motion.p>
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
                                    className="max-md:w-20 max-sm:w-10  invert-[50%]"
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
                                Vafli
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
