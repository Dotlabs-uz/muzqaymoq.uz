import Image from "next/image";
import React from "react";

interface FooterSectionProps {}

const Footer: React.FC<FooterSectionProps> = () => {
    return (
        <footer
            id="contact"
            className="flex max-lg:flex-col justify-center max-sm:flex-col gap-32 max-lg:gap-9 bg-[#D0CECC] pt-10 px-20 pb-20 max-sm:px-10 max-sm:pb-10"
        >
            <div>
                <Image
                    src={"/muzqaymoquz logo+ (2).png"}
                    width={400}
                    height={200}
                    alt=""
                    className="max-2xl:w-[350px] max-2xl:hidden"
                />
            </div>
            <div>
            <Image
                    src={"/muzqaymoquz logo+ (2).png"}
                    width={350}
                    height={200}
                    alt=""
                    className="hidden max-2xl:block mb-5"
                />
                <h3 className="text-2xl">Kontaktlar</h3>
                <ol className="mt-4">
                    <li>
                        Samrqand:{" "}
                        <a href="tel:+998915268088">+998 (91) 526-80-88</a>
                    </li>
                    <li className="mt-5">
                        Toshkent:{" "}
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
                    className="max-xl:w-[350px] max-xl:h-[200px] max-sm:w-[100%]"
                ></iframe>
            </div>
        </footer>
    );
};

export default Footer;
