import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface FourthSectionProps {}

const FourthSection: React.FC<FourthSectionProps> = () => {
    return (
        <section className="mt-20">
            <div className="bg-[#53C9ED] flex max-xl:flex-col justify-center items-center p-20 max-sm:p-16 rounded-[80px] max-md:rounded-[50px] max-sm:rounded-[30px] relative">
                <Image
                    src={"/image/fourthSectionVector.svg"}
                    alt=""
                    width={170}
                    height={170}
                    className="pointer-events-none absolute top-10 left-10 max-sm:w-[130px] max-[500px]:w-[100px] max-sm:left-5 max-sm:top-5"
                />
                <Image
                    src={"/image/fourthSectionVector.svg"}
                    alt=""
                    width={170}
                    height={170}
                    className="pointer-events-none absolute top-10 right-10 rotate-90 max-sm:w-[130px] max-[500px]:w-[100px] max-sm:right-5 max-sm:top-5"
                />
                <Image
                    src={"/image/fourthSectionVector.svg"}
                    alt=""
                    width={170}
                    height={170}
                    className="pointer-events-none absolute bottom-10 right-10 rotate-180 max-sm:w-[130px] max-[500px]:w-[100px] max-sm:right-5 max-sm:bottom-5"
                />
                <Image
                    src={"/image/fourthSectionVector.svg"}
                    alt=""
                    width={170}
                    height={170}
                    className="pointer-events-none absolute bottom-10 left-10 -rotate-90 max-sm:w-[130px] max-[500px]:w-[100px] max-sm:left-5 max-sm:bottom-5"
                />

                <div className="w-full flex items-center justify-center">
                    <Image
                        src={"/image/firthSection-Ice-cream.svg"}
                        alt=""
                        width={500}
                        height={500}
						className="pointer-events-none"
                    />
                </div>

                <div className="w-full max-xl:w-3/4 max-sm:w-[100%]">
                    <p className='text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl text-white font-["lepka"]'>
                        The result is a smooth and semi-solid foam
                    </p>
                    <p className="text-2xl max-xl:text-xl max-sm:text-base mt-5 font-semibold max-sm:mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.{" "}
                    </p>
                    <div className="flex max-md:flex-col items-center max-md:items-start gap-10 max-sm:gap-5 mt-5">
                        <button className="bg-[#014EA1] py-5 px-10 max-sm:py-3 max-sm:px-5 text-white text-xl max-sm:text-base rounded-full">
                            Купить сейчас
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourthSection;
