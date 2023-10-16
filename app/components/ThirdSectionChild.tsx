import Image from "next/image";
import React, { useState } from "react";

interface ThirdSectionChild {}

const ThirdSectionChild = () => {

    const [hover, setHover] = useState(false);

    return (
        <div className="h-[90vh] max-h-[670px] max-xl:h-[80vh] max-lg:h-[530px] max-[400px]:h-[420px] flex items-start pt-16 max-lg:pt-12 max-[400px]:pt-8 justify-center">
            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="bg-[#9D93C2] w-full max-h-[600px] h-[75vh] max-xl:h-[65vh] max-xl:hover:h-[70vh] max-lg:h-[400px] max-lg:hover:h-[450px] max-[400px]:h-[320px] max-[400px]:hover:h-[370px] focus:h-[80vh] hover:h-[80vh] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-[400px]:gap-2 cursor-pointer items-center py-10 max-lg:py-5"
            >
                <div
                    className={`bg-[#2A1B68] rounded-full relative ease-in-out duration-200 ${
                        hover
                            ? `w-[270px] h-[270px] -translate-y-4 max-xl:w-[250px] max-xl:h-[250px] max-lg:w-[200px] max-lg:h-[200px] max-[400px]:w-[140px] max-[400px]:h-[140px]`
                            : `w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px] max-lg:w-[180px] max-lg:h-[180px] max-[400px]:w-[120px] max-[400px]:h-[120px]`
                    }`}
                >
                    <Image
                        height={165}
                        width={165}
                        alt=""
                        src={"/image/ice-ping.svg"}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[290px] max-xl:h-[290px] max-lg:w-[210px] max-lg:h-[210px] max-[400px]:h-[140px] max-[400px]:w-[140px] ${
                            hover ? `-translate-y-[70%] ` : `-translate-y-1/2`
                        }`}
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p
                        className={`font-semibold text-[#2A1B68] text-center w-[90%] ease-in-out duration-200 ${
                            hover ? `text-4xl max-lg:text-3xl max-md:text-2xl` : `text-3xl max-lg:text-2xl max-md:text-xl`
                        }`}
                    >
                        BLUEBERRY MINT
                    </p>
                    <p
                        className={`font-semibold text-white my-3 max-lg:my-2 ease-in-out duration-200 ${
                            hover ? `text-3xl max-lg:text-2xl max-md:text-xl` : `text-2xl max-lg:text-xl max-md:text-lg`
                        }`}
                    >
                        100$
                    </p>
                    <button
                        className={`w-1/2 max-md:w-3/4 bg-[#2A1B68] text-white py-3 max-lg:py-2 rounded-xl  ease-in-out duration-200 ${
                            hover ? `text-xl max-lg:text-lg max-md:text-base` : `text-lg max-lg:text-base max-md:text-sm`
                        }`}
                    >
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThirdSectionChild;
