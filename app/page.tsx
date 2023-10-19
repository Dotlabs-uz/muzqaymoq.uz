"use client";

import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import Footer from "./components/Footer";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./components/Modal";

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
                <main className="w-full h-screen bg-[#E9EDDF] flex items-center justify-center">
                    <Image
                        src={"/image/preloader.svg"}
                        width={400}
                        height={400}
                        alt=""
                        className="animate-pulse animate-infinite animate-duration-[2000ms] animate-ease-linear"
                    ></Image>
                </main>
            ) : (
                <main id="home" className="bg-[#E9EDDF] overflow-hidden">
                    <div className="max-w-[1920px] m-auto relative max-2xl:max-w-[1536px] max-xl:max-w-[1280px] max-lg:max-w-[1024px] max-md:max-w-[768px] max-sm:max-w-[640px] px-24 max-[1330px]:px-16 max-sm:px-7">
                        <Header />

                        <FirstSection setModalHendel={setModalHendel}/>

                        <SecondSection />

                        <ThirdSection />

                        <FourthSection />

                        <FifthSection />
                    </div>
                    <Footer />
                    {
                        modalHandel ? <Modal setModalHendel={setModalHendel}/> : null
                    }
                </main>
            )}
        </>
    );
}
