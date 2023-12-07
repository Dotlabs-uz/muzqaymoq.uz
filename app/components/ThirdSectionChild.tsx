import Image from "next/image";
import React, { useState } from "react";

interface ThirdSectionChild {}

const ThirdSectionChild = () => {

    return (
        <div className="flex items-start justify-center">
            <div
                className="bg-[#9D93C2] w-full h-[550px] max-lg:h-[400px]  max-[400px]:h-[320px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-[400px]:gap-2 cursor-pointer items-center py-10 max-lg:py-5"
            >
                <div
                    className={`bg-[#2A1B68] rounded-full relative ease-in-out duration-200  max-[400px]:h-[120px]  max-[400px]:w-[120px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]`}
                >
                    <Image
                        height={165}
                        width={165}
                        alt=""
                        src={"/image/ice-ping.svg"}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[290px] max-xl:h-[290px] max-lg:w-[210px] max-lg:h-[210px] max-[400px]:h-[140px] max-[400px]:w-[140px] -translate-y-1/2`}
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p
                        className={`font-semibold text-[#2A1B68] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl`}
                    >
                        BLUEBERRY MINT
                    </p>
                    <p
                        className={`font-semibold text-white my-3 max-lg:my-2 ease-in-out duration-200  max-md:text-lg max-lg:text-xl text-2xl `}
                    >
                        100$
                    </p>
                    <button
                        className={`w-1/2 max-md:w-3/4 bg-[#2A1B68] text-white py-3 max-lg:py-2 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg`}
                    >
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThirdSectionChild;
