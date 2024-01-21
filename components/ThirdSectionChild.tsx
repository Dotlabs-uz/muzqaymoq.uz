import Image from "next/image";
import React from "react";

const ThirdSectionChild = ({ src, title, scrollToContent }: any) => {
    return (
        <div className="flex items-start justify-center">
            <div className="bg-[#53C9ED] w-full h-[550px] max-lg:h-[400px]  max-[400px]:h-[320px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-[400px]:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                <div
                    className={`bg-[#0c88ad] rounded-full relative ease-in-out duration-200  max-[400px]:h-[120px]  max-[400px]:w-[120px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]`}
                >
                    <Image
                        height={165}
                        width={165}
                        alt=""
                        src={src}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[150px] max-xl:h-[290px] max-lg:w-[120px] max-lg:h-[210px] max-[400px]:h-[160px] max-[400px]:w-[90px] -translate-y-1/2`}
                    />
                </div>
                <div className="flex flex-col gap-10 items-center justify-center">
                    <p
                        className={`font-semibold text-[#0c88ad] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl`}
                    >
                        {title}
                    </p>

                    <button
                        onClick={(e) => scrollToContent(e, "form_tg")}
                        className={`w-fit bg-[#0c88ad] text-white px-5 py-3 max-lg:py-2 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg`}
                    >
                        Buyurtma qilish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThirdSectionChild;
