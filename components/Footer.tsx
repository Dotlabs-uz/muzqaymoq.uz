import Image from "next/image";
import React from "react";

interface FooterSectionProps {}

const Footer: React.FC<FooterSectionProps> = () => {
    return (
        <footer
            id="contact"
            className="flex justify-center max-sm:flex-col gap-32 max-lg:gap-9 bg-[#D0CECC] pt-10 px-20 pb-20 max-sm:px-10 max-sm:pb-10"
        >
            <div>
                <Image
                    src={"/ICE_LOGO-removebg-preview.png"}
                    width={200}
                    height={200}
                    alt=""
                    className="w-[200px] h-[100px] max-xl:w-[70px]"
                />
            </div>
            {/* <div>
                <h3 className="text-white text-2xl">Hamkorlar</h3>
                <ol className="text-white mt-4">
                    <li>hamkor</li>
                    <li className="mt-1">hamkor</li>
                    <li className="mt-1">hamkor</li>
                    <li className="mt-1">hamkor</li>
                </ol>
            </div> */}
            {/* <div>
                <h3 className="text-white text-2xl">Adres</h3>
                <ol className="text-white mt-4">
                    <li>Samarqnd, Samarqand</li>
                    <li className="mt-1">Samarqnd, Samarqand</li>
                    <li className="mt-1">Samarqnd, Samarqand</li>
                    <li className="mt-1">Samarqnd, Samarqand</li>
                </ol>
            </div> */}
            <div>
                <h3 className="text-2xl">Kontaktlar</h3>
                <ol className="mt-4">
                    <li>
                        Samrqand nomer:{" "}
                        <a href="tel:+998909942345">+998 (90) 994-23-45</a>
                    </li>
                    <li className="mt-5">
                        Toshkent nomer:{" "}
                        <a href="tel:+998909415757">+998 (90) 941-57-57</a>
                    </li>
                </ol>
            </div>
            <div>
                <h3 className="text-2xl mb-3">Manzil</h3>
                <iframe
                    src="https://yandex.com/map-widget/v1/?um=constructor%3A81608b55e0f63b542879226a2c42edf234957a51542ae6187a3e26b240407f2b&amp;source=constructor"
                    width="493"
                    height="244"
                    frameBorder="0"
                ></iframe>
            </div>
        </footer>
    );
};

export default Footer;
