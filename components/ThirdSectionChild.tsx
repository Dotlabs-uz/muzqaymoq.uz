import { ModalContext } from "@/context/ModalContext";
import Image from "next/image";
import React, { useContext } from "react";

const ThirdSectionChild = ({ src, title}: any) => {
    const {modalHandelFunk} = useContext(ModalContext);

    return (
        <div className="flex items-start justify-center">
            <div className="bg-[#53C9ED] w-full h-[550px] max-lg:h-[400px]  max-sm:h-[210px] ease-linear duration-200 max-2xl:w-[400px] rounded-3xl max-lg:rounded-2xl flex flex-col justify-between gap-10 max-sm:gap-2 cursor-pointer items-center py-10 max-lg:py-5">
                <div
                    className={`bg-[#0c88ad] rounded-full relative ease-in-out duration-200  max-sm:h-[100px]  max-sm:w-[100px] max-lg:h-[180px]  max-lg:w-[180px] w-[250px] h-[250px] max-xl:w-[230px] max-xl:h-[230px]`}
                >
                    <Image
                        height={165}
                        width={165}
                        alt=""
                        src={src}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2  ease-in-out duration-200 max-xl:w-[180px] max-xl:h-[180px] max-lg:w-[130px] max-lg:h-[130px] max-sm:h-[100px] max-sm:w-[100px] -translate-y-1/2`}
                    />
                </div>
                <div className="flex flex-col gap-10 max-sm:gap-3 items-center justify-center">
                    <p
                        className={`font-semibold text-[#0c88ad] text-center w-[90%] ease-in-out duration-200 max-md:text-xl  max-lg:text-2xl text-3xl max-sm:text-sm`}
                    >
                        {title}
                    </p>

                    <button
                        onClick={()=>modalHandelFunk(true)}
                        className={`w-fit bg-[#0c88ad] text-white px-5 py-3 max-lg:py-2 max-sm:px-3 max-sm:py-1 rounded-xl  ease-in-out duration-200  max-md:text-sm  max-lg:text-base text-lg max-sm:text-sm max-[360px]:text-xs`}
                    >
                        Buyurtma qilish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThirdSectionChild;
