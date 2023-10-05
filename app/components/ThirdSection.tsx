"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ThirdSectionChild from "./ThirdSectionChild";

interface SecondSectionProps {}

const ThirdSection: React.FC<SecondSectionProps> = () => {

    return (
        <section className="mt-20">
            <h2 className='text-4xl font-["lepka"]'>Popular product</h2>

            <div className="relative mt-5">
                <Swiper
                    className="w-[120vw]"
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={{
                        1668:{
                            slidesPerView: 6,
                        },
                        769: {
                            slidesPerView: 4,
                        },
                        600:{
                            slidesPerView: 3,
                        },
                        0:{
                            slidesPerView: 2,
                        }
                    }}
                >
                    {
                        [0,1,2,3,4,5,6].map((item:any)=>(
                            <SwiperSlide key={item}>
                                <ThirdSectionChild/>
                            </SwiperSlide>
                        ))
                        
                    }
                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </div>

            {/* <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-10">
                {[0, 1, 2].map((item: any) => (
                    <div key={item}>
                        <div className="h-[50vh] max-xl:h-[40vh] max-lg:h-[35vh] rounded-3xl overflow-hidden">
                            <Image
                                src={"/image/section3.png"}
                                alt=""
                                width={100}
                                height={100}
                                className="h-full w-full"
                            />
                        </div>
                        <p className="mt-3 text-2xl max-md:text-xl max-sm:text-lg font-semibold">
                            John Devson
                        </p>
                        <div className="flex items-center gap-5 mt-2">
                            <p className="text-xl max-md:text-lg max-sm:text-base">
                                $56.00
                            </p>
                            <Image
                                src={"/image/section3-stars.png"}
                                alt={""}
                                width={150}
                                height={100}
                            />
                        </div>
                    </div>
                ))}
            </div> */}
        </section>
    );
};

export default ThirdSection;
