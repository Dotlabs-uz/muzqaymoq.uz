"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface FirstSectionProps {}

const FirstSection: React.FC<FirstSectionProps> = () => {
    const [swiperRef, setSwiperRef] = useState<any>(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    return (
        <section className="w-full pt-44 max-md:pt-36 relative flex justify-between max-2xl:items-center max-2xl:flex-col-reverse max-2xl:gap-72 max-lg:gap-56 max-sm:gap-24 min-h-screen">
            <div className="bg-[#53C9ED] w-1/2 max-2xl:w-[70%] absolute top-0 -right-[11%] min-h-screen max-2xl:min-h-[90vh] max-lg:min-h-[73vh]  max-sm:w-[85%] max-sm:min-h-[55vh]"></div>

            <div className="w-full flex flex-col max-2xl:flex-col-reverse gap-10 items-start">
                <div className="w-[80%] max-2xl:w-1/2 max-lg:w-[70%] max-sm:w-[90%]">
                    <h1 className="font-bold gap-4 leading-tight text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-3xl tracking- font-['lepka']">
                        ALL YOU NEED
                        <span className='text-[#014EA1] font-["lepka"]'>
                            LOVE AND ICE CREAM
                        </span>
                    </h1>
                    <p className="mt-5 font-medium text-lg max-sm:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <button className="flex items-center gap-7 bg-black text-white px-14 py-4 max-md:px-10 max-md:py-3 max-sm:px-8 max-sm:py-2 rounded-full mt-6">
                        Купить сейчас
                        <Image
                            src={"/icons/to-right-icon.png"}
                            className="rotate-90"
                            width={12}
                            height={10}
                            alt=""
                        />
                    </button>
                </div>
                <div className="mt-10 max-2xl:mt-0 w-full relative">
                    <p className="text-lg max-2xl:text-2xl max-xl:text-xl font-semibold">
                        You mignt love Ice cream:
                    </p>
                    <div className="flex items-center gap-5">
                        <div className="relative mt-5">
                            <Swiper
                                className="w-[600px] max-2xl:w-[100vw]"
                                onSwiper={(swiper: any) => setSwiperRef(swiper)}
                                spaceBetween={20}
                                slidesPerView={2}
                                breakpoints={{
                                    1536: {
                                        spaceBetween: 20,
                                     },
                                     1920: {
                                        slidesPerView: 3,
                                     },
                                     1280: {
                                        slidesPerView: 3,
                                     },
                                     768: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                     },
                                     0: {
                                        slidesPerView: 2,
                                        spaceBetween: 5
                                     },
                                }
                                }
                            >
                                <SwiperSlide className="mb-5">
                                    <div className="flex gap-5 items-center shadow-lg rounded-3xl p-5 max-sm:p-3 cursor-pointer z-10">
                                        <Image
                                            src={"/image/ice-cream-2.png"}
                                            width={100}
                                            height={100}
                                            alt=""
                                            className="max-sm:w-[70px]"
                                        />
                                        <div className="flex flex-col max-sm:text-xs gap-2">
                                            <p className="font-bold">
                                                Сhoco vanilla Ice Cream
                                            </p>
                                            <p>2 Scoops</p>
                                            <p className="font-black text-lg max-md:text-base">
                                                $75
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="">
                                    <div className="flex gap-5 items-center shadow-lg rounded-3xl p-5 max-sm:p-3 cursor-pointer z-10">
                                        <Image
                                            src={"/image/ice-cream-2.png"}
                                            width={100}
                                            height={100}
                                            alt=""
                                            className="max-sm:w-[70px]"
                                        />
                                        <div className="flex flex-col max-sm:text-xs gap-2">
                                            <p className="font-bold">
                                                Сhoco vanilla Ice Cream
                                            </p>
                                            <p>2 Scoops</p>
                                            <p className="font-black text-lg max-md:text-base">
                                                $75
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="">
                                    <div className="flex gap-5 items-center shadow-lg rounded-3xl p-5 max-sm:p-3 cursor-pointer z-10">
                                        <Image
                                            src={"/image/ice-cream-2.png"}
                                            width={100}
                                            height={100}
                                            alt=""
                                            className="max-sm:w-[70px]"
                                        />
                                        <div className="flex flex-col max-sm:text-xs gap-2">
                                            <p className="font-bold">
                                                Сhoco vanilla Ice Cream
                                            </p>
                                            <p>2 Scoops</p>
                                            <p className="font-black text-lg max-md:text-base">
                                                $75
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex gap-5 items-center shadow-lg rounded-3xl p-5 max-sm:p-3 cursor-pointer z-10">
                                        <Image
                                            src={"/image/ice-cream-2.png"}
                                            width={100}
                                            height={100}
                                            alt=""
                                            className="max-sm:w-[70px]"
                                        />
                                        <div className="flex flex-col max-sm:text-xs gap-2">
                                            <p className="font-bold">
                                                Сhoco vanilla Ice Cream
                                            </p>
                                            <p>2 Scoops</p>
                                            <p className="font-black text-lg max-md:text-base">
                                                $75
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div onClick={nextHandler} className="p-3 max-2xl:hidden rounded-full shadow-xl flex items-center justify-center cursor-pointer  z-50">
                            <Image src={"/icons/to-right-icon2.png"} width={100} height={100} alt="" className="w-full h-full"/>
			    		</div>
                    </div>
                </div>
            </div>

            <div className="w-full flex items-start justify-between max-2xl:justify-center">
                <div className="w-full h-full z-10 max-2xl:relative">
                    <Image
                        src={"/image/Ice.svg"}
                        width={100}
                        height={100}
                        alt=""
                        className="w-[900px] h-[90vh] absolute top-1/2 left-[40%] -translate-y-1/2 max-2xl:-translate-y-[110px] max-2xl:left-1/2 max-2xl:-translate-x-[23%] max-xl:min-w-[1000px] max-lg:min-w-[580px] max-lg:h-[73vh] max-lg:-translate-y-[12vh] max-md:-translate-y-[8vh]  max-sm:min-w-[400px] max-sm:h-[60vh] max-sm:-translate-x-[30%] max-sm:-translate-y-[19%]"
                    />
                </div>
                <div className="w-full h-auto max-2xl:w-1/2 max-2xl:text-xl max-2xl:font-bold max-lg:font-medium max-lg:text-lg max-sm:text-base max-sm:pt-10 text-white z-10">
                    <div className="flex items-start gap-3">
                        <Image
                            src={"/icons/Vector1.png"}
                            width={100}
                            height={10}
                            alt=""
                            className="max-sm:w-10"
                        />
                        <div className="flex gap-10">
                            <div className="flex flex-col items-start gap-3">
                                <p>Calorie</p>
                                <p>Total fat</p>
                                <p>Protein</p>
                                <p>Vt.D</p>
                                <p>Calcium</p>
                            </div>
                            <div className="flex flex-col items-start gap-3 max-sm:hidden">
                                <p>210</p>
                                <p>10%</p>
                                <p>1g</p>
                                <p>0%</p>
                                <p>20%</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-20 max-2xl:mt-40 max-lg:mt-10 max-sm:mt-6">
                        <Image
                            src={"/icons/Vector1.png"}
                            width={100}
                            height={10}
                            alt=""
                            className="max-sm:w-10"
                        />
                        Available Size
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
