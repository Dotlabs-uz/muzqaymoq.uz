// "use client";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, Variants } from "framer-motion";
import "swiper/css";
import Image from "next/image";
import { ModalContext } from "@/context/ModalContext";

const cardVariants: Variants = {
    offscreen: { x: "-20%", opacity: 0 },
    onscreen: { x: 0, opacity: 1 },
    offscreen2: { x: "100%" },
    onscreen2: { x: 0 },
};

interface SecondSectionProps {}

const SecondSwiper: React.FC<SecondSectionProps> = () => {
    const { modalHandelFunk } = useContext(ModalContext);
    return (
        <section className="mt-20 max-sm:mt-5">
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
                className="relative mt-5 max-sm:mt-2 h-auto"
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
                    <SwiperSlide>
                        <div className="flex items-start justify-center">
                            <div className="bg-[#53C9ED] w-full h-[550px] max-lg:h-[400px] max-sm:h-[240px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-sm:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                <div
                                    className="bg-[#0c88ad] rounded-full relative ease-in-out duration-200  max-sm:h-[100px]  max-sm:w-[100px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]"
                                >
                                    <Image
                                        height={200}
                                        width={140}
                                        alt=""
                                        src={'/image/rojoksImages/rojok.webp'}
                                        className={"absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[130px] max-lg:w-[95px] max-sm:w-[60px] -translate-y-1/2"}
                                    />
                                </div>
                                <div className="flex flex-col gap-10 max-sm:gap-3 items-center justify-center">
                                    <p
                                        className={"font-semibold text-[#0c88ad] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl max-sm:text-sm"}
                                    >
                                        KATTA
                                    </p>

                                    <button
                                        onClick={() => modalHandelFunk(true)}
                                        className={"w-fit bg-[#0c88ad] text-white px-5 py-3 max-lg:py-2 max-sm:px-3 max-sm:py-1 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg max-sm:text-sm max-[360px]:text-xs"}
                                    >
                                        Buyurtma qilish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-start justify-center">
                            <div className="bg-[#53C9ED] w-full h-[550px] max-lg:h-[400px]  max-sm:h-[240px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-sm:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                <div
                                    className={"bg-[#0c88ad] rounded-full relative ease-in-out duration-200  max-sm:h-[100px]  max-sm:w-[100px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]"}
                                >
                                    <Image
                                        height={200}
                                        width={120}
                                        alt=""
                                        src={'/image/rojoksImages/rojok.webp'}
                                        className={"absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[130px] max-lg:w-[85px] max-sm:w-[50px] -translate-y-1/2"}
                                    />
                                </div>
                                <div className="flex flex-col gap-10 max-sm:gap-3 items-center justify-center">
                                    <p
                                        className={"font-semibold text-[#0c88ad] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl max-sm:text-sm"}
                                    >
                                        ÕRTA
                                    </p>

                                    <button
                                        onClick={() => modalHandelFunk(true)}
                                        className={"w-fit bg-[#0c88ad] text-white px-5 py-3 max-lg:py-2 max-sm:px-3 max-sm:py-1 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg max-sm:text-sm max-[360px]:text-xs"}
                                    >
                                        Buyurtma qilish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-start justify-center">
                            <div className="bg-[#53C9ED] w-full h-[550px] max-lg:h-[400px]  max-sm:h-[240px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-sm:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                <div
                                    className={"bg-[#0c88ad] rounded-full relative ease-in-out duration-200  max-sm:h-[100px]  max-sm:w-[100px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]"}
                                >
                                    <Image
                                        height={200}
                                        width={105}
                                        alt=""
                                        src={'/image/rojoksImages/rojok.webp'}
                                        className={"absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[110px] max-lg:w-[75px] max-sm:w-[40px] -translate-y-1/2"}
                                    />
                                </div>
                                <div className="flex flex-col gap-10 max-sm:gap-3 items-center justify-center">
                                    <p
                                        className={"font-semibold text-[#0c88ad] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl max-sm:text-sm"}
                                    >
                                        KICHIK
                                    </p>

                                    <button
                                        onClick={() => modalHandelFunk(true)}
                                        className={"w-fit bg-[#0c88ad] text-white px-5 py-3 max-lg:py-2 max-sm:px-3 max-sm:py-1 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg max-sm:text-sm max-[360px]:text-xs"}
                                    >
                                        Buyurtma qilish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-start justify-center">
                            <div className="bg-[#53C9ED] w-full h-[550px] max-lg:h-[400px]  max-sm:h-[240px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-sm:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                <div
                                    className={"bg-[#0c88ad] rounded-full relative ease-in-out duration-200  max-sm:h-[100px]  max-sm:w-[100px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]"}
                                >
                                    <Image
                                        height={200}
                                        width={310}
                                        alt=""
                                        src={'/image/rojoksImages/rojok2.webp'}
                                        className={"absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 w-[300px] h-[220px]  max-lg:h-[170px] max-lg:w-[200px] max-sm:w-[200px] max-sm:h-[90px] -translate-y-1/2"}
                                    />
                                </div>
                                <div className="flex flex-col gap-10 max-sm:gap-3 items-center justify-center">
                                    <p
                                        className={"font-semibold text-[#0c88ad] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl max-sm:text-sm"}
                                    >
                                        KONUS
                                    </p>

                                    <button
                                        onClick={() => modalHandelFunk(true)}
                                        className={"w-fit bg-[#0c88ad] text-white px-5 py-3 max-lg:py-2 max-sm:px-3 max-sm:py-1 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg max-sm:text-sm max-[360px]:text-xs"}
                                    >
                                        Buyurtma qilish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-start justify-center">
                            <div className="bg-[#53C9ED] w-full h-[550px] max-lg:h-[400px]  max-sm:h-[240px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-sm:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                <div
                                    className={"bg-[#0c88ad] rounded-full relative ease-in-out duration-200  max-sm:h-[100px]  max-sm:w-[100px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]"}
                                >
                                    <Image
                                        height={200}
                                        width={240}
                                        alt=""
                                        src={'/image/rojoksImages/rojok3.webp'}
                                        className={"absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[220px] max-lg:w-[180px] max-sm:w-[90px] -translate-y-1/2"}
                                    />
                                </div>
                                <div className="flex flex-col gap-10 max-sm:gap-3 items-center justify-center">
                                    <p
                                        className={"font-semibold text-[#0c88ad] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl max-sm:text-sm"}
                                    >
                                        FAKEL
                                    </p>

                                    <button
                                        onClick={() => modalHandelFunk(true)}
                                        className={"w-fit bg-[#0c88ad] text-white px-5 py-3 max-lg:py-2 max-sm:px-3 max-sm:py-1 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg max-sm:text-sm max-[360px]:text-xs"}
                                    >
                                        Buyurtma qilish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-start justify-center">
                            <div className="bg-[#53C9ED] w-full h-[550px] max-lg:h-[400px]  max-sm:h-[240px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-sm:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                                <div
                                    className={"bg-[#0c88ad] rounded-full relative ease-in-out duration-200  max-sm:h-[100px]  max-sm:w-[100px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]"}
                                >
                                    <Image
                                        height={200}
                                        width={220}
                                        alt=""
                                        src={'/image/rojoksImages/rojok4.webp'}
                                        className={"absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[200px] max-lg:w-[150px] max-sm:w-[80px] -translate-y-1/2"}
                                    />
                                </div>
                                <div className="flex flex-col gap-10 max-sm:gap-3 items-center justify-center">
                                    <p
                                        className={"font-semibold text-[#0c88ad] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl max-sm:text-sm"}
                                    >
                                        FAKEL
                                    </p>

                                    <button
                                        onClick={() => modalHandelFunk(true)}
                                        className={"w-fit bg-[#0c88ad] text-white px-5 py-3 max-lg:py-2 max-sm:px-3 max-sm:py-1 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg max-sm:text-sm max-[360px]:text-xs"}
                                    >
                                        Buyurtma qilish
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
