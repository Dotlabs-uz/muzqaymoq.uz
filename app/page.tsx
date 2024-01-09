"use client";
import Header from "@/components/Header";
import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import SuisseIntl from "next/font/local"
import SecondSwiper from "@/components/SecondSwiper";
import TopingSwiper from "@/components/TopingSwiper";
import StakanSwiper from "@/components/StakanSwiper";
import FormSection from "@/components/FormSection";
import StanokSwiper from "@/components/StanokSwiper";
 
const myFont = SuisseIntl({ src: '../public/fonts/Suisse Intl/SuisseIntl-Regular.otf' })

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    const [modalHandel, setModalHendel] = useState(false);

    useEffect(() => {
        window.addEventListener("load", () => {
            setIsLoading(false);
        });
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {isLoading ? (
                <main className="w-full h-screen bg-white flex items-center justify-center">
                    <Image
                        src={"/image/preloader.svg"}
                        width={400}
                        height={400}
                        alt=""
                        className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-linear"
                    ></Image>
                </main>
            ) : (
                <>
                <Header />
                <main id="home" className={`${myFont.className} bg-white overflow-hidden`}>
                    <div className="max-w-[1920px] m-auto mt-28 relative max-2xl:max-w-[1536px] max-xl:max-w-[1280px] max-lg:max-w-[1024px] max-md:max-w-[768px] max-sm:max-w-[640px] px-24 max-[1330px]:px-16 max-sm:px-7">

                        <ThirdSection />
                        <SecondSwiper />
                        <TopingSwiper />
                        <StakanSwiper />
                        <StanokSwiper />

                        <FormSection />
                       
                        <SecondSection />


                        <FourthSection />

                        <FifthSection />
                    </div>
                    {
                        modalHandel ? <Modal setModalHendel={setModalHendel}/> : null
                    }
                </main>
                <Footer />
                </>
            )}
        </>
    );
}
